import { defineStore } from 'pinia';
import axios from 'axios';
const name = 'api/qandas';
// import router from '../routes';

export const useQandaStore = defineStore('qandas', {
    state: () => ({
		error: null,
		qanda: null,
	}),

    actions: {
		async index() {
			await axios
				.get(`${name}/index`)
				.then(response => {
					this.qanda = response.data;
				})
				.catch(error => {
					console.log(error);
					this.error = error;
				});
		},

        async store(qandaData) {
			await axios
				.post(`${name}/store`, qandaData)
				.then(response => {
					this.qanda = response.data;
				})
				.catch(error => {
					console.log(error);
					this.error = error;
				});
		},

		async update(id, qandaData) {
			await axios
				.post(`${name}/update/${id}`, qandaData)
				.then(response => {
					this.qanda = response.data;
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
					this.qanda = response.data;
				})
				.catch(error => {
					console.log(error);
					this.error = error;
				});
		},

		async download() {
			await axios
				.get(`${name}/download`)
				.then(response => {	
				})
				.catch(error => {
					console.log(error);
					this.error = error;
				});
		},
    },
    
    getters: {
		getQanda(state) {
			return state.qanda;
		},

		getError(state) {
			return state.error;
		},
	}
})