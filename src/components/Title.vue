<template>
    <div class="flex flex-col ml-6 section-title box-border md:mx-36 -z-10">
        <h2 class="mt-20 text-3xl font-semibold text-white">{{ titleName }}</h2>
        <v-icon name="fa-equals" scale="2" flip="both" class="text-orange-500"></v-icon>
    </div>
</template>

<script>
export default {
    name: 'title-comp',
    props: {
        titleName:{
            type:String,
            required:true,
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
    
</style>