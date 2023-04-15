import { onMounted, reactive, ref } from "vue";
import { useChatStore } from "../../Store/chat";

export default {
    setup () {
        const chats = ref();

        const chatStore = useChatStore();

        const chat = reactive({
            question: '',
            answer: '',
        });

        const index = async () => {
            await chatStore.index();
            chats.value = chatStore.getChat;

            console.log(chats.value);
        }

        onMounted(async () => {
            await index();
        })        

        const store = async () => {
            if(chat.question == ''){
                alert('Question and answer must not be empty!')
                return;
            }
           
            const chatData = {
                question: chat.question,
            };

            await chatStore.store(chatData);
            await index();
            chat.question = '';
        }

        return {
            chat,
            chats,
            store
        }
    }
}