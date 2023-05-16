import { ref, onMounted, defineComponent, reactive } from "vue";
import { useQandaStore } from "../../Store/qanda";
import axios from "axios";
export default defineComponent({
    setup() {
        const user = ref();
        const qandas = ref();
        let isModalOpen = ref(false);
        const qandaStore = useQandaStore();
        const qanda = reactive({
            question: "",
            answer: "",
        });
        let updateID = ref(0);

        const qandaUpdateData = reactive({
            question: "",
            answer: "",
        });

        const openUpdateModal = async (id, question, answer) => {
            updateID = id;
            isModalOpen.value = true;
            qandaUpdateData.question = question;
            qandaUpdateData.answer = answer;
        }
        
        const closeUpdateModal = async () => {
            updateID = 0;
            isModalOpen.value = false;
            qandaUpdateData.question = '';
            qandaUpdateData.answer = '';
        }


        const index = async () => {
            await qandaStore.index();

            qandas.value = qandaStore.getQanda;

            console.log(qandas.value.qandas[0]);
        };

        onMounted(async () => {
            await axios
                .get("api/user")
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    router.push("/admin_login");
                });

            await index();
        });

        const store = async () => {
            if (qanda.question == "" && qanda.answer == "") {
                alert("Question and answer must not be empty!");
                return;
            }

            const qandaData = {
                question: qanda.question,
                answer: qanda.answer,
            };

            await qandaStore.store(qandaData);
            await index();
            qanda.question = "";
            qanda.answer = "";
        };

        const update = async () => {
            if (qandaUpdateData.question == "" && qandaUpdateData.answer == "") {
                alert("Question and answer must not be empty!");
                return;
            }

            const qandaData = {
                question: qandaUpdateData.question,
                answer: qandaUpdateData.answer,
            };

            await qandaStore.update(updateID, qandaData);
            await index();
            updateID = 0;
            qandaUpdateData.question = "";
            qandaUpdateData.answer = "";
            isModalOpen.value = false;
        };


        const download = async () => {
            await qandaStore.download();
        };

        const destroy = async (id) => {
            await qandaStore.delete(id);
            await index();
            qanda.question = "";
            qanda.answer = "";
        };

        return {
            openUpdateModal,
            closeUpdateModal,
            qandaUpdateData,
            isModalOpen,
            update,
            qanda,
            qandas,
            store,
            destroy,
            download
        };
    },
});
