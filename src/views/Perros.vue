<template>
  <q-page class="q-pb-xl">

    <!-- Banner de Portada -->
    <q-img
      src="https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=1200&q=80"
      height="250px"
    >
      <div class="absolute-full flex flex-center bg-filter text-white text-center">
        <div>
          <div class="text-h3 text-weight-bold">Perros Calientes</div>
          <div class="text-subtitle1 q-mt-sm">
            Salchicha premium, ingredientes frescos y salsas de la casa.
          </div>
        </div>
      </div>
    </q-img>

    <div class="q-pa-md max-container">
      <div class="row q-col-gutter-md">

        <div
          v-for="(prod, index) in productos"
          :key="index"
          class="col-12 col-sm-6 col-md-3"
        >

          <!-- Card Diferenciada para Recomendación del Chef -->
          <q-card
            :class="prod.esChef ? 'bg-orange-1 border-chef shadow-10' : ''"
            class="my-card full-height flex flex-start column"
          >

            <q-img :src="prod.foto" height="200px">

              <!-- Etiqueta -->
              <q-chip
                v-if="prod.etiqueta"
                color="deep-orange"
                text-color="white"
                class="absolute-top-right q-ma-sm text-bold"
              >
                {{ prod.etiqueta }}
              </q-chip>

              <!-- Recomendación del Chef -->
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

            <q-card-section class="col">
              <div class="text-h6 text-bold text-dark">
                {{ prod.nombre }}
              </div>

              <div class="text-caption text-grey-8 q-mt-xs">
                {{ prod.descripcion }}
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none flex justify-between items-center">

              <div class="text-h6 text-primary text-bold">
                {{ prod.precio }}
              </div>

              <q-btn
                color="orange-8"
                icon="add_shopping_cart"
                round
                dense
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
          nombre: 'El Supremo',
          descripcion: 'Salchicha premium, queso mozzarella, tocineta crujiente, cebolla caramelizada, papas fosforito y salsa BBQ.',
          precio: '$22.900',
          etiqueta: 'Más pedido',
          esChef: true,
          foto: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Perro Clásico',
          descripcion: 'Salchicha tradicional, queso rallado, cebolla, papitas trituradas, salsa de tomate, mostaza y mayonesa.',
          precio: '$16.500',
          etiqueta: null,
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Perro Mexicano',
          descripcion: 'Salchicha premium, guacamole, jalapeños, pico de gallo, nachos triturados y salsa picante.',
          precio: '$21.000',
          etiqueta: 'Picante 🌶️',
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Perro BBQ',
          descripcion: 'Salchicha ahumada, queso cheddar, tocineta, cebolla crispy y abundante salsa BBQ de la casa.',
          precio: '$19.500',
          etiqueta: 'Especial 🔥',
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80'
        }
      ]
    }
  }
}
</script>