import StyleDialog from './src/component';

// 为组件提供install安装方法，供按需引入
StyleDialog.install = Vue => {
  Vue.component(StyleDialog.name, StyleDialog)
}

export default StyleDialog;