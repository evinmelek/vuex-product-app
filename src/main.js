import { createApp } from 'vue'
import App from './App.vue'
import store from  '@/store/index'
import  {currency} from "@/api/currency"
import router from "./router/index"

const app = createApp(App)
    app
        .use(currency)
        .use(store)
        .use(router)
        .mount('#app')
