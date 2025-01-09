<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
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
      <header></header>
      <div class="d-flex align-items-center justify-content-between py-2 px-3">
        <div>
          <h5 class="m-0"><b>NUTRI FRESH</b></h5>
        </div>

        <div class="inicio d-flex align-items-right">
          <span class="separator"></span>
          <a href="https://es-la.facebook.com/" target="_blank">
            <img src="/img/facebook.png" alt="Facebook" />
          </a>

          <a href="https://www.tiktok.com/upload?lang=es" target="_blank">
            <img src="/img/tiktok.png" alt="TikTok" />
          </a>

          <a href="https://www.instagram.com/" target="_blank">
            <img src="/img/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>

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
            <img src="/img/first-slide.jpg" class="d-block w-100" alt="First Slide" />
            <div class="carousel-caption d-none d-md-block">
              <h1>DESAYUNOS SALUDABLES</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/second-slide.png" class="d-block w-100" alt="Second Slide" />
            <div class="carousel-caption d-none d-md-block">
              <h1>DESAYUNOS SALUDABLES</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/third-slide.png" class="d-block w-100" alt="Third Slide" />
            <div class="carousel-caption d-none d-md-block">
              <h1>DESAYUNOS SALUDABLES</h1>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="d-flex justify-content-around align-items-center">
        <div class="position-relative align-items-center">
          <img src="/img/Ellipse1.png" class="circle" alt="Desayuno Ligero" />
          <img src="/img/like.png" class="icon-overlay" alt="Ícono Desayuno Ligero" />
          <figcaption>
            <h5>Desayuno Saludable</h5>
            <p>Perfecto para una dieta equilibrada y rica en fibra.</p>
          </figcaption>
        </div>

        <div class="position-relative align-items-center">
          <img src="/img/Ellipse1.png" class="circle" alt="Desayuno Completo" />
          <img src="/img/humbleicons.png" class="icon-overlay" alt="Ícono Desayuno Completo" />
          <figcaption>
            <h5>Desayuno Completo</h5>
            <p>Una opción balanceada con todos los nutrientes.</p>
          </figcaption>
        </div>

        <div class="position-relative text-center">
          <img src="/img/Ellipse1.png" class="circle" alt="Desayuno Saludable" />
          <img src="/img/coffee.png" class="icon-overlay" alt="Ícono Desayuno Saludable" />
          <figcaption>
            <h5>Desayuno Ligero</h5>
            <p>Ideal para comenzar el día con energía.</p>
          </figcaption>
        </div>
      </div>

      <nav>
        <div class="texto">
          <h5>Beneficios</h5>
          <p>• Aportan Energía para el Día.</p>
          <p>• Mejoran la Concentración y el Rendimiento.</p>
          <p>• Contribuyen a Mantener un Peso Saludable.</p>
        </div>

        <div class="imagen">
          <img src="/img/Honey.png" alt="Honey Image" />
        </div>
      </nav>

      <div class="question">
        <h5>¿Te gusta el desayuno saludable?</h5>
        <div class="options">
          <label>
            <input type="radio" name="answer" value="Sí" />
            <span>Sí</span>
          </label>
          <label>
            <input type="radio" name="answer" value="No" />
            <span>No</span>
          </label>
        </div>
      </div>

      <section class="muestras">
        <img src="/img/muestra1.jpg" alt="Muestra 1" />
        <img src="/img/muestra2.jpg" alt="Muestra 2" />
        <img src="/img/muestra3.jpg" alt="Muestra 3" />
        <img src="/img/muestra4.jpg" alt="Muestra 4" />
        <img src="/img/muestra5.jpg" alt="Muestra 5" />
        <img src="/img/muestra6.jpg" alt="Muestra 6" />
        <img src="/img/muestra7.jpg" alt="Muestra 7" />
      </section>

      <nav class="brunch">
        <div class="imagen1">
          <img src="/img/brunch.png" alt="Brunch Image" />
        </div>

        <div class="texto1">
          <h5>Porcentaje de Bienestar</h5>
          <br />
          <div
            class="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 45%">45%</div>
          </div>
          <br />
          <div
            class="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 78%">78%</div>
          </div>
          <br />
          <div
            class="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" style="width: 89%">89%</div>
          </div>
        </div>
      </nav>
    </main>
  </div>
  <footer></footer>
</template>

<style>
@import '/src/assets/accesorios.css';
</style>
