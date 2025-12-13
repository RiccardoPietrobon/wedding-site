<template>
  <div class="flex-column">
    <Sfondo class="z-n1 sticky-top bg-primary-subtle"/>
    <Navbar/>
    <router-view class="bg-warning-subtle pagine overflow-y-auto overflow-x-hidden"></router-view>
  </div>
</template>

<script setup>
  import Sfondo from './components/Sfondo.vue'
  import Navbar from './components/Navbar.vue'
</script>

<style>
  .viewstyle{
    height: 90vh;
  }
  .navstyle{
    height: 10vh;
  }
  .pagine{
    height: 90vh;
  }
  
  .ms-madi-regular {
    font-family: "Ms Madi", cursive;
    font-weight: 400;
    font-style: normal;
  }

  .shadows-into-light-two-regular {
    font-family: "Shadows Into Light Two", cursive;
    font-weight: 400;
    font-style: normal;
  }
</style>
