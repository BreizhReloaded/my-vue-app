import { createApp } from 'vue';
import { pinia } from './plugins';
import App from './App.vue';

createApp(App)
    .use(pinia)
    .mount('#app');
