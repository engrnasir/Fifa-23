import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App)
.use(VueGoogleMaps, {
    load: {
        // key: 'AIzaSyBm6-O-o6ZDDfGqg6Uzhkhy-nHQDoZCkKI',
        key: 'AIzaSyBod9qcKE75PeDr5_vvGlLrz5YSD_IbuEA',
        
    },
    autobindAllEvents: true,
})
.use(store).use(router).mount('#app')