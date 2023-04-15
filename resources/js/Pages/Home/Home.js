import axios from "axios";
import { ref, onMounted, defineComponent, reactive, onUnmounted } from "vue";
import router from "../../routes";
import { useAuthStore } from "../../Store/auth";
import Cookies from 'js-cookie';

export default defineComponent({
    setup () {
        const bearer = Cookies.get('bearer');
        let auth = reactive({
            logged: 0
        });
        const authStore = useAuthStore();

        onMounted(() => {
            bearer != null ? auth.logged = 1 : auth.logged = 0;
        });

        const logout = async () => {
            await authStore.logout();
            await Cookies.remove('bearer');
			auth.logged = authStore.getAuth;
            await router.push('/');
        };

        return {
            auth,
            logout
        }
    }
})