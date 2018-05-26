import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './assets/global.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);

import index from "./pages/index.vue"
import certi from "./pages/certi.vue"
import progr from "./pages/progr.vue"
import login from "./pages/login.vue"
const routes = [
    {
        path: '',
        component: index
    },
    {
        path: '/index',
        component: index
    },
    {
        path: '/certi',
        component: certi
    }, {
        path: '/progr',
        component: progr
    },
    {
        path: '/login',
        component: login
    }
]
const router = new VueRouter({
    routes
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
