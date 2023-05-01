import axios from "axios";
import { ref, onMounted, defineComponent, reactive, onUnmounted } from "vue";
import router from "../../routes";
import { useAuthStore } from "../../Store/auth";
import Cookies from "js-cookie";

export default defineComponent({
    setup() {
        let bearer = null;
        let auth = ref(false);
        const authStore = useAuthStore();

        onMounted(() => {
            bearer = Cookies.get("bearer");

            if (bearer != null) {
                auth.value = true;
            } else {
                auth.value = false;
            }
        });

        const logout = async () => {
            await authStore.logout();
            auth.value = false;
            await Cookies.remove("bearer");
            await router.push("/");
        };

        return {
            auth,
            logout,
        };
    },
});
