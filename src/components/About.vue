<template>
    <div class="container perfil" id="sobre-mi">
        <div class="flex flex-col ml-6 section-title box-border md:mx-36">
            <h2 class="mt-20 text-3xl font-semibold text-white">Perfil</h2>
            <v-icon name="fa-equals" scale="2" flip="both" class="text-orange-500"></v-icon>
        </div>
        <div class="flex box-border ml-6 md:mx-36 mt-4">
            <div class="flex">
                <div class="columns-1">
                    <h2 class=" text-2xl flex flex-col text-blue-300">Gerardo Ortiz <span class="text-orange-500 no-underline hover:underline-offset-1">
                        Desarrollador Web
                    </span></h2>
                </div>
            </div>
        </div>
        <div class="flex-auto md:columns-2 ml-6 items-center md:mx-36">
            <div class="mt-10">
                <p class="text-blue-300 box-border">
                    Saludos! `${inserteNombre}`. Soy un desarrollador autodidacta apasionado por el mundo de la programación. A través de Vue y Django, he creado proyectos personales desafiantes que demuestran mi habilidad para abordar problemas complejos. Mi firme creencia es que el aprendizaje es continuo y ello me ha llevado a explorar nuevas tecnologías de manera constante. Soy un aprendiz incansable, que me trajo a conocer el maravilloso mundo de la programación y a postular a los cursos del Programa talento digital chile en los cuales aprendí lenguajes como Python y JavaScript, Aunque carezco de experiencia laboral formal (en programación), mi capacidad para enfrentar obstáculos y mi flexibilidad para adaptarme a diferentes entornos me ha llevado a practicar y mejorar día a día mi capacidad lógica y la resolución de problemas. Mi objetivo es aplicar mis conocimientos actuales en proyectos emocionantes, aportando entusiasmo, soluciones frescas, actitud positiva al mundo laboral y emocionado por las oportunidades que el futuro pueda traer. Si buscas a alguien entusiasta y amante de la programación no dudes en contactarme y seré (citando a Woody en Toy Story) “tu amigo fiel”.
                </p>
            </div>
            <div class="flex w-auto h-full p-10 justify-center">
                <img class="max max-h-80" src="../assets/img/computador.jpg" alt="img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    // methods: {},
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .container{
        min-width: 100%;
        min-height: 100vh;
        background-color: #fff;
    }
    .perfil{
        background-color: #0F172A;
    }
    
    
</style>