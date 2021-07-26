import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
import "virtual:windi.css"
import "vue-global-api"

const app = createApp(App)
app.use(createPinia())
app.mount("#app")
