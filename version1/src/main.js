import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import './style.css'
import './water.css'

import Panel from 'primevue/panel';
import Divider from 'primevue/divider';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';


const app = createApp(App);
app.use(PrimeVue);

app.component('Panel', Panel);
app.component('Divider', Divider);
app.component('Galleria', Galleria);
app.component('Image', Image);

app.mount('#app');
