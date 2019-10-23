import Vue from 'vue'
import Main from './Main.vue'
import router from './router'
import store from './store'
import vants from './plugin/vant'
import 'vant/lib/index.css'
import 'css/base/normalize.css'
import 'css/base/minireset.css'
import aixos from './plugin/axios'
import common from './plugin/common'
import globalComponent from './globalComponentRegister/resgisterComponent'
import 'lib-flexible'
import directive from './plugin/directives'

Vue.use(vants).use(aixos).use(globalComponent).use(directive)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(Main)
}).$mount('#app')
