import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './index.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as MdIcons from "oh-vue-icons/icons/md";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);
const Md = Object.values({ ...MdIcons })
addIcons(...Md);

const app= createApp(App)
app.component("v-icon",OhVueIcon)
app.use(store)
app.use(router)
app.mount('#app')