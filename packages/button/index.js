import StyleButton from './src/button.vue';

// 为组件提供install安装方法，供按需引入
StyleButton.install = Vue => {
  Vue.component(StyleButton.name, StyleButton)
}

export default StyleButton;