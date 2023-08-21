<template>
    <div class="container pb-6" id="proyectos">
        <Title :title-name="'Proyectos'"/>
        <div class="grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3 items-center md:pl-32 md:mr-6 gap-8 mx-6" v-for="item in onlyflans">
            <cards :title="item.title" :image="item.img" :icons="item.icons" :git-link="item.gitLink" :web-link="item.webLink" :parrafo="item.parrafo"/>
            <div v-for="item in devToys">
                <cards :title="item.title" :image="item.img" :icons="item.icons" :git-link="item.gitLink" :web-link="item.webLink" :parrafo="item.parrafo"/>
            </div>
            <div v-for="item in pokeApi">
                <cards :title="item.title" :image="item.img" :icons="item.icons" :git-link="item.gitLink" :web-link="item.webLink" :parrafo="item.parrafo"/>
            </div>
            <div v-for="item in traveler">
                <cards :title="item.title" :image="item.img" :icons="item.icons" :git-link="item.gitLink" :web-link="item.webLink" :parrafo="item.parrafo"/>
            </div>
            <div v-for="item in animeFun">
                <cards :title="item.title" :image="item.img" :icons="item.icons" :git-link="item.gitLink" :web-link="item.webLink" :parrafo="item.parrafo"/>
            </div>
            <div v-for="item in vueCrud">
                <cards :title="item.title" :image="item.img" :icons="item.icons" :git-link="item.gitLink" :web-link="item.webLink" :parrafo="item.parrafo"/>
            </div>
        </div>
        
    </div>
</template>

<script>
import Title from './Title.vue';
import Card from './Card.vue';
export default {
    name: 'Portafolio-comp',
    // props: {},
    data: function(){
        return {
            onlyflans:[
                {
                    title:'OnlyFlans',
                    img:require('@/assets/img/portafolio-min.png'),
                    icons:[
                        {
                            name:'vi-file-type-django'
                        },
                        {
                            name:'vi-file-type-python'
                        },
                        {
                            name:'vi-file-type-pgsql'
                        },
                        {
                            name:'fa-bootstrap',
                            color:'purple'
                        }
                    ],
                    gitLink:'https://github.com/dacronik/onlyflans',
                    webLink:'https://onlyflans.vercel.app/',
                    parrafo:'Página web creada con el framework Django, ocupando PostgreSQL como base de datos y el Front-end realizado con Bootstrap, en su versión 5.Para poder ver todos los productos El inicio de sesión es user:gera, Pass:12345'
                }
            ],
            devToys:[
                {
                    title:'Dev-Toys',
                    img:require('@/assets/img/dev-toys-min.png'),
                    icons:[
                        {
                            name:'vi-file-type-django'
                        },
                        {
                            name:'vi-file-type-vue'
                        },
                        {
                            name:'si-vuetify',
                            color:'#1C64F2'
                        }
                    ],
                    gitLink:'https://github.com/dacronik/jugueteria-vue',
                    webLink:'https://dev-toys.netlify.app/',
                    parrafo:'Para la creación de este E-commerce primero cree una API usando Django-rest a la que se le hacen consultas sobre los productos y guarda los datos de contacto. El Front lo construí usando Vue 3 y Vuetify.'
                }
            ],
            pokeApi:[
                {
                    title:'Pokedex',
                    img:require('@/assets/img/pokedex-min.png'),
                    icons:[
                        
                        {
                            name:'vi-file-type-vue'
                        },
                        {
                            name:'vi-file-type-tailwind',
                        }
                    ],
                    gitLink:'https://github.com/dacronik/Api_Pokemon_vue',
                    webLink:'https://pokemon-api-vue-3.netlify.app/',
                    parrafo:'Página que consulta a la API de Pokémon, en ella se construyo un objeto que trasforma (por defecto en inglés) en español los tipos de pokemon y toma los colores del propio tipo de Pokémon.Esta construida en Vue 3 y Tailwind css.'
                }
            ],
            traveler:[
                {
                    title:'Traveler',
                    img:require('@/assets/img/traveler-min.png'),
                    icons:[
                        
                        {
                            name:'vi-file-type-html'
                        },
                        {
                            name:'vi-file-type-css'
                        },
                        {
                            name:'vi-file-type-js-official'
                        },
                        {
                            name:'vi-file-type-sass',
                        }
                    ],
                    gitLink:'https://github.com/dacronik/traveler',
                    webLink:'https://dacronik.github.io/traveler/',
                    parrafo:'Página Web sobre una agencia de viajes, en la cual se ocupó Sass como compilador de CSS, HTML y JavaScript, también cuenta con la integración de una librería de JS para darle estilos a los títulos del banner'
                }
            ],
            animeFun:[
                {
                    title:'Anime Fun',
                    img:require('@/assets/img/anime-fun.png'),
                    icons:[
                        
                        {
                            name:'vi-file-type-html'
                        },
                        {
                            name:'vi-file-type-css'
                        },
                        {
                            name:'vi-file-type-js-official'
                        },
                    ],
                    gitLink:'https://github.com/dacronik/anime-fun',
                    webLink:'https://dacronik.github.io/anime-fun/',
                    parrafo:'Página Web de streaming de Anime, en la cual se ocupó solo HTML, CSS y JavaScript, también cuenta con la integración de una librería de JS Swiper la cual permite que se ejecute los carruseles de imágenes con los diferentes animes.'
                }
            ],
            vueCrud:[
                {
                    title:'Cursos Crud',
                    img:require('@/assets/img/crud.png'),
                    icons:[
                        
                        {
                            name:'vi-file-type-vue'
                        },
                        {
                            name:'si-vuetify',
                            color:'#1C64F2'
                        }
                    ],
                    gitLink:'https://github.com/dacronik/vue_crud_cursos',
                    webLink:'https://vue-cursos.netlify.app/',
                    parrafo:'Página Web en la que se creó un CRUD sobre diferentes cursos de Programación, en el proyecto se creó una página de administración para ir agregando, mediante un formulario, diferentes cursos, estudiantes, cupos disponibles, etc.'
                }
            ],
        }
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        Title,
        'cards':Card,
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
        background-color: #210640;
    }
</style>