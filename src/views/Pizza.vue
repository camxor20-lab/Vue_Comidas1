<template>
  <q-page class="q-pb-xl">
    <q-img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80" height="250px">
      <div class="absolute-full flex flex-center bg-filter text-white text-center">
        <div>
          <div class="text-h3 text-weight-bold">Pizzas Artesanales</div>
          <div class="text-subtitle1 q-mt-sm">Masa madurada 48 horas y horneada al momento.</div>
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
          nombre: 'Pizza Carnívora (Mediana)',
          descripcion: 'Salsa napolitana, mozzarella, pepperoni, tocineta, carne molida y jamón artesanal.',
          precio: '$32.000',
          etiqueta: 'Más pedido',
          esChef: true,
          foto: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Pepperoni Supreme',
          descripcion: 'Doble porción de pepperoni especiado, extra queso mozzarella y orégano fresco.',
          precio: '$28.000',
          etiqueta: null,
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Cuatro Quesos & Miel',
          descripcion: 'Mozzarella, provolone, queso azul, parmesano y un toque sutil de miel de abejas.',
          precio: '$29.500',
          etiqueta: 'Nuevo',
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80'
        },
        {
          nombre: 'Margarita Tradicional',
          descripcion: 'Salsa pomodoro, bocconcini de mozzarella fresca, hojas de albahaca y aceite de oliva.',
          precio: '$25.000',
          etiqueta: 'Vegetariano 🌱',
          esChef: false,
          foto: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80'
        }
      ]
    }
  }
}
</script>