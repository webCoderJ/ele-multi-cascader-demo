import Vue from 'vue'
import App from './App.vue'
import Element from "element-ui"
import eleMultiCascader from "ele-multi-cascader";

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(eleMultiCascader)
new Vue({
  render: h => h(App),
}).$mount('#app')
