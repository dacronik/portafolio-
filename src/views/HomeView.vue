<template>
  <div>
    <home/>
    <about/>
    <skills/>
    <portafolio/>
    <contacto/>
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Home from '@/components/Home.vue';
import Skills from '@/components/Skills.vue';
import Portafolio from '@/components/Portafolio.vue';
import Contacto from '@/components/Contacto.vue';
export default {
  name: 'component-name',
  // props: {},
  data: function () {
    return {
      
    }
  },
  // computed: {},
  //methods: {}
  // watch: {},
  components: {
    'about':About,
    'home':Home,
    'skills':Skills,
    'portafolio':Portafolio,
    'contacto':Contacto,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped>

</style>