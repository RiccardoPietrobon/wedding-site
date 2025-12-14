<template>
  <div class="component" id="Home">
    <div class="row justify-content-around">
      <div class="col-12">
        <h1 class="ms-madi-regular">Benvenuti nel sito del <br>Nostro Matrimonio!</h1>
      </div>
    </div>
    <div class="row justify-content-around p-2">
      <div class="col-10 col-md-8 col-lg-6">
        <img src="/img/home_noi.png" alt="catericky">
      </div>
    </div>
    <div class="row justify-content-around ">
      <div class="col-10">
        <p class="pt-3 playpen-sans">
          In questo sito abbiamo racchiuso idee e informazioni che vi e ci possano accompagnare prima, durante e dopo il nostro Giorno Speciale.<br>
          Alcune pagine sono già ultimate, altre si aggiorneranno nei prossimi mesi, continuate a dare un'occhiata. 
          <br><br>
          Buona navigazione!
          <br><br>
          Con affetto,<br> 
          Caterina e Riccardo<br> 
          3286611915 - 3492966792
        </p>
      </div>
    </div>
  </div>

    <!-- 
    <a
      :href="directionsUrl"
      target="_blank"
      rel="noopener"
      class="directions-btn"
    >
      ➜ Ottieni indicazioni
    </a>
-->
</template>

<script setup lang="ts"></script>

<style>
.component {
  padding: 2rem;
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
 }

.map-title {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}
</style>

<script>
export default {
  data() {
    return {
      // Mappa centrata su una posizione (es. Duomo di Milano)

      
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.203449176294!2d12.245607775773784!3d45.70695521720967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4779398239c09c75%3A0xe209cbad0536c3bc!2sChiesa%20Parrocchiale%20della%20Nativit%C3%A0%20della%20Beata%20Vergine%20Maria%20in%20Fontane!5e0!3m2!1sit!2sit!4v1764347465191!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1397.430486208522!2d12.721831839672852!3d45.5330032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477bf8fcd6b785bf%3A0xcbc405b6ee567a11!2sRistorante%20Alla%20Darsena!5e0!3m2!1sit!2sit!4v1765030564228!5m2!1sit!2sit",

      // Link diretto per indicazioni
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=Piazza+del+Duomo,+Milano",
    };
  },
};
</script>
