<template>
  <q-page class="inicio-page">

    <!-- ========================= -->
    <!-- HERO PRINCIPAL -->
    <!-- ========================= -->
    <section class="hero">

      <q-img
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=85"
        class="hero-img"
        fit="cover"
      >
        <div class="absolute-full hero-overlay">

          <div class="hero-content">

            <div class="number-badge">
              8
            </div>

            <div class="vocero-label">
              🍔 EL VOCERO DEL 8
            </div>

            <h1>
              El sabor que representa
              <span>tu salón</span>
            </h1>

            <p>
              Hamburguesas, perros, pizzas, postres y mucho más.
              ¡Aquí habla el hambre!
            </p>

            <div class="hero-buttons">

              <q-btn
                label="Ver nuestro menú"
                icon="restaurant_menu"
                color="orange-8"
                size="lg"
                unelevated
                rounded
                to="/hamburguesas"
              />

              <q-btn
                label="Ver promociones"
                icon="local_offer"
                color="white"
                text-color="dark"
                size="lg"
                unelevated
                rounded
                to="/promociones"
              />

            </div>

          </div>

        </div>
      </q-img>

    </section>


    <!-- ========================= -->
    <!-- PRESENTACIÓN -->
    <!-- ========================= -->
    <section class="presentation q-pa-xl">

      <div class="max-container">

        <div class="section-title">

          <div class="mini-number">
            8
          </div>

          <div>
            <div class="text-overline text-orange-8 text-weight-bold">
              BIENVENIDOS
            </div>

            <h2>
              ¿Por qué <span>El Vocero del 8?</span>
            </h2>
          </div>

        </div>


        <div class="row q-col-gutter-xl items-center">

          <!-- TEXTO -->
          <div class="col-12 col-md-6">

            <p class="presentation-text">
              Somos un local de comidas rápidas creado para compartir,
              disfrutar y pasar un buen momento con amigos y familia.
            </p>

            <p class="presentation-text">
              Nuestro nombre nace de una idea sencilla:
              <strong>“El Vocero”</strong> representa a quien habla por su
              salón, mientras que el <strong>“8”</strong> hace referencia
              a ese clásico número que todos reconocemos.
            </p>

            <p class="presentation-text">
              Y así como un buen vocero representa a su salón,
              nosotros queremos representar el buen sabor.
            </p>

          </div>


          <!-- TARJETA -->
          <div class="col-12 col-md-6">

            <q-card class="concept-card shadow-8">

              <q-card-section class="text-center">

                <div class="big-8">
                  8
                </div>

                <div class="concept-title">
                  EL VOCERO
                </div>

                <div class="concept-subtitle">
                  DEL BUEN SABOR
                </div>

                <q-separator class="q-my-lg" />

                <div class="concept-text">
                  "Si el hambre habla,
                  nosotros somos el vocero."
                </div>

              </q-card-section>

            </q-card>

          </div>

        </div>

      </div>

    </section>


    <!-- ========================= -->
    <!-- CATEGORÍAS -->
    <!-- ========================= -->
    <section class="categories-section">

      <div class="max-container q-pa-xl">

        <div class="text-center q-mb-xl">

          <div class="text-overline text-orange-8 text-weight-bold">
            NUESTRO MENÚ
          </div>

          <h2>
            Elige tu favorito
          </h2>

          <p class="section-description">
            Todo lo que necesitas para quitarte el hambre.
          </p>

        </div>


        <div class="row q-col-gutter-lg">


          <!-- HAMBURGUESAS -->
          <div class="col-12 col-sm-6 col-md-3">

            <q-card
              class="category-card"
              clickable
              to="/hamburguesas"
            >

              <q-img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
                height="190px"
                fit="cover"
              />

              <q-card-section class="text-center">

                <div class="category-icon">
                  🍔
                </div>

                <div class="category-title">
                  Hamburguesas
                </div>

                <div class="category-text">
                  Sabor a la parrilla y mucho queso.
                </div>

              </q-card-section>

            </q-card>

          </div>


          <!-- PERROS -->
          <div class="col-12 col-sm-6 col-md-3">

            <q-card
              class="category-card"
              clickable
              to="/perros"
            >

              <q-img
                src="https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=600&q=80"
                height="190px"
                fit="cover"
              />

              <q-card-section class="text-center">

                <div class="category-icon">
                  🌭
                </div>

                <div class="category-title">
                  Perros Calientes
                </div>

                <div class="category-text">
                  Salchicha, salsas y mucho sabor.
                </div>

              </q-card-section>

            </q-card>

          </div>


          <!-- PIZZAS -->
          <div class="col-12 col-sm-6 col-md-3">

            <q-card
              class="category-card"
              clickable
              to="/pizza"
            >

              <q-img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
                height="190px"
                fit="cover"
              />

              <q-card-section class="text-center">

                <div class="category-icon">
                  🍕
                </div>

                <div class="category-title">
                  Pizzas
                </div>

                <div class="category-text">
                  Masa artesanal y queso fundido.
                </div>

              </q-card-section>

            </q-card>

          </div>


          <!-- POSTRES -->
          <div class="col-12 col-sm-6 col-md-3">

            <q-card
              class="category-card"
              clickable
              to="/postres"
            >

              <q-img
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80"
                height="190px"
                fit="cover"
              />

              <q-card-section class="text-center">

                <div class="category-icon">
                  🍰
                </div>

                <div class="category-title">
                  Postres
                </div>

                <div class="category-text">
                  El toque dulce para terminar.
                </div>

              </q-card-section>

            </q-card>

          </div>

        </div>

      </div>

    </section>


    <!-- ========================= -->
    <!-- PROMOCIÓN -->
    <!-- ========================= -->
    <section class="promo-section">

      <div class="max-container q-pa-xl">

        <q-card class="promo-card shadow-10">

          <q-card-section class="promo-content">

            <div>

              <div class="promo-number">
                8
              </div>

              <div class="promo-small">
                LA PROMOCIÓN DEL VOCERO
              </div>

              <div class="promo-title">
                ¡Que hable el hambre!
              </div>

              <div class="promo-text">
                Descubre nuestros combos y promociones
                especiales para compartir.
              </div>

            </div>

            <q-btn
              label="Ver promociones"
              icon="local_offer"
              color="white"
              text-color="orange-9"
              size="lg"
              rounded
              unelevated
              to="/promociones"
            />

          </q-card-section>

        </q-card>

      </div>

    </section>


    <!-- ========================= -->
    <!-- FRASE FINAL -->
    <!-- ========================= -->
    <section class="final-section">

      <div class="max-container text-center">

        <div class="final-8">
          8
        </div>

        <h2>
          El Vocero del 8
        </h2>

        <p>
          Donde el buen sabor tiene la palabra.
        </p>

        <q-btn
          label="Explorar menú"
          icon="restaurant"
          color="orange-8"
          size="lg"
          rounded
          unelevated
          to="/hamburguesas"
          class="q-mt-lg"
        />

      </div>

    </section>

  </q-page>
