import { defineStore } from 'pinia';
import axios from 'axios';
const name = 'api/auth';
import router from '../routes';

export const useAuthStore = defineStore('auth', {
    state: () => ({
		access_token: null,
		error: null,
		user: null,
		auth: null,
	}),

    actions: {
        async login(userCredentials) {
			await axios
				.post(`${name}/login`, userCredentials)
				.then(response => {
					this.access_token = response.data;
					router.push('/dashboard')
				})
				.catch(error => {
					this.error = error.response.data.error;
					alert(error.response.data.error);
					return;
				});
		},

        async logout() {
			await axios.post(`${name}/logout`)
			.then(response => {
				this.auth = 0;
			})
			.catch(error => {

			});
		},
    },
    
    getters: {
		getError(state) {
			return state.error;
		},

		getAccessToken(state) {
			return state.access_token;
		},

		getAuth(state) {
			return state.auth;
		},
	
	}

})