import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 导入组件库
// import StyleUI from 'style-ui'
// import 'style-ui/lib/style-ui.css'
import StyleUI from './../packages/index'
import Toast from './../packages/toast'
// 注册组件库
Vue.use(StyleUI)
Vue.use(Toast)

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