</template>


<script>
export default {
  name: 'Inicio'
}
</script>


<style scoped>

.inicio-page {
  background: #fafafa;
}


/* ================================= */
/* CONTENEDOR */
/* ================================= */

.max-container {
  max-width: 1200px;
  margin: 0 auto;
}


/* ================================= */
/* HERO */
/* ================================= */

.hero {
  width: 100%;
}

.hero-img {
  height: 600px;
}

.hero-overlay {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.82) 0%,
    rgba(0, 0, 0, 0.60) 45%,
    rgba(0, 0, 0, 0.20) 100%
  );
}

.hero-content {
  max-width: 750px;
  margin-left: 8%;
  padding: 40px;
}

.number-badge {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #ff9800;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  font-weight: 900;
  margin-bottom: 20px;
  box-shadow: 0 8px 25px rgba(255, 152, 0, 0.45);
}

.vocero-label {
  color: #ff9800;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.hero h1 {
  color: white;
  font-size: 58px;
  line-height: 1.05;
  font-weight: 900;
  margin: 0;
  letter-spacing: -1px;
}

.hero h1 span {
  color: #ff9800;
}

.hero p {
  color: white;
  font-size: 20px;
  line-height: 1.6;
  max-width: 650px;
  margin-top: 25px;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
  flex-wrap: wrap;
}


/* ================================= */
/* PRESENTACIÓN */
/* ================================= */

