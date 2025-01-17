<script setup lang="ts">
import Footer from '@/components/footer.vue'
import { ref, onMounted } from 'vue'

const carouselElement = (ref < HTMLElement) | (null > null)

onMounted(() => {
  if (carouselElement.value) {
    const carousel = new bootstrap.Carousel(carouselElement.value, {
      interval: 3000,
      ride: 'carousel',
    })

    carouselElement.value.querySelector('.carousel-control-prev')?.addEventListener('click', () => {
      carousel.prev()
    })

    carouselElement.value.querySelector('.carousel-control-next')?.addEventListener('click', () => {
      carousel.next()
    })
  }
})
</script>

<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossorigin="anonymous"
  />
  <div class="page-wrapper">
    <div class="">
      <header>
        <img src="../../public/logoCreaciones_marsha.png" alt="" srcset="">
        <div class="px-3">
          <h5 class="title"><b>CREACIONES_MARSHA</b></h5>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path fill="#fff" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5">
                <animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5" />
                <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1" />
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0" />
              </path>
              <path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0" />
              </path>
            </g>
	        </svg>
        </div>
      </header>
  
    <main>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../public/first-slide.png" class="d-block w-100" alt="First Slide" />
            <div class="carousel-caption d-none d-md-block">
              <h1>ACCESORIOS</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../../public/second-slide.png" class="d-block w-100" alt="Second Slide" />
            <div class="carousel-caption d-none d-md-block">
              <h1>ACCESORIOS</h1>
            </div>
          </div>
          <div class="carousel-item">
            <div class="third-slide">
              <img src="../../public/third-slide1.png" class="d-block w-100" alt="Third Slide 1" />
              <img src="../../public/third-slide2.png" class="d-block w-100" alt="Third Slide 2" />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h1>ACCESORIOS</h1>
            </div>
          </div>
        </div>
      </div>
    </main>

    <section class="product-list">
      <div class="elements">
        <img src="../../public/first-slide.png" alt="">
        <h2>Nombre</h2>
        <h3>Precio</h3>
      </div>
      <div class="elements">
        <img src="../../public/first-slide.png" alt="">
        <h2>Nombre</h2>
        <h3>Precio</h3>
      </div>
      <div class="elements">
        <img src="../../public/first-slide.png" alt="">
        <h2>Nombre</h2>
        <h3>Precio</h3>
      </div>
      <div class="elements">
        <img src="../../public/first-slide.png" alt="">
        <h2>Nombre</h2>
        <h3>Precio</h3>
      </div>
    </section>

  </div>
  </div>
  <Footer/>
</template>

<style>
@import '/src/assets/accesorios.css';
</style>
