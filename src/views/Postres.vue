<template>
  <q-page class="q-pb-xl">
    <q-img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80" height="250px">
      <div class="absolute-full flex flex-center bg-filter text-white text-center">
        <div>
          <div class="text-h3 text-weight-bold">Postres y Antojos</div>
          <div class="text-subtitle1 q-mt-sm">El toque dulce ideal para finalizar tu comida.</div>
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
          nombre: 'Volcán de Chocolate',
          descripcion: 'Pastel de chocolate caliente con centro líquido acompañado de bola de helado de vainilla.',
          precio: '$13.500',
          etiqueta: 'Más pedido',
          esChef: true,
          foto: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Waffle Nutella & Banano',
          descripcion: 'Waffle crujiente bañado en abundante Nutella, banano picado y azucar glas.',
          precio: '$14.000',
          etiqueta: null,
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Cheesecake Frutos Rojos',
          descripcion: 'Base crocante de galleta, crema suave de queso y mermelada casera de moras y fresas.',
          precio: '$12.500',
          etiqueta: 'Favorito',
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Brownie con Helado',
          descripcion: 'Brownie melcochudo de chocolate amargo servido con helado y sirope de arequipe.',
          precio: '$10.000',
          etiqueta: null,
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80'
        }
      ]
    }
  }
}
</script>