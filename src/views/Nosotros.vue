<template>
  <q-page class="q-pb-xl">
    <!-- Banner Principal -->
    <q-img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80" height="250px">
      <div class="absolute-full flex flex-center bg-filter text-white text-center">
        <div>
          <div class="text-h3 text-weight-bold">Sobre Nosotros</div>
          <div class="text-subtitle1 q-mt-sm">Conoce la Pasión Detrás de Express Bite</div>
        </div>
      </div>
    </q-img>

    <div class="q-pa-md max-container">
      <!-- Historia -->
      <q-card class="q-mb-lg">
        <q-card-section>
          <div class="text-h5 text-bold text-orange-9 q-mb-sm">
            <q-icon name="history" /> Nuestra Historia
          </div>
          <p class="text-body1 text-grey-9">
            Fundado en 2021, Express Bite nació de la idea de ofrecer comida rápida de nivel artesanal, sin perder la agilidad y el sabor auténtico que a todos nos fascina. Seleccionamos ingredientes locales frescos, preparamos nuestras salsas de manera artesanal y elaboramos el pan día a día para brindar una experiencia gastronómica única a cada cliente.
          </p>
        </q-card-section>
      </q-card>

      <!-- Información de Contacto y Horarios -->
      <div class="row q-col-gutter-md q-mb-lg">
        <div class="col-12 col-md-6">
          <q-card class="full-height">
            <q-card-section>
              <div class="text-h6 text-bold text-dark q-mb-md">
                <q-icon name="place" color="orange-8" /> Ubicación y Horarios
              </div>
              <q-list>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="map" color="grey-8" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-bold">Dirección Principal</q-item-label>
                    <q-item-label caption>Carrera 15 #45-28, Barrio Centro</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="schedule" color="grey-8" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-bold">Horarios de Atención</q-item-label>
                    <q-item-label caption>Lunes a Jueves: 4:00 PM - 11:00 PM</q-item-label>
                    <q-item-label caption>Viernes a Domingo: 3:00 PM - 12:00 AM</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-6">
          <q-card class="full-height">
            <q-card-section>
              <div class="text-h6 text-bold text-dark q-mb-md">
                <q-icon name="phone" color="orange-8" /> Canales de Atención
              </div>
              <q-list>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="call" color="grey-8" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-bold">Teléfono Fijo</q-item-label>
                    <q-item-label caption>(607) 685 4321</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-icon name="chat" color="positive" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-bold">WhatsApp Pedidos</q-item-label>
                    <q-item-label caption>+57 315 890 1234</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Equipo de Trabajo -->
      <div class="text-h5 text-bold text-dark q-mb-md">
        <q-icon name="groups" color="orange-8" /> Nuestro Equipo
      </div>

      <div class="row q-col-gutter-md">
        <div v-for="(persona, index) in equipo" :key="index" class="col-12 col-sm-4">
          <q-card class="text-center">
            <q-card-section>
              <q-avatar size="110px" class="q-mb-sm shadow-3">
                <img :src="persona.foto" :alt="persona.nombre">
              </q-avatar>
              <div class="text-h6 text-bold">{{ persona.nombre }}</div>
              <q-badge color="orange-8" class="q-mt-xs">{{ persona.rol }}</q-badge>
              <div class="text-caption text-grey-7 q-mt-sm">{{ persona.descripcion }}</div>
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
      equipo: [
        {
          nombre: 'Carlos Mendoza',
          rol: 'Chef Principal',
          descripcion: 'Especialista en carnes y creador de nuestras icónicas recetas de hamburguesas y salsas caseras.',
          foto: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80'
        },
        {
          nombre: 'Laura Gómez',
          rol: 'Cajera & Atención',
          descripcion: 'Encargada de garantizar una atención impecable y la mejor experiencia de servicio a nuestros clientes.',
          foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
        },
        {
          nombre: 'Andrés Silva',
          rol: 'Líder de Domicilios',
          descripcion: 'Asegura que cada pedido llegue caliente, rápido y en perfectas condiciones a la puerta de tu casa.',
          foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
        }
      ]
    }
  }
}
</script>