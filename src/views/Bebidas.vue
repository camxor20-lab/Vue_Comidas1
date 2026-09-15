<template>
  <q-page class="q-pb-xl">

    <!-- ENCABEZADO -->
    <q-img
      src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80"
      height="250px"
    >
      <div class="absolute-full flex flex-center bg-filter text-white text-center">
        <div>
          <div class="text-h3 text-weight-bold">
            Bebidas y Granizados
          </div>

          <div class="text-subtitle1 q-mt-sm">
            Refresca tu combo con opciones frías y naturales.
          </div>
        </div>
      </div>
    </q-img>

    <!-- PRODUCTOS -->
    <div class="q-pa-lg max-container">

      <div class="row q-col-gutter-xl">

        <!-- CARDS -->
        <div
          v-for="(prod, index) in productos"
          :key="index"
          class="col-12 col-sm-6"
        >

          <q-card
            :class="prod.esChef
              ? 'bg-orange-1 border-chef shadow-10'
              : 'shadow-8'"
            class="my-card full-height flex column"
          >

            <!-- IMAGEN -->
            <q-img
              :src="prod.foto"
              height="280px"
              fit="cover"
            >

              <!-- ETIQUETA -->
              <q-chip
                v-if="prod.etiqueta"
                color="deep-orange"
                text-color="white"
                class="absolute-top-right q-ma-md text-bold"
              >
                {{ prod.etiqueta }}
              </q-chip>

              <!-- CHEF -->
              <q-chip
                v-if="prod.esChef"
                color="amber-9"
                text-color="black"
                icon="star"
                class="absolute-top-left q-ma-md text-bold"
              >
                Recomendación del Chef
              </q-chip>

            </q-img>

            <!-- INFORMACIÓN -->
            <q-card-section class="col q-pa-lg">

              <div class="text-h5 text-bold text-dark">
                {{ prod.nombre }}
              </div>

              <div class="text-body1 text-grey-8 q-mt-sm">
                {{ prod.descripcion }}
              </div>

            </q-card-section>

            <!-- PRECIO Y BOTÓN -->
            <q-card-section
              class="q-pa-lg q-pt-none flex justify-between items-center"
            >

              <div class="text-h5 text-primary text-bold">
                {{ prod.precio }}
              </div>

              <q-btn
                color="orange-8"
                icon="add_shopping_cart"
                round
                size="md"
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
        {
          nombre: 'Limonada de Cerezos',
          descripcion:
            'Limón Tahití recién exprimido, jarabe natural de cereza y hielo frappé.',
          precio: '$8.500',
          etiqueta: 'Más pedido',
          esChef: true,
          foto:
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
        },

        {
          nombre: 'Malteada de Oreo',
          descripcion:
            'Helado artesanal de vainilla, galletas Oreo trituradas, crema batida y sirope de chocolate.',
          precio: '$12.000',
          etiqueta: 'Popular',
          esChef: false,
          foto:
            'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
        },

        {
          nombre: 'Soda Frutos Rojos',
          descripcion:
            'Agua con gas, reducción de moras y arándanos casera, hojas de menta y hielo.',
          precio: '$9.000',
          etiqueta: 'Nuevo',
          esChef: false,
          foto:
            'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80'
        },

        {
          nombre: 'Gaseosa Personal 400ml',
          descripcion:
            'Coca-Cola, Coca-Cola Zero, Sprite o Quatro fría en botella.',
          precio: '$5.000',
          etiqueta: null,
          esChef: false,
          foto:
            'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
        }
      ]
    }
  }
}
</script>

<style scoped>

.max-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* CARDS */
.my-card {
  border-radius: 18px;
  overflow: hidden;
  min-height: 520px;
  transition: all 0.25s ease;
}

/* EFECTO AL PASAR EL MOUSE */
.my-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
}

/* BORDE PARA RECOMENDACIÓN DEL CHEF */
.border-chef {
  border: 3px solid #f59e0b;
}

/* FONDO DEL ENCABEZADO */
.bg-filter {
  background: rgba(0, 0, 0, 0.45);
}

/* RESPONSIVE */
@media (max-width: 600px) {

  .my-card {
    min-height: auto;
  }

  .text-h3 {
    font-size: 30px;
  }

  .text-h5 {
    font-size: 20px;
  }

}

</style>