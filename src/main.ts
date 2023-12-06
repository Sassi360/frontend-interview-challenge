import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from "./App.vue"
import "./assets/css/style.css"
import { router } from './router'

const app = createApp(App)
const pinia = createPinia()

// Use the router
app.use(router)

// Use Pinia for state management
app.use(pinia)

// Mount the app
app.mount('#app')
