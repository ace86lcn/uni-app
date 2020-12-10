import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 获取共享数据
Vue.prototype.baseUrl = 'www.baidu.com'

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
