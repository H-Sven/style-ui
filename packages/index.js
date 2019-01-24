// 导入组件
import Dialog from './dialog/index';
import Button from './button/index';
import Toast from './toast/index';
import Radio from './radio/index';
import Loading from './loading/index';

// 存储组件列表
const components = [
  Dialog,
  Button,
  Toast,
  Radio,
  Loading
]

// 定义install方法，接受Vue作为参数。如果使用user组件组件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  install.installed = true
  // 遍历注册标签组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  // 注册全局方法组件
  Vue.use(Toast)
  Vue.use(Loading)
}

// 判断是否直接引入文件
if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有install,才能被Vue.user()方法安装
  install,
  // 以下是具体需要导出的组件列表
  ...components
}