.presentation {
  background: white;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 45px;
}

.mini-number {
  width: 55px;
  height: 55px;
  border-radius: 14px;
  background: #ff9800;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 900;
}

.section-title h2 {
  margin: 0;
  font-size: 38px;
  font-weight: 800;
  color: #222;
}

.section-title h2 span {
  color: #f57c00;
}

.presentation-text {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 18px;
}


/* ================================= */
/* TARJETA CONCEPTO */
/* ================================= */

.concept-card {
  border-radius: 25px;
  overflow: hidden;
  background: linear-gradient(
    145deg,
    #fff3df,
    #ffffff
  );
  border: 2px solid #ffcc80;
}

.big-8 {
  font-size: 150px;
  line-height: 1;
  font-weight: 900;
  color: #ff9800;
}

.concept-title {
  font-size: 30px;
  font-weight: 900;
  color: #222;
  letter-spacing: 3px;
}

.concept-subtitle {
  font-size: 18px;
  color: #f57c00;
  font-weight: 800;
  letter-spacing: 2px;
}

.concept-text {
  font-size: 20px;
  font-style: italic;
  font-weight: 600;
  color: #555;
}


/* ================================= */
/* CATEGORÍAS */
/* ================================= */

.categories-section {
  background: #f5f5f5;
}

.categories-section h2 {
  margin: 5px 0;
  font-size: 40px;
  font-weight: 900;
  color: #222;
}

.section-description {
  color: #777;
  font-size: 18px;
}

.category-card {
  border-radius: 18px;
  overflow: hidden;
  background: white;
  transition: all 0.25s ease;
  height: 100%;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
}

.category-icon {
  font-size: 35px;
  margin-top: -5px;
}

.category-title {
  font-size: 21px;
  font-weight: 800;
  color: #222;
  margin-top: 5px;
}

.category-text {
  color: #777;
  margin-top: 7px;
}


/* ================================= */
/* PROMOCIÓN */
/* ================================= */

.promo-section {
  background: white;
}

.promo-card {
  border-radius: 25px;
  overflow: hidden;
  background: linear-gradient(
    120deg,
    #f57c00,
    #ff9800
  );
  color: white;
}

.promo-content {
  min-height: 260px;
  padding: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.promo-number {
  font-size: 75px;
  line-height: 0.8;
  font-weight: 900;
  opacity: 0.25;
}

.promo-small {
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-top: 15px;
}

.promo-title {
  font-size: 42px;
  font-weight: 900;
  margin-top: 5px;
}

.promo-text {
  font-size: 18px;
  margin-top: 10px;
}


/* ================================= */
/* SECCIÓN FINAL */
/* ================================= */

.final-section {
  background: #222;
  color: white;
  padding: 80px 20px;
}

.final-8 {
  font-size: 80px;
  font-weight: 900;
  color: #ff9800;
  line-height: 1;
}

.final-section h2 {
  color: white;
  font-size: 42px;
  font-weight: 900;
  margin: 10px 0;
}

.final-section p {
  color: #ccc;
  font-size: 20px;
}


/* ================================= */
/* RESPONSIVE */
/* ================================= */

@media (max-width: 800px) {

  .hero-img {
    height: 600px;
  }

  .hero-content {
    margin-left: 0;
    padding: 30px;
  }

  .hero h1 {
    font-size: 42px;
  }

  .hero p {
    font-size: 17px;
  }

  .section-title h2 {
    font-size: 30px;
  }

  .categories-section h2 {
    font-size: 32px;
  }

  .promo-content {
    flex-direction: column;
    align-items: flex-start;
    padding: 35px;
  }

  .promo-title {
    font-size: 32px;
  }

}


@media (max-width: 500px) {

  .hero-img {
    height: 650px;
  }

  .hero-content {
    padding: 25px 20px;
  }

  .hero h1 {
    font-size: 36px;
  }

  .number-badge {
    width: 60px;
    height: 60px;
    font-size: 35px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons .q-btn {
    width: 100%;
  }

  .presentation {
    padding: 40px 20px !important;
  }

  .big-8 {
    font-size: 110px;
  }

  .concept-title {
    font-size: 24px;
  }

  .promo-content {
    padding: 30px 25px;
  }

}

</style>