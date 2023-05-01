import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
import axios from "axios";
const pinia = createPinia();
const app = createApp(App);
import Cookies from "js-cookie";

app.use(pinia);

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

axios.interceptors.request.use(
    async (config) => {
        let authToken = Cookies.get("bearer");
        config.headers = {
            Authorization: `Bearer ${authToken}`,
        };

        config.url = `https://chat-bot.test/${config.url}`;
        return await config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

app.use(router);

app.mount("#app");
