import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 导入组件库
// import StyleUI from 'style-ui'
import StyleButton from './../packages/index'
// import 'style-ui/lib/style-ui.css'
// 注册组件库
Vue.use(StyleButton)

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
