<template>
  <q-page class="q-pb-xl">
    <q-img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80" height="250px">
      <div class="absolute-full flex flex-center bg-filter text-white text-center">
        <div>
          <div class="text-h3 text-weight-bold">Bebidas y Granizados</div>
          <div class="text-subtitle1 q-mt-sm">Refresca tu combo con opciones frias y naturales.</div>
        </div>
      </div>
    </q-img>

    <div class="q-pa-md max-container">
      <div class="row q-col-gutter-md">
        <div v-for="(prod, index) in productos" :key="index" class="col-12 col-sm-6 col-md-3">
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
          nombre: 'Limonada de Cerezos',
          descripcion: 'Limón Tahití recién exprimido, jarabe natural de cereza y hielo frappé.',
          precio: '$8.500',
          etiqueta: 'Más pedido',
          esChef: true,
          foto: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Malteada de Oreo',
          descripcion: 'Helado artesanal de vainilla, galletas Oreo trituradas, crema batida y sirope de chocolate.',
          precio: '$12.000',
          etiqueta: 'Popular',
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Soda Frutos Rojos',
          descripcion: 'Agua con gas, reducción de moras y arándanos casera, hojas de menta y hielo.',
          precio: '$9.000',
          etiqueta: 'Nuevo',
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Gaseosa Personal 400ml',
          descripcion: 'Coca-Cola, Coca-Cola Zero, Sprite o Quatro fría en botella.',
          precio: '$5.000',
          etiqueta: null,
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
        }
      ]
    }
  }
}
</script>