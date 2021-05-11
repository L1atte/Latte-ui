import Vue from 'vue'
import App from './App.vue'
import latteui from '../packages'
Vue.config.productionTip = false
Vue.use(latteui)
new Vue({
  render: h => h(App)
}).$mount('#app')
