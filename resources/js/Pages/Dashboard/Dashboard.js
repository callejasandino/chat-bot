import axios from "axios";
import { ref, onMounted, defineComponent, reactive } from "vue";
import router from "../../routes";
import { useFaqStore } from "../../Store/faq";
import Cookies from "js-cookie";

export default defineComponent({
    setup () {
        const user = ref();
        const faqs = ref();

        const faqStore = useFaqStore();
        const faq = reactive({
            question: '',
            answer: '',
        });

        const index = async () => {
            await faqStore.index();

            faqs.value = faqStore.getFaq;

            console.log(faqs.value.faqs[0]);
        }
 
        onMounted(async () => {
            await axios.get('api/user')
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                router.push('/admin_login');
            })

            await index();
        })        

     

        const store = async () => {
            if(faq.question == '' && faq.answer == ''){
                alert('Question and answer must not be empty!')
                return;
            }
           
            const faqData = {
                question: faq.question,
                answer: faq.answer
            };

            await faqStore.store(faqData);
            await index();
            faq.question = '';
            faq.answer = '';
        }

        const update = async () => {
            if(faq.question == '' && faq.answer == ''){
                alert('Question and answer must not be empty!')
                return;
            }
           
            const faqData = {
                question: faq.question,
                answer: faq.answer
            };

            await faqStore.update(faqData);
            await index();
            faq.question = '';
            faq.answer = '';
        }

        const destroy = async (id) => {
            await faqStore.delete(id);
            await index();
            faq.question = '';
            faq.answer = '';
        }
    
        return {
            faq,
            faqs,
            store,
            destroy
        }
    }
})