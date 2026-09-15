<template>
  <q-layout view="lHh Lpr lFf">

    <!-- ============================== -->
    <!-- ENCABEZADO -->
    <!-- ============================== -->

    <q-header elevated class="bg-dark text-white">

      <q-toolbar>

        <!-- LOGO / NOMBRE -->
        <q-toolbar-title class="text-weight-bold text-orange-8">
          <q-icon name="fastfood" class="q-mr-sm" />
          El Vocero del 8
        </q-toolbar-title>

        <!-- MENÚ -->
        <q-tabs
          v-model="tab"
          shrink
          stretch
          active-color="orange-8"
          indicator-color="orange-8"
        >

          <!-- INICIO -->
          <q-route-tab
            to="/"
            name="inicio"
            label="Inicio"
            icon="home"
          />

          <!-- HAMBURGUESAS -->
          <q-route-tab
            to="/hamburguesas"
            name="hamburguesas"
            label="Hamburguesas"
            icon="lunch_dining"
          />

          <!-- PERROS -->
          <q-route-tab
            to="/perros"
            name="perros"
            label="Perros"
            icon="restaurant"
          />

          <!-- PIZZAS -->
          <q-route-tab
            to="/pizza"
            name="pizza"
            label="Pizzas"
            icon="local_pizza"
          />

          <!-- BEBIDAS -->
          <q-route-tab
            to="/bebidas"
            name="bebidas"
            label="Bebidas"
            icon="local_bar"
          />

          <!-- POSTRES -->
          <q-route-tab
            to="/postres"
            name="postres"
            label="Postres"
            icon="icecream"
          />

          <!-- PROMOCIONES -->
          <q-route-tab
            to="/promociones"
            name="promociones"
            label="Promociones"
            icon="local_offer"
          />

          <!-- NOSOTROS -->
          <q-route-tab
            to="/nosotros"
            name="nosotros"
            label="Nosotros"
            icon="info"
          />

        </q-tabs>

      </q-toolbar>

    </q-header>


    <!-- ============================== -->
    <!-- CONTENIDO -->
    <!-- ============================== -->

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
      tab: ref('inicio')
    }
  }
}
</script>