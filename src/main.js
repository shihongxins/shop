import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import './assets/style/index.scss'

import fastclick from 'fastclick'
fastclick.attach(document.body)

createApp(App).use(store).use(router).mount('#app')
