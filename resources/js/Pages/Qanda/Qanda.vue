<template>
    <div class="container mx-auto my-auto mt-5 p-5">
        <div class="mt-10 mb-10">
            <h1 class="mt-0 text-5xl font-medium leading-tight text-primary text-gray-700">
                Add another entry of Qanda Here:
            </h1>


            <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="store">
                <div class="mt-5">
                    <label for="message" class="input_question_label">Question:</label>
                    <input type="text" id="message" rows="4" class="input_question" placeholder="Your question here..." v-model="qanda.question">
                </div>

                <div class="mt-5">
                    <label for="message" class="input_answer_label">Answer:</label>
                    <textarea id="message" rows="4" class="answer_textarea" placeholder="Your answer here..." v-model="qanda.answer"></textarea>
                </div>

                <div class="mt-5 ml-auto">
                    <button type="submit" class="btn_save">Save</button>
                </div>
            </form>

        </div>

        <div v-if="qandas != null" class="mt-5">
            <table class="min-w-full divide-y  table-auto">
                <thead class="divide-gray-900">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ID</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Question</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Answer</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-gray-900 ">
                    <tr v-for="qanda in qandas.qandas" :key="qanda.id">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{{qanda.id}}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 w-1/4">{{qanda.question}}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-gray-700">
                            <div class="answer_container">
                                <p class="break-all">{{qanda.answer}}</p>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                                <button class="bg-red-700 hover:bg-red-800 text-slate-100 font-bold py-2 px-4 rounded mr-2" @click="openUpdateModal(qanda.id, qanda.question, qanda.answer)">
                                Update
                                </button>
                                <button class="bg-gray-700 hover:bg-gray-800 text-slate-100 font-bold py-2 px-4 rounded" @click="destroy(qanda.id)">
                                Delete
                                </button>
                            </div>    
                        </td>    
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="isModalOpen == true" class="fixed inset-0 flex items-center justify-center">
            <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-700">
                            Update Modal
                        </h3>
                        <button @click="closeUpdateModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-800 dark:hover:text-white" data-modal-hide="staticModal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <div class="mt-5">
                            <label for="message" class="input_question_label">Question:</label>
                            <input type="text" id="message" rows="4" class="input_question" placeholder="Your question here..." v-model="qandaUpdateData.question">
                        </div>

                        <div class="mt-5">
                            <label for="message" class="input_answer_label">Answer:</label>
                            <textarea id="message" rows="4" class="answer_textarea" placeholder="Your answer here..." v-model="qandaUpdateData.answer"></textarea>
                        </div>

                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="staticModal" type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " @click="update()">Save</button>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Qanda.js"></script>

<style lang="scss" src="./Qanda.scss" scoped>

</style>