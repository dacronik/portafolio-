<template>
  <v-app>
    <nav-bar/>
      <router-view/>
  </v-app>
</template>

<script>

import NavBar from './components/NavBar.vue';


export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    'nav-bar':NavBar,
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
  
  
</style>
