<template>
  <v-app>
    <nav-bar/>
    <v-main>
      <home/>
      <about/>
      <skills/>
      <portafolio/>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from './components/NavBar.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';
import Skills from './components/Skills.vue';
import Portafolio from './components/Portafolio.vue';


export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    'nav-bar':NavBar,
    'about':About,
    'home':Home,
    'skills':Skills,
    'portafolio':Portafolio
   
  },
  methods:{},
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
 *{
    box-sizing: border-box;
    font-family:'Poppins',sans-serif;
  }
  #app{
    background-image: url("../src/assets/img/pixel.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    min-width: 100%;
  }
  .router-anim-enter-active{
    animation: coming .5s;
    animation-delay: .5s;
    opacity: 0;
  }
  .router-anim-leave-active{
    animation: going .5s;
  }
  @keyframes coming{
    from{
      transform: translateX(-50px);
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
      transition: opacity 0.5 ease-out;
    }
  }
</style>
