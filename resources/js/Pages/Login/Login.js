import { defineComponent, reactive, ref } from "vue";
import { useAuthStore } from "../../Store/auth";
import router from "../../routes";
import Cookies from "js-cookie";

export default defineComponent({
    setup() {
        let bearer = ref(Cookies.get("bearer"));
        let error = ref(null);
        if (bearer.value != null) {
            router.push("dashboard");
        }

        const authStore = useAuthStore();
        const loginData = reactive({
            email: "",
            password: "",
        });

        const login = async () => {
            const userCredentials = {
                email: loginData.email,
                password: loginData.password,
            };

            await authStore.login(userCredentials);

            error.value = authStore.getError;

            if(error.value == null) {
                await Cookies.set("bearer", authStore.getAccessToken, {
                    expires: 1,
                });
    
                location.reload();
            }
        };

        return {
            login,
            loginData,
        };
    },
});
