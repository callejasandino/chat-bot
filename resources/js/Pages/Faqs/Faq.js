import { onMounted, reactive, ref } from "vue";
import { useFaqStore } from "../../Store/faq";

export default {
    setup() {
        let faqs = ref();
        let isFaqsExists = ref(false);
        let faqStore = useFaqStore();

        let index = async () => {
            await faqStore.index();

            faqs.value = faqStore.getFaq;

            if (faqs.value.faqs.length > 0) {
                isFaqsExists.value = true;
            } else {
                isFaqsExists.value = false;
            }
        };

        onMounted(async () => {
            await index();
        });

        return {
            faqs,
            isFaqsExists,
        };
    },
};
