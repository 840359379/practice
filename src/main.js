import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Axios from './config/request.js'


createApp(App).config.globalProperties.$axios=Axios
createApp(App).use(ElementPlus).use(store).use(store).use(router).mount('#app')
