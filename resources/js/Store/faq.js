import { defineStore } from 'pinia';
import axios from 'axios';
const name = 'api/faq';
// import router from '../routes';

export const useFaqStore = defineStore('faq', {
    state: () => ({
		error: null,
		faq: null,
	}),

    actions: {

		async index() {
			await axios
				.get(`${name}/index`)
				.then(response => {
					this.faq = response.data;
				})
				.catch(error => {
					console.log(error);
					this.error = error;
				});
		},

        async store(faqData) {
			await axios
				.post(`${name}/store`, faqData)
				.then(response => {
					this.faq = response.data;
				})
				.catch(error => {
					console.log(error);
					this.error = error;
				});
		},

		async update(id, faqData) {
			await axios
				.post(`${name}/update/${id}`, faqData)
				.then(response => {
					this.faq = response.data;
				})
				.catch(error => {
					console.log(error);
					this.error = error;
				});
		},

		async delete(id) {
			await axios
				.post(`${name}/delete/${id}`)
				.then(response => {
					this.faq = response.data;
				})
				.catch(error => {
					console.log(error);
					this.error = error;
				});
		},
    },
    
    getters: {
		getError(state) {
			return state.error;
		},

		getFaq(state) {
			return state.faq;
		},
	}
})