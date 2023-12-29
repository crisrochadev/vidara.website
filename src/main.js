import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import 'material-icons/iconfont/material-icons.css';
import { MotionPlugin } from '@vueuse/motion';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { VueHeadMixin, createHead } from '@unhead/vue'

const app = createApp(App);

app.use(MotionPlugin)
app.use(router)
const head = createHead()
app.mixin(VueHeadMixin)
app.use(VueSplide)
app.use(head)
app.mount('#app');



