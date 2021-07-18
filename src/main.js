// 项目的启动入口
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 创建Vue的根实例
// 把router配置到根实例中
// 通过 render方法把App根组件渲染到 #app入口节点中。#app 在/public/index.html中
// el: '#app' 等价于$mount('#app')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
