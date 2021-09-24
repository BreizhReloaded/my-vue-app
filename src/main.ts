import { createApp } from 'vue';
import { vuetify } from './plugins';
import App from './App.vue';

createApp(App)
    .use(vuetify)
    .mount('#app');
