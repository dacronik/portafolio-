<template>
    <div class="container" id="skills">
        <div class="flex flex-col  ml-6 section-title box-border md:mx-36">
            <h2 class="mt-20 text-3xl font-semibold text-white">Skills</h2>
            <v-icon name="fa-equals" scale="2" flip="both" class="text-orange-500"></v-icon>
        </div>
        <div class="flex flex-col md:flex-row gap-6 md:gap-16 lg:mx-36 justify-center mt-16 max-w-7xl">
            <div class="skills flex flex-col justify-center items-center slide-left">
                <h4 class="text-blue-300 text-center text-2xl">Hard Skills</h4>
                <div class="service-item rounded-lg w-96">
                    <div class="service-item-inner">
                        <ul class="grid grid-cols-4 gap-8 justify-center p-8">
                            <li class="text-center" v-for="icon in icons" :key="icon.name">
                                <v-icon :name="icon.icon" :fill="icon.color" scale="3"></v-icon>
                                <p class="text-white">{{ icon.name }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="skills flex flex-col justify-center items-center slide-left">
                <h4 class="text-blue-300 text-center text-2xl">Soft Skills</h4>
                <div class="soft-items rounded-lg w-96">
                    <div class="service-item-inner">
                        <ul class="grid grid-cols-3 gap-2 justify-center p-2 md:p-8 md:gap-8">
                            <li class="flex flex-col justify-center items-center" v-for="icon in soft_icons" :key="icon.name">
                                <img :src="icon.url" alt="" style="width: 50px;">
                                <p class="text-white">{{ icon.name }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="skills flex flex-col justify-center items-center slide-left">
                <h4 class="text-blue-300 text-center text-2xl">Herramientas</h4>
                <div class="herramientas-item rounded-lg w-96">
                    <div class="service-item-inner">
                        <ul class="grid grid-cols-4 gap-8 justify-center p-8">
                            <li class="text-center" v-for="icon in herramientas" :key="icon.name">
                                <v-icon :name="icon.icon" :fill="icon.color" scale="3"></v-icon>
                                <p class="text-white">{{ icon.name }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

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
                    name: 'PostgreSQL',
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
                    name: 'GitHub',
                    icon: 'fa-github',
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
                    name: 'SVG',
                    icon: 'vi-file-type-svg',
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
    components: {},
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
    background-color: #0F172A;
}

.slide-left {
    animation: slide-left 0.7s linear both
}

@keyframes slide-left {
    0% {
        transform: translateX(200px)
    }

    100% {
        transform: translateX(0px)
    }
}

.service-item {
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(../assets/img/data.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

}
.soft-items{
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(../assets/img/grafic.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.herramientas-item{
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(../assets/img/database.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>