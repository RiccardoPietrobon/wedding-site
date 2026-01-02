<template> 
  <nav class="bg-barra text-light container-fluid d-flex justify-content-between align-items-center playpen-sans">
      <!-- Pulsante "Torna su" -->
      <a class="navbar-brand ms-3" href="#" :class="scrollY > 1 ? 'fade-in' : 'fade-out'">Torna su</a>
      <a @click="openMenu" class="navbar-brand me-3" >Apri menu</a>

      <!-- offcanvas controllata da v-if -->
      <div v-if="isOpen" id="myOffcanvas" class="offcanvas offcanvas-end bg-tendina text-light" tabindex="-1">
        <div class="offcanvas-header">
          <h5 class="mt-2 ms-2">Menu</h5>
          <button class="btn-close text-light" @click="closeMenu"></button>
        </div>

        <div class="offcanvas-body">
          <a @click="navigate('/',              '#Home')"         class="nav-link mb-5 mt-5 ms-2">Home</a>
          <a @click="navigate('/Cerimonia',     '#Cerimonia')"    class="nav-link mb-5 mt-5 ms-2">Cerimonia</a>
          <a @click="navigate('/Ricevimento',   '#Ricevimento')"  class="nav-link mb-5 mt-5 ms-2">Ricevimento</a>
          <a @click="navigate('/IdeeRegalo',    '#IdeeRegalo')"   class="nav-link mb-5 mt-5 ms-2">Idee Regalo</a>
          <a @click="navigate('/Ricordi',       '#Ricordi')"      class="nav-link mb-5 mt-5 ms-2">Ricordi</a>
        </div>
      </div>
  </nav>
</template>


<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Offcanvas } from 'bootstrap'

const router = useRouter()

const isOpen = ref(false)
let offcanvasInstance = null

async function openMenu() {
  isOpen.value = true
  await nextTick()
  offcanvasInstance = new Offcanvas(document.getElementById('myOffcanvas'))
  offcanvasInstance.show()
}

function closeMenu() {
  if (offcanvasInstance) offcanvasInstance.hide()
  isOpen.value = false
}

async function navigate(path, hash = null) {
  await router.push({ path, hash }) // usa oggetto per hash
  closeMenu()
}

/* --- GESTIONE TASTO "TORNA SU" --- */
const scrollY = ref(0)

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY
  })
})

</script>


<style scoped>

/* Altezza quando chiusa */
nav {
    min-height: 10vh;
}
a {
  opacity: 0.6
}
a:hover {
  opacity: 1;
  cursor: pointer;
}

#myOffcanvas {
  width: 350px; /* esempio: 400px */
  max-width: 75%; /* non oltre il 90% dello schermo */
  border: none;
}

.navbar-brand {
  opacity: 1;
  visibility: visible;
}

.navbar-brand.fade-in {
  animation: fadeIn .8s ease forwards;
}

.navbar-brand.fade-out {
  animation: fadeOut .8s ease forwards;
}

/* --- ANIMAZIONI PERSONALIZZABILI --- */

@keyframes fadeIn {
  0%  { opacity: 0; }
  10% { opacity: 0.1; }
  20% { opacity: 0.2; }
  30% { opacity: 0.3; }
  40% { opacity: 0.4; }
  50% { opacity: 0.5; }
  60% { opacity: 0.6; }
  70% { opacity: 0.7; }
  80% { opacity: 0.8; }
  90% { opacity: 0.9; }
  100% { opacity: 1; }
}

@keyframes fadeOut {
  0%  { opacity: 1; }
  10% { opacity: 0.9; }
  20% { opacity: 0.8; }
  30% { opacity: 0.7; }
  40% { opacity: 0.6; }
  50% { opacity: 0.5; }
  60% { opacity: 0.4; }
  70% { opacity: 0.3; }
  80% { opacity: 0.2; }
  90% { opacity: 0.1; }
  100% { opacity: 0; visibility: hidden; }
}

.bg-barra{
  background-color: #b6885d;
}

.bg-tendina{
  background-color: #6e90c0;
  border: none;
}

</style>

