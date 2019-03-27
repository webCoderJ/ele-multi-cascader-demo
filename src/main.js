import Vue from 'vue'
import App from './App.vue'
import Element from "element-ui"
import eleMultiCascader from "./components/ele-multi-cascader";
// import eleMultiCascader from "ele-multi-cascader";
import GithubButton from 'vue-github-button';

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(eleMultiCascader)
Vue.component(GithubButton.name, GithubButton)
new Vue({
  render: h => h(App),
}).$mount('#app')
