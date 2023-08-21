<template>
    <div class="home" id="home">
        <div class="container">
            <div class="img">
                <img src="../assets/img/perfil.jpg" alt="">
            </div>
            <div class="titulos text-gray-200">
                <h1>Hola soy <span class="name">Gerardo Ortiz</span></h1>
                <h2>Desarrollador <span class="typing">Web</span></h2>
                <p class="text-blue-300">Cocinero de código y un amante de la innovación, el constante aprendizaje y de
                    llevar abstractas ideas a
                    plataformas digitales, atractivas y funcionales</p>
                <a href="https://drive.google.com/drive/folders/13_PixnsHFNjkdCXUui8RHIgMU9NHVqOE?usp=sharing"
                    target="_blank" class="curriculum">Descarga mi CV</a>
            </div>

        </div>
        <div class="redes-sociales">
            <ul v-for="red in redes" :key="red.name"
                class="icons hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 hover:bg-blue-300">
                <v-icon class="icon" :color="red.color" scale="3" :name="red.icon"></v-icon>
                <p class="text-orange-600 font-bold">{{ red.name }}</p>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index-comp',
    // props: {},
    data: function () {
        return {
            redes: [
        {
          name: "Linkedin",
          icon: "fa-linkedin",
          link: "",
          color: "#0A66C2"
        },
        {
          name: "GitHub",
          icon: "fa-github",
          link: "",
          color: "#171515"
        },
        {
          name: "Twitter",
          icon: "fa-twitter",
          link: "",
          color: "#00acee"
        }
      ]
        }
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

<style scoped></style>