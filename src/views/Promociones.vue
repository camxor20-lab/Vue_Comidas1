<template>
  <q-page class="q-pb-xl">

    <!-- ENCABEZADO -->
    <q-img
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
      height="250px"
    >
      <div class="absolute-full flex flex-center bg-filter text-white text-center">
        <div>
          <div class="text-h3 text-weight-bold">
            Promociones & Combos
          </div>

          <div class="text-subtitle1 q-mt-sm">
            Aprovecha los mejores precios para compartir en familia o amigos.
          </div>
        </div>
      </div>
    </q-img>

    <!-- PRODUCTOS -->
    <div class="q-pa-md max-container">

      <div class="row q-col-gutter-md">

        <div
          v-for="(prod, index) in productos"
          :key="index"
          class="col-12 col-sm-6 col-md-3"
        >

          <q-card
            class="my-card full-height flex column"
            :class="prod.esChef ? 'chef-card' : ''"
          >

            <!-- IMAGEN -->
            <q-img
              :src="prod.foto"
              height="185px"
              fit="cover"
            >

              <!-- ETIQUETA -->
              <q-chip
                v-if="prod.etiqueta"
                color="deep-orange"
                text-color="white"
                class="absolute-top-right q-ma-sm text-bold"
              >
                {{ prod.etiqueta }}
              </q-chip>

              <!-- RECOMENDACIÓN DEL CHEF -->
              <q-chip
                v-if="prod.esChef"
                color="amber-9"
                text-color="black"
                icon="star"
                class="absolute-top-left q-ma-sm text-bold"
              >
                Recomendación del Chef
              </q-chip>

            </q-img>

            <!-- INFORMACIÓN -->
            <q-card-section class="col">

              <div class="text-h6 text-bold text-dark">
                {{ prod.nombre }}
              </div>

              <div class="text-caption text-grey-8 q-mt-xs">
                {{ prod.descripcion }}
              </div>

            </q-card-section>

            <!-- PRECIO Y CARRITO -->
            <q-card-section
              class="q-pt-none flex justify-between items-center"
            >

              <div class="text-h6 text-primary text-bold">
                {{ prod.precio }}
              </div>

              <q-btn
                color="orange-8"
                icon="add_shopping_cart"
                round
                dense
                unelevated
              />

            </q-card-section>

          </q-card>

        </div>

      </div>

    </div>

  </q-page>
</template>


<script>
export default {

  setup () {

    return {

      productos: [

        // PRIMER PRODUCTO
        {
          nombre: 'Combo Pareja Express',

          descripcion:
            '2 Hamburguesas Clásicas + 1 Porción Grande de Papas + 2 Gaseosas 400ml.',

          precio: '$42.000',

          etiqueta: 'Ahorra 20%',

          esChef: true,

          // IMAGEN CORREGIDA
          foto:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
        },


        // SEGUNDO PRODUCTO
        {
          nombre: 'Combo Perro & Malteada',

          descripcion:
            '1 Perro Especial Express + 1 Porción de Papas + 1 Malteada de Oreo.',

          precio: '$31.000',

          etiqueta: 'Súper Combo',

          esChef: false,

          foto:
            'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=80'
        },


        // TERCER PRODUCTO
        {
          nombre: 'Fiesta Pizza (3-4 Personas)',

          descripcion:
            '1 Pizza Mediana Carnívora + 1 Pizza Mediana Pepperoni + Gaseosa 1.5L.',

          precio: '$58.000',

          etiqueta: 'Familiar',

          esChef: false,

          foto:
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
        },


        // CUARTO PRODUCTO
        {
          nombre: 'Tripack de Hamburguesas',

          descripcion:
            '3 Hamburguesas sencillas con queso + 3 Papas francesas pequeñas.',

          precio: '$48.500',

          etiqueta: 'Imperdible',

          esChef: false,

          foto:
            'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80'
        }

      ]

    }

  }

}
</script>


<style scoped>

/* CONTENEDOR PRINCIPAL */
.max-container {
  max-width: 1050px;
  margin: 0 auto;
}


/* OSCURECER IMAGEN DEL BANNER */
.bg-filter {
  background: rgba(0, 0, 0, 0.45);
}


/* TARJETAS */
.my-card {
  min-height: 400px;
  border-radius: 4px;
  overflow: hidden;
  background: white;
  transition: 0.2s ease;
}


/* EFECTO AL PASAR EL MOUSE */
.my-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.20);
}


/* TARJETA DEL CHEF */
.chef-card {
  background: #fff3df;
  border: 2px solid #ff9800;
}


/* TITULO DEL BANNER */
.text-h3 {
  font-size: 48px;
}


/* PRECIO */
.text-primary {
  color: #1976d2 !important;
}


/* RESPONSIVE */
@media (max-width: 600px) {

  .text-h3 {
    font-size: 32px;
  }

  .text-subtitle1 {
    font-size: 14px;
  }

}

</style>