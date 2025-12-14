import { createRouter, createWebHistory } from 'vue-router'
import Home             from '../components/Home.vue'
import CompCerimonia       from '../components/CompCerimonia.vue'
import CompRicevimento   from '../components/CompRicevimento.vue'
import CompIdeeRegalo      from '../components/CompIdeeRegalo.vue'
import CompRicordi        from '../components/CompRicordi.vue'
//import Sfondo from '@/components/Sfondo.vue'

const routes = [
  { path: '/',    component: Home },
  //{ path: '/', component: Sfondo },
  { path: '/Cerimonia', component: CompCerimonia },
  { path: '/Ricevimento', component: CompRicevimento },
  { path: '/IdeeRegalo', component: CompIdeeRegalo },
  { path: '/Ricordi', component: CompRicordi }
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