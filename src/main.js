// 项目的启动入口
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载 element 组件库
import ElementUI from 'element-ui'

// 加载 element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'

// 加载全局样式文件
import './styles/index.less'

Vue.config.productionTip = false

// 全局注册 element 组件库
Vue.use(ElementUI)

// 创建Vue的根实例
// 把router配置到根实例中
// 通过 render方法把App根组件渲染到 #app入口节点中。#app 在/public/index.html中
// el: '#app' 等价于$mount('#app')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
