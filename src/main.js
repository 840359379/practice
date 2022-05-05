import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Axios from './config/request.js'
import * as ElIcons from '@element-plus/icons-vue'
const app = createApp(App)

router.beforeEach((to, from, next) => {
    //路由需要认证
    if (to.meta.requireAuth) {
      //判断store里是否有token
      if (store.state.token) {
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    } else {
      next()
    }
})


for (let iconName in ElIcons) {
	app.component(iconName, ElIcons[iconName])
}
app.config.globalProperties.$axios=Axios
app.use(ElementPlus).use(store).use(store).use(router).mount('#app')
