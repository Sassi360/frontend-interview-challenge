import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from "./App.vue"
import "./assets/css/style.css"
import { router } from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// Use Pinia for state management
app.use(pinia)

// Use the router
app.use(router)

// Mount the app
app.mount('#app')
