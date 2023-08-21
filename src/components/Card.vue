<template>
    <div
        class="card mx-0 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
            <img class="rounded-t-lg w-full h-72" loading="lazy" :src="image" alt="Skyscrapers" />
        </a>
        <div class="flex justify-center gap-2 mt-2">
            <a :href="gitLink" target="_blank"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <v-icon name="fa-github"></v-icon>GitHub
                </span>
            </a>
            <a :href="webLink" target="_blank"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <v-icon name="md-pageview-outlined"></v-icon>Web
                </span>
            </a>
        </div>
        <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {{ title }}
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {{ parrafo }}
            </p>
        </div>
        <div
            class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50 flex items-center justify-center flex-col gap-5">
            <p>Tecnologias:</p>
            <ul class="flex">
                <li v-for="icon in icons">
                    <v-icon :name="icon.name" :fill="icon.color" scale="2" animation="pulse"></v-icon>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'component-name',
    props: {
        icons: {
            type: Object,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        parrafo: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        webLink:{
            type: String,
            required: true
        },
        gitLink:{
            type: String,
            required: true
        }
    },
    data: function () {
        return {}
    },
    computed: {
        computedBackgroundImage() {
            return `url('${this.backgroundImageUrl}')`;
        },
    },
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .card:hover{
        /* drop-shadow: 13px 15px 37px #f75a00;   */
        filter: drop-shadow(0 0 2em #f75a00);
    }
</style>