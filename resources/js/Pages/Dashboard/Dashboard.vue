
<template>
    <div class="container mx-auto my-auto mt-5">
        <h1 class="mt-0 mb-2 text-5xl font-medium leading-tight text-primary text-white">
            Welcome!
        </h1>

        <h1 class="mt-0 mb-2 text-5xl font-medium leading-tight text-primary text-white">
            Add another entry of FAQ Here:
        </h1>

        <div class="mt-5">
            <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="store">
                <div class="mt-5">
                    <label for="message" class="input_question_label">Question:</label>
                    <input type="text" id="message" rows="4" class="input_question" placeholder="Your question here..." v-model="faq.question">
                </div>

                <div class="mt-5">
                    <label for="message" class="input_answer_label">Answer:</label>
                    <textarea id="message" rows="4" class="answer_textarea" placeholder="Your answer here..." v-model="faq.answer"></textarea>
                </div>

                <div class="mt-5 ml-auto">
                    <button type="submit" class="btn_save">Save</button>
                </div>
            </form>

        </div>
        
        <div v-if="faqs != null" class="mt-5">
            <table class="min-w-full divide-y  table-auto">
                <thead class="divide-gray-900">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ID</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Question</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Answer</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-gray-900 ">
                    <tr v-for="faq in faqs.faqs" :key="faq.id">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{{faq.id}}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-white w-1/4">{{faq.question}}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-white">
                            <div class="answer_container">
                                <p class="break-all">{{faq.answer}}</p>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                Update
                                </button>
                                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="destroy(faq.id)">
                                Delete
                                </button>
                            </div>    
                        </td>    
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script src="./Dashboard.js"></script>

<style lang="scss" src="./Dashboard.scss" scoped>

</style>