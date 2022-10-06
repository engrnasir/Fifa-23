import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App)
.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDFaeiGBcISEYBMIv-B9ILLTiPw3fY6MLw',
    },
    autobindAllEvents: true,
})
.use(store).use(router).mount('#app')