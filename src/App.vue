<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold text-orange-8">
          <q-icon name="fastfood" class="q-mr-sm" /> Comidas Vocero del 8
        </q-toolbar-title>
        
        <q-tabs v-model="tab" shrink stretch active-color="orange-8" indicator-color="orange-8">
          <q-route-tab to="/hamburguesas" label="Hamburguesas" icon="lunch_dining" />
          <q-route-tab to="/perros" label="Perros" icon="restaurant" />
          <q-route-tab to="/pizza" label="Pizzas" icon="local_pizza" />
          <q-route-tab to="/bebidas" label="Bebidas" icon="local_bar" />
          <q-route-tab to="/postres" label="Postres" icon="icecream" />
          <q-route-tab to="/promociones" label="Promociones" icon="local_offer" />
          <q-route-tab to="/nosotros" label="Nosotros" icon="info" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('hamburguesas')
    }
  }
}
</script>