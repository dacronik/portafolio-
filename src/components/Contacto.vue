<template>
    <div class="container" id="contacto">
        <Title :title-name="'Contacto'" />
        <div class="forms flex justify-center items-center mt-12">
            <div class="container-form m-4">
                <div class="container__login">
                    <form class="w-full max-w-lg" ref="form">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                    for="grid-first-name">
                                    Nombre
                                </label>
                                <input :class="{ error: v$.nombre.$errors.length }" v-model="nombre"
                                    @blur="v$.nombre.$touch"
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name" type="text" placeholder="Ej: Ana">
                                <div class="input-errors" v-if="v$.nombre.$error">
                                    <p class="text-red-500 text-xs italic">{{ v$.nombre.$errors[0].$message }}</p>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                    for="grid-last-name">
                                    Apellido
                                </label>
                                <input @blur="v$.apellido.$touch" v-model="apellido" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 
                                    mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name" type="text" placeholder="Ej: Perez">
                                <div class="input-errors" v-if="v$.apellido.$error">
                                    <p class="text-red-500 text-xs italic">{{ v$.apellido.$errors[0].$message }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                    for="grid-password">
                                    E-mail
                                </label>
                                <input v-model="correo" @blur="v$.correo.$touch"
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="email" type="email" placeholder="Ej: ana@perez.cl">
                                <div class="input-error">
                                    <p class="text-red-500 text-xs italic" v-if="v$.correo.$error">
                                        {{ v$.correo.$errors[0].$message }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2"
                                    for="grid-password">
                                    Mensaje
                                </label>
                                <textarea v-model="mensaje" @blur="v$.mensaje.$touch"
                                    class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                    id="message"></textarea>
                                <div class="input-error" v-if="v$.mensaje.$error">
                                    <p class="text-red-500 text-xs italic">{{ v$.mensaje.$errors[0].$message }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3">
                                <button
                                    class="shadow bg-teal-400  focus:shadow-outline focus:outline-none text-blue-300 font-bold py-2 px-4 rounded hover:bg-orange-500"
                                    type="button" @click.prevent="submitForm" data-modal-target="popup-modal"
                                    data-modal-toggle="popup-modal">
                                    Enviar
                                </button>
                            </div>
                            <div class="md:w-2/3"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--Modal-->
        <div>
            <Transition name="modal-fade" appear>
                <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
                    v-if="toggleModal">
                    <div class="modal-container relative mx-auto w-auto max-w-2xl">
                        <div class="bg-gray-400 w-full rounded shadow-2xl flex flex-col items-center px-4 py-10">
                            <div class="text-2xl font-bold text-blue-300">Mensaje Enviado</div>
                            <v-icon name="md-checkcircle-twotone" fill="green" scale="2" animation="wrench"></v-icon>
                            <span>Gracias por contactarme, en breve te respondere</span>
                            <button class="rounded bg-orange-500 text-blue300 px-6 mt-1 py-2"
                                @click="closeModal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </Transition>
            <div v-if="toggleModal" class="modal-overlay"></div>
        </div>
    </div>
</template>

<script>
import { submitForm } from '@formkit/vue';
import Title from './Title.vue';
import useValidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
export default {

    name: 'contacto-comp',
    // props: {},
    data: function () {
        return {
            v$: useValidate(),
            nombre: '',
            apellido: '',
            correo: '',
            mensaje: '',
            toggleModal: false
        }
    },
    validations() {
        return {
            nombre: { required: helpers.withMessage("Nombre es requerido", required, this.nombre) },
            apellido: { required: helpers.withMessage("Apellido es requerido", required, this.apellido) },
            correo: {
                required: helpers.withMessage('Correo es necesario', required),
                email: helpers.withMessage('Correo no válido', email)
            },
            mensaje: { required: helpers.withMessage('Mensaje es requerido', required) }
        }
    },
    // computed: {},
    methods: {

        resetForm() {
            this.nombre = '';
            this.apellido = '';
            this.correo = '';
            this.mensaje = '';
            this.v$.$reset();
        },

        submitForm() {
            this.v$.$touch()
            this.v$.$validate()
            if (!this.v$.$invalid) {
                this.toggleModal = true

            } else {
                console.log('debes llenar el fomulario')
            }

        },
        closeModal() {
            this.toggleModal = false;
            this.resetForm();
        }

    },
    // watch: {},
    components: {
        Title
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
    background-color: #0F172A;
}
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}
.modal-fade-enter, .modal-fade-leave-to {
  opacity: 0;
  transform: translateY(100px); /* Ajusta este valor para la distancia de la animación deseada */
}

.modal-container {
  background-color: wheat;
  width: 100%;
  max-width: 480px;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 40;
  opacity: 0;
  transition: opacity 0.6s;
}

.modal-overlay.active {
  opacity: 1;
}

</style>