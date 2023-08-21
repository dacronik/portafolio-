<template>
    <div class="service-item rounded-lg w-72">
        <div class="service-item-inner">
            <ul class="grid grid-cols-3 p-4 gap-8 justify-center">
                <li class="text-center" v-for="icon in icons" :key="icon.name">
                    <v-icon loading="lazy" :name="icon.icon" :fill="icon.color" scale="3" class="object-cover"></v-icon>
                    <p class="text-white text-xs">{{ icon.name }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-skills-comp',
    props: {
        icons:{
            type:Object,
            required:true,
        }
    },
    data: function () {
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