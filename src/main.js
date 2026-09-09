import { createApp } from 'vue'
import './style.css'
import { Quasar } from 'quasar'
import App from './App.vue'

// 1. Importar el router desde tu carpeta Routes
import router from './Routes/Router.js'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// 2. Crear UNA sola instancia de la app
const app = createApp(App)

// 3. Registrar los plugins (Quasar y Router)
app.use(Quasar, {
  plugins: {},
})
app.use(router)

// 4. Montar la app al final
app.mount('#app')





