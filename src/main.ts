import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from "./App.vue"
import "./assets/css/style.css"
import { router } from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// Use the router
app.use(router)

// Use Pinia for state management
app.use(pinia)

// Mount the app
app.mount('#app')
