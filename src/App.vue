<template>
  <div class="flex-column">
    <Sfondo class="z-n1 sticky-top bg-primary-subtle"/>
    <Navbar/>
    <router-view class="bg-router pagine overflow-y-auto overflow-x-hidden"></router-view>
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
    /*font-weight: 400;*/
    font-weight: bold;
    font-style: normal;
    color: #503732;
  }

  .shadows-into-light-two-regular {
    font-family: "Shadows Into Light Two", cursive;
    font-weight: 400;
    font-style: normal;
    color: #503732;
  }

 .playpen-sans {
  font-family: "Playpen Sans", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: #503732;
}

.bg-router{
  background-color: #e6cbb3;
}
</style>
