
<template>
    <div class="div_container">
        <div v-if="chats" class="conatiner">
            <div id="messages" class="div_inner_container scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
            v-for="chat in chats.chats" :key="chat.id">
                <div class="chat-message">
                    <div class="user_message_container">
                        <div class="user_message_inner_contianer">
                        <div><span class="user_message">{{chat.question}}</span></div>
                        </div>
                    </div>
                </div>
                <div class="chat-message">
                    <div class="flex items-end">
                        <div class="system_message_container">
                        <div><span class="system_message">{{chat.answer}}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <p class="font-bold text-4xl text-white text-center">What is your Question?</p>
        </div>
        
        <div class="input_container sticky bottom-0 mb-10">
            <div class="relative flex">  
                <input type="text" placeholder="Write your message!" class="input_text" v-model="chat.question">
                <button type="button" class="input_button" @click="store">
                    <span class="font-bold">Send</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ml-2 transform rotate-90">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
            </button>
            </div>
        </div>
    </div>
</template>

<script src="./Chat.js"></script>

<style lang="scss" src="./Chat.scss" scoped>

</style>