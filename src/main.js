import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import './styles/index.css';
import Index from './components/index.vue';
import UsePinia from './components/UsePinia.vue';
import Rxjs from './components/Rxjs.vue';

import { createPinia } from 'pinia';

const app = createApp(App);
// const app = createApp(Index)
// const app = createApp(UsePinia)
// const app = createApp(Rxjs)
app.use(createPinia());
app.use(ElementPlus);
app.mount('#app');
