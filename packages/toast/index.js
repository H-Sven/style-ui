import ToastComponent from './src/toast.vue';
// 为组件提供install安装方法，供按需引入
ToastComponent.install = Vue => {
  // 生成一个Vue的子类
  // 同时这个子类也就是组件
  const ToastConstructor = Vue.extend(ToastComponent)
  // 生成一个该子类的实例
  const instance = new ToastConstructor();

  // 将这个实例挂载到创建的div上，并全局挂载
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  // 通过Vue的原型注册一个方法
  Vue.prototype.$toast = (msg,duration = 3000,options ={}) => {
    instance.options = options;
    instance.message = msg;
    instance.show = true;
    // 时间到自动关闭
    setTimeout(() => {
      instance.show = false;
    }, duration);
  }
  // Vue.component(ToastComponent.name, ToastComponent)
}

export default ToastComponent;
