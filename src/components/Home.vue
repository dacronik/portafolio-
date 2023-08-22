<template>
  <div class="home md:pt-24" id="home">
    <div class="container">
      <div class="img">
        <img loading="lazy" src="../assets/img/perfil-min.jpg" alt="">
      </div>
      <div class="titulos text-gray-200">
        <h1>Hola soy <span class="name">Gerardo Ortiz</span></h1>
        <h2>Desarrollador <span class="typing">Web</span></h2>
        <p class="text-blue-300">Cocinero de código y un amante de la innovación, el constante aprendizaje y de llevar
          abstractas ideas a
          plataformas digitales, atractivas y funcionales</p>
        <a class="curriculum" href="/gerardo.pdf" download="gerardo_ortiz_cv">
          Descarga mi CV
        </a>
      </div>
    </div>
    <div class="redes-sociales">
      <ul v-for="red in redes" :key="red.name"
        class="icons hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 hover:bg-blue-300"
        @click="redirectTo(red.link)">
        <v-icon loading="lazy" class="icon" :color="red.color" scale="3" :name="red.icon"></v-icon>
        <p class="text-orange-600 font-bold">{{ red.name }}</p>
      </ul>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'component-name',
  // props: {},
  data: function () {
    return {
      redes: [
        {
          name: "Linkedin",
          icon: "fa-linkedin",
          link: "https://www.linkedin.com/in/gerardo-ortiz-montecinos-desarrollador/",
          color: "#0A66C2"
        },
        {
          name: "GitHub",
          icon: "fa-github",
          link: "https://github.com/dacronik",
          color: "#171515"
        },
        {
          name: "Twitter",
          icon: "fa-twitter",
          link: "https://twitter.com/DacronikOr",
          color: "#00acee"
        }
      ]
    }
  },
  computed: {
    info(){
      return{
      }
    }
  },
  methods: {
    redirectTo(url) {
      window.open(url, '_blank');
    },
    
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>
  
<style scoped>
.home {
  background-image: url("../assets/img/pixel-min.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 100vh;
  max-width: 100%;
}

.container {
  height: 600px;
}

.img {
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.img img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 70px;
}

.titulos {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  justify-content: center;
}

.titulos h1 {
  font-size: 28px;
  font-weight: 500;
}

.titulos .name {
  color: #f75a00;
  font-family: 'Clicker Script', cursive;
  font-weight: 700;
  font-size: 38px;
}

.titulos h2 {
  font-size: 28px;
  font-weight: 500;
}

.titulos .typing {
  color: #f75a00;
  font-weight: 700;
  font-size: 32px;
}

.titulos p {
  margin: 0 20px;
  text-align: center;
}

.curriculum {
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  background-color: #333;
  color: #fff;
  font-weight: 400;
  letter-spacing: 1px;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
}

.curriculum::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  transition: .5s;
  transform: scale(.9);
  z-index: -1;
}

.curriculum:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15 #f75a00;
  background-color: #f75a00;
}

.curriculum:hover {
  color: #f75a00;
  box-shadow: 0 0 5px #f75a00;
  text-shadow: 0 0 5px #f75a00;
  background-color: transparent;
}

.redes-sociales {
  display: flex;
  justify-content: center;
}

.icons {
  padding: 24px;
  text-align: center;
  cursor: pointer;
}

@media screen and (min-width:500px) {
  .container {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 32px;
  }

  .img {
    width: 50%;
  }

  .img img {
    margin-top: 0;
  }

  .titulos {
    width: 60%;
    height: 300px;
  }
}

@media screen and (min-width:920px) {
  .img img {
    width: 300px;
    height: 300px;
  }

  .titulos h1 {
    font-size: 32px;

  }

  .titulos .name {
    color: #f75a00;
    font-family: 'Clicker Script', cursive;
    font-weight: 700;
    font-size: 52px;
  }

  .titulos h2 {
    font-size: 28px;
    font-weight: 500;
  }

  .titulos .typing {
    color: #f75a00;
    font-weight: 700;
    font-size: 32px;
  }
}</style>