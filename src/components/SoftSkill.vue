<template>
    <div class="service-item rounded-lg w-72">
        <div class="service-item-inner">
            <ul class="grid grid-cols-3  gap-8 py-14 px-2 justify-center">
                <li class="" v-for="icon in icons" :key="icon.name">
                    <img :src="icon.url" loading="lazy" :alt="icon.name" style="width: 60px;">
                    <p class="text-white text-xs">{{ icon.name }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'soft-skills',
    props: {
        icons:{
            type:Object,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
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
    .service-item{
    padding: 1rem;
    transition: all 0.8s;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid #f75a00;
    backdrop-filter: blur(10px);
}
</style>