import { createRouter, createWebHistory } from 'vue-router'
import Home             from '../components/Home.vue'
import CompChiesa       from '../components/CompChiesa.vue'
import CompRistorante   from '../components/CompRistorante.vue'
import CompViaggio      from '../components/CompViaggio.vue'
import CompListaNozze   from '../components/CompListaNozze.vue'
import CompMedia        from '../components/CompMedia.vue'
//import Sfondo from '@/components/Sfondo.vue'

const routes = [
  { path: '/',    component: Home },
  //{ path: '/', component: Sfondo },
  { path: '/Chiesa', component: CompChiesa },
  { path: '/Ristorante', component: CompRistorante },
  { path: '/Viaggio', component: CompViaggio },
  { path: '/ListaNozze', component: CompListaNozze },
  { path: '/Media', component: CompMedia }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // se torni indietro con il browser
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // scroll animato
      }
    } else {
      return { top: 0 } // scroll in cima
    }
  },
})

export default router