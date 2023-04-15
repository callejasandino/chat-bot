import { defineComponent, reactive } from "vue";
import { useAuthStore } from "../../Store/auth";
import router from '../../routes';
import Cookies from 'js-cookie';

export default defineComponent({
    setup () {
        const bearer = Cookies.get('bearer');

        if(bearer != null){
            router.push('dashboard');
        }

        const authStore = useAuthStore();
        const loginData = reactive({
            email: '',
            password: '',
        });

        const login = async () => {
            const userCredentials = {
                email: loginData.email,
                password: loginData.password
            };

            await authStore.login(userCredentials);

            await Cookies.set('bearer', authStore.getAccessToken, {expires: 1});
        }

        return {
            login,
            loginData
        }
    }
})