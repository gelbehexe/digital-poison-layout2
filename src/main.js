import { createApp } from "vue"
import App from "./App.vue"
import router from "./lib/router"

// import "./scss/styles.scss"
import "./sass/main.scss"

(async() => {
    if (process.env.NODE_ENV === "development") {
        await import ("./lib/breakpoint-indicator")
    }
})()


createApp(App)
    .use(router)
    .mount("#app")
