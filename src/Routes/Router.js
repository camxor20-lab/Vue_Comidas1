import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Hamburguesas from '../views/Hamburguesas.vue'
import Perros from '../views/Perros.vue'
import Pizza from '../views/Pizza.vue'
import Bebidas from '../views/Bebidas.vue'
import Postres from '../views/Postres.vue'
import Promociones from '../views/Promociones.vue'
import Nosotros from '../views/Nosotros.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },

  {
    path: '/hamburguesas',
    name: 'Hamburguesas',
    component: Hamburguesas
  },

  {
    path: '/perros',
    name: 'Perros',
    component: Perros
  },

  {
    path: '/pizza',
    name: 'Pizza',
    component: Pizza
  },

  {
    path: '/bebidas',
    name: 'Bebidas',
    component: Bebidas
  },

  {
    path: '/postres',
    name: 'Postres',
    component: Postres
  },

  {
    path: '/promociones',
    name: 'Promociones',
    component: Promociones
  },

  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router