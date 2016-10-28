import Vue from 'vue'
import App from './App'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import VueRouter from 'vue-router'
import routes from './router'

import store from './vuex/store'
import './assets/css/reset.css'
import './assets/css/common.css'

// 声明使用vue-router
Vue.use(VueRouter)
Vue.use(MintUI)

// 创建路由
const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
// 开始应用
 /* eslint-disable no-new */
new Vue({
    router,
    store,
    template: '<App/>',
    components: { App }
}).$mount('#app')
