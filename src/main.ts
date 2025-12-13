import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import appear from './directives/appear' // 👈 importa la direttiva

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap'

createApp(App).use(router).directive('appear', appear).mount('#app')