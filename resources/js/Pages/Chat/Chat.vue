<template>
    <div class="div_container">
        <div v-if="chats" class="container mx-auto" id="message_container">
            <div
                id="messages"
                class="div_inner_container scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                v-for="chat in chats.chats"
                :key="chat.id"
            >
                <div class="chat-message elementToFadeInAndOut">
                    <div class="user_message_container">
                        <div class="user_message_inner_contianer">
                            <div>
                                <span class="user_message">{{
                                    chat.question
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat-message elementToFadeInAndOut">
                    <div class="flex items-end">
                        <div class="system_message_container">
                            <div>
                                <span class="system_message">{{
                                    chat.answer
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="elementToFadeInAndOut">
            <div v-if="!messageExists" class="mb-20 mt-20">
                <p class="font-bold text-4xl text-white text-center">
                    What is your Question?
                </p>
            </div>
        </div>

        <div class="input_container sticky bottom-0 mb-10 container mx-auto">
            <div class="relative flex">
                <input
                    type="text"
                    placeholder="Write your message!"
                    class="input_text"
                    v-model="chat.question"
                    @keydown.enter="store"
                />

                <button type="button" class="input_button" @click="clear">
                    <span class="font-bold">Clear</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="h-6 w-6 ml-2 transform"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                    </svg>
                </button>

                <button type="button" class="input_button" @click="store">
                    <span class="font-bold">Send</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-6 w-6 ml-2 transform rotate-90"
                    >
                        <path
                            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script src="./Chat.js"></script>

<style lang="scss" src="./Chat.scss" scoped></style>
