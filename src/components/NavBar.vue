<template>
    <!-- drawer init and toggle -->
<div class="text-start">
   <button class=" fixed mt-4 ml-4 text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" 
   data-drawer-target="drawer-body-scrolling" data-drawer-show="drawer-body-scrolling" data-drawer-body-scrolling="true" aria-controls="drawer-body-scrolling">
   <v-icon name="fa-bars"></v-icon>
   Menu
   </button>
</div>

<!-- drawer component -->
<div id="drawer-body-scrolling" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-gray-800 w-64 dark:bg-orange-500" tabindex="-1" aria-labelledby="drawer-body-scrolling-label">
    <h5 id="drawer-body-scrolling-label" class="text-base font-semibold text-black uppercase dark:text-gray-400"><span class="text-orange-500 text-2xl">P</span>ortafolio</h5>
    <button type="button" data-drawer-hide="drawer-body-scrolling" aria-controls="drawer-body-scrolling" class="text-gray-400 bg-transparent hover:bg-orange-500 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
  <div class="overflow-y-auto py-32 flex justify-center flex-col">
      <ul class="font-semibold space-y-32 pb-16 text-2xl" v-for="list in listNav" :key="list.title">
        <v-item>
            <a data-drawer-hide="drawer-body-scrolling" :href="list.link" class="redirect flex pl-4 pb-2 text-blue-300 rounded-3xl dark:text-white hover:text-orange-500 hover:underline-offset-4 hover:decoration-8 hover:decoration-orange-500 dark:hover:bg-blue-300 group">
            <v-icon :name="list.icon" scale="2"></v-icon>
            <span class="ml-3">{{ list.title }}</span>
            </a>
        </v-item>
      </ul>
   </div>
</div>
</template>

<script>
import { initFlowbite } from 'flowbite'

export default {
    name: 'component-name',
    // props: {},
    data: function () {
        return {
            listNav:[
                {
                    title:'Inicio',
                    link:'#home',
                    icon:'md-home-sharp'
                },
                {
                    title:'Perfil',
                    link:'#sobre-mi',
                    icon:'md-accountcircle-sharp'
                },
                {
                    title:'Skills',
                    link:'#skills',
                    icon:'md-build-round'
                },
                {
                    title:'Proyectos',
                    link:'#proyectos',
                    icon:'md-displaysettings-outlined'
                },
                {
                    title:'Contacto',
                    link:'#',
                    icon:'md-contactmail'
                },
            ]
        }
    },
    // computed: {},
    methods: {
        
       
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        initFlowbite();
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .redirect{
        cursor: pointer;
    }
    .router-anim-enter-active{
        animation: coming 1s;
        animation-delay: .5s;
        opacity: 0;
    }
    .router-anim-leave-active{
        animation: going 1s;
    }
    @keyframes coming {
        from{
            transform: translateY(-50px);
            opacity: 0;
        }
        to{
            transform: translateX(0px);
            opacity: 1;
        }
    }
    @keyframes going{
        0%{
            transform: translateX(0px);
        }
        100%{
            transform: translateX(-50px);
            opacity: 0;
        }
    }
</style>