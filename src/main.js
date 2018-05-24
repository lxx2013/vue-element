import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
const routes = [
    {
        path: '/index',
        component: null
    },
    {
        path: '/certi',
        component: null
    }
]
const router = new VueRouter({
    routes
})
new Vue({
    render: h => h(App)
}).$mount('#app')
