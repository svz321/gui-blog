import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/font_3145928_8lzb7ipz3y5/iconfont.css'
import ElementUI from 'element-ui'; // 导入 elementUI
import 'element-ui/lib/theme-chalk/index.css'; // 导入 css

Vue.use(ElementUI);

import axios from 'axios'
axios.defaults.baseURL="./"
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

