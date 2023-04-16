<template>
    <section class="section">
        <div class="div_container">
            <h2 class="h2">Frequently asked questions</h2>
            <div
                class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700"
            >
                <div v-if="faqs">
                    <div class="mb-10" v-for="faq in faqs.faqs" :key="faq.id">
                        <h2 class="question">
                            <svg
                                class="svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            {{ faq.question }}
                        </h2>
                        <p class="answer">
                            {{ faq.answer }}
                        </p>
                    </div>
                </div>
                <div v-if="!isFaqsExists" class="elementToFadeInAndOut">
                    <div class="mb-20 mt-20">
                        <p class="font-bold text-4xl text-white text-center">
                            No FAQ's to show
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./Faq.js"></script>

<style lang="scss" src="./Faq.scss" scoped></style>
