<template>
  <q-page class="q-pb-xl">
    <!-- Banner de Portada -->
    <q-img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80" height="250px">
      <div class="absolute-full flex flex-center bg-filter text-white text-center">
        <div>
          <div class="text-h3 text-weight-bold">Hamburguesas</div>
          <div class="text-subtitle1 q-mt-sm">Carne 100% de res a la parrilla y pan artesanal recién horneado.</div>
        </div>
      </div>
    </q-img>

    <div class="q-pa-md max-container">
      <div class="row q-col-gutter-md">
        <div v-for="(prod, index) in productos" :key="index" class="col-12 col-sm-6 col-md-3">
          <!-- Card Diferenciada para Recomendación del Chef -->
          <q-card :class="prod.esChef ? 'bg-orange-1 border-chef shadow-10' : ''" class="my-card full-height flex flex-start column">
            <q-img :src="prod.foto" height="200px">
              <q-chip v-if="prod.etiqueta" color="deep-orange" text-color="white" class="absolute-top-right q-ma-sm text-bold">
                {{ prod.etiqueta }}
              </q-chip>
              <q-chip v-if="prod.esChef" color="amber-9" text-color="black" icon="star" class="absolute-top-left q-ma-sm text-bold">
                Recomendación del Chef
              </q-chip>
            </q-img>

            <q-card-section class="col">
              <div class="text-h6 text-bold text-dark">{{ prod.nombre }}</div>
              <div class="text-caption text-grey-8 q-mt-xs">{{ prod.descripcion }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none flex justify-between items-center">
              <div class="text-h6 text-primary text-bold">{{ prod.precio }}</div>
              <q-btn color="orange-8" icon="add_shopping_cart" round dense />
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
          nombre: 'La Suprema Bacon',
          descripcion: 'Carne de res 180g, doble queso cheddar, tocineta crujiente, cebolla caramelizada y salsa BBQ.',
          precio: '$26.900',
          etiqueta: 'Más pedido',
          esChef: true,
          foto: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Clásica Cheese',
          descripcion: 'Carne de res 150g, queso americano, lechuga, tomate fresco, pepinillos y mayonesa de la casa.',
          precio: '$18.500',
          etiqueta: null,
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Volcán Jalapeño',
          descripcion: 'Carne de res 180g, queso Pepper Jack, jalapeños salteados, pico de gallo y salsa picante habanero.',
          precio: '$24.000',
          etiqueta: 'Picante 🌶️',
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Veggie Green',
          descripcion: 'Medallón de garbanzo y lenteja, queso mozzarella, aguacate, rúcula y mahonesa de ajo verde.',
          precio: '$21.000',
          etiqueta: 'Vegetariano 🌱',
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=600&q=80'
        }
      ]
    }
  }
}
</script>