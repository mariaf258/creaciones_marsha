<script setup lang="ts">
import Footer from '@/components/footer.vue'
</script>

<template>
  <div class="app">
    <div class="overlay"></div>
    <img class="img-logo" src="/public/logoCreaciones_marsha.png" alt="logo" />
    <h1>CREACIONES_MARSHA</h1>
    <h2>¡Te damos la bienvenida!</h2>

    <div class="buttons">
      <button class="button button-heart">
        
          <router-link to="/accesorios">
              <img class="img-button" src="/public/heart-circle.png" alt="Heart Icon" />
              <span>Accesorios</span>
          </router-link>
      </button>
      <button class="button button-donuts">
          <router-link to="/minidonas">
              <img class="img-button" src="/public/dunkin-donuts.png" alt="Donuts Icon" />
              <span>Mini Donas</span>
          </router-link> 
      </button>
      <button class="button button-breakfast">
          <router-link to="/desayunoSorpresa">
        <img class="img-button" src="/public/breakfast.png" alt="Breakfast Icon" />

              <span>Desayunos Sorpresa</span>
          </router-link>
      </button>
    </div>
    <!-- </div> -->
  </div>

  <Footer />
</template>

<style>
@import '/src/assets/inicio.css';
</style>
