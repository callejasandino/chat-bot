import { onMounted, ref } from "vue";
import { useFaqStore } from "../../Store/faq";

export default {
    setup () {
        let faqs = ref();

        let faqStore = useFaqStore();

        let index = async () => {
            await faqStore.index();

            faqs.value = faqStore.getFaq;
        }

        onMounted(async () => {
            await index();
        })        

        return {
            faqs
        }
    }
}