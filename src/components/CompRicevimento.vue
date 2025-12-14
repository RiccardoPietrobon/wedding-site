<template>
  <div class="component" id="Ricevimento">
    <div class="row justify-content-around">
      <div class="col-8 col-md-6 col-lg-5">
        <h1 class="ms-madi-regular">Ricevimento</h1>
        <img src="/img/location.png" alt="Location">
      </div>
    </div>
    <div class="row justify-content-around ">
      <div class="col-10">
        <p class="p-3 playpen-sans">
          La giornata proseguirà presso il ristorante 'Alla Darsena' per condividere e festeggiare insieme il nostro Giorno Speciale.
          <br>
          Indirizzo: Ristorante Alla Darsena - Viale Oriente 166, 30016 Cortellazzo di Jesolo (VE)</p>
      </div>
    </div>
    <div class="row justify-content-around">
      <div class="col-10 col-md-8 col-lg-6">
        <iframe :src="mapSrc" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <div class="row justify-content-around ">
      <div class="col-10">
        <p class="p-4 playpen-sans">
          Il menù sarà a base di pesce. E' adattabile ad ogni esigenza particolare, non esitate a contattarci. 
          <br>
          E' gradita gentile conferma della vostra presenza entro il 15 aprile 2026
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

iframe {
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  /*min-width: 80vh;*/
}

/* Bottone indicazioni */
.directions-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 12px 20px;
  background: #2b7cff;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s;
}

.directions-btn:hover {
  background: #1a5cd1;
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
