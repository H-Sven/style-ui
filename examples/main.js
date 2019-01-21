import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 导入组件库
// import StyleUI from 'style-ui'
// import 'style-ui/lib/style-ui.css'
import StyleUI from './../packages/index'
// 注册组件库
Vue.use(StyleUI)

// import Toast from './../packages/toast'
// Vue.use(Toast)

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
