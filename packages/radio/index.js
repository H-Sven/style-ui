import StyleRadio from './src/radio.vue';

// 为组件提供install安装方法，供按需引入
StyleRadio.install = Vue => {
  Vue.component(StyleRadio.name, StyleRadio)
}

export default StyleRadio;