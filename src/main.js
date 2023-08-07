// ENTRY POINT FOR THE APP

import { createApp, VueElement } from "vue";
import App from './components/App.vue'
// I have npm installed bootstrap, and to import it, used the import command below
import '../node_modules/bootstrap/dist/css/bootstrap.css'

createApp(App).mount('#app')

// Test