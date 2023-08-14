<template>
    <div class="container" id="proyectos">
        <Title :title-name="'Proyectos'"/>
        <div class="grid-cols-1 sm:grid md:grid-cols-3 md:pl-32" v-for="item in onlyflans">
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
                    img:require('@/assets/img/portafolio-1.png'),
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
                    parrafo:'Pagina web creada con el framework Django, ocupando PosgreSQL como base de datos y el Front-end realizado con Bootstrap'
                }
            ],
            devToys:[
                {
                    title:'Dev-Toys',
                    img:require('@/assets/img/dev-toys.png'),
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
                    parrafo:'Ecommerce creado en base al consumo de una API construida en Django-Rest que envia estados de producto y guarda los datos del formulario de contacto. el Front esta construido en Vue3 y vuetify'
                }
            ],
            pokeApi:[
                {
                    title:'Pokedex',
                    img:require('@/assets/img/pokedex.png'),
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
                    parrafo:'Pagina que consulta a la API de pokemon en ella se construyo un objeto que trasformara (por defecto en ingles) en español y que tomara los colores del propio pokemon, construido con Vue y Tailwind.'
                }
            ],
            traveler:[
                {
                    title:'Traveler',
                    img:require('@/assets/img/traveler.png'),
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
                    parrafo:'Pagina Web sobre una agencia de viajes, en la cual se ocupo Sass como compilador de CSS, HTML y JavaScript, tambien cuenta con la integracion de una libreria de JS para darle estilos a los titulos del banner'
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
    
</style>