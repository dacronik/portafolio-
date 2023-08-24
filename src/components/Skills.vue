<template>
    <div class="container" id="skills">
        <div class="flex flex-col  ml-6 section-title box-border md:mx-36">
            <h2 class="mt-20 text-3xl font-semibold text-white">Skills</h2>
            <v-icon name="fa-equals" scale="2" flip="both" class="text-orange-500"></v-icon>
        </div>
        <div class="flex flex-col lg:flex-row gap-6 md:gap-8 justify-center mt-16">
            <div class="skills flex flex-col justify-center items-center">
                <h4 class="text-blue-300 text-center text-2xl">Hard Skills</h4>
                <card-skill :icons="icons"/>
            </div>
            <div class="skills flex flex-col justify-center items-center slide-left">
                <h4 class="text-blue-300 text-center text-2xl">Soft Skills</h4>
                <soft-skill :icons="soft_icons"/>
            </div>
            <div class="skills flex flex-col justify-center items-center slide-left sm:mb-2">
                <h4 class="text-blue-300 text-center text-2xl">Herramientas</h4>
                <card-skill :icons="herramientas"/>
            </div>
        </div>
    </div>
</template>

<script>
import CardSkill from "@/components/CardSkill.vue"
import SoftSkill from "./SoftSkill.vue";
export default {
    name: 'component-name',
    // props: {},
    data: function () {
        return {
            selected: 'Hard Skills',
            icons: [
                {
                    name: 'CSS',
                    icon: 'vi-file-type-css'
                },
                {
                    name: 'HTML',
                    icon: 'vi-file-type-html'
                },
                {
                    name: 'JavaScript',
                    icon: 'vi-file-type-js-official'
                },
                {
                    name: 'Vue',
                    icon: 'vi-file-type-vue'
                },
                {
                    name: 'Tailwind',
                    icon: 'vi-file-type-tailwind'
                },
                {
                    name: 'Bootstrap',
                    icon: 'fa-bootstrap',
                    color: 'purple'
                },
                {
                    name: 'Sass',
                    icon: 'vi-file-type-sass',

                },
                {
                    name: 'Python',
                    icon: 'vi-file-type-python'
                },
                {
                    name: 'Django',
                    icon: 'vi-file-type-django'
                },

                {
                    name: 'Postgre',
                    icon: 'vi-file-type-pgsql'
                },

                {
                    name: 'Git',
                    icon: 'vi-file-type-git',
                },
                {
                    name: 'Firebase',
                    icon: 'vi-file-type-firebase',
                },

            ],
            soft_icons:[
                {
                    name:'Creatividad',
                    url:require('@/assets/img/creatividad.png')
                },
                {
                    name:'Autodidacta',
                    url:require('@/assets/img/autodidacta.png')
                },
                {
                    name:'Lógico',
                    url:require('@/assets/img/logica.png')
                },
                {
                    name:'Comunicativo',
                    url:require('@/assets/img/comunicativo.png')
                },
                {
                    name:'Aprendizaje continuo',
                    url:require('@/assets/img/aprendizaje.png')
                },
                {
                    name:'Trabajo en equipo',
                    url:require('@/assets/img/trabajo-en-equipo.png')
                },
                {
                    name:'Disciplina',
                    url:require('@/assets/img/disciplina.png')
                },
            ],
            herramientas:[
                {
                    name: 'VSC',
                    icon: 'vi-file-type-vscode',
                },
                {
                    name:'Vuetify',
                    icon:'si-vuetify',
                    color:'#1C64F2'
                },
                {
                    name: 'SVG',
                    icon: 'vi-file-type-svg',
                },
                {
                    name: 'Babel',
                    icon: 'vi-file-type-light-babel',
                },
                {
                    name: 'NPM',
                    icon: 'vi-file-type-npm',
                },
                {
                    name: 'PIP',
                    icon: 'vi-file-type-pip',
                },
                {
                    name: 'Vite',
                    icon: 'vi-file-type-vite',
                },
                {
                    name: 'PowerShell',
                    icon: 'vi-file-type-powershell2',
                },
                {
                    name: 'GitHub',
                    icon: 'fa-github',
                },
                {
                    name: 'Webpack',
                    icon: 'vi-file-type-webpack',
                },
            ]
        }
    },
    // computed: {},
    methods: {},
    // watch: {},
    components: {
        'card-skill':CardSkill,
        'soft-skill':SoftSkill
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    min-width: 100%;
    background-color: #27104e;
}

</style>