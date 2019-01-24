import LoadingComponent from './src/loading.vue';
// 为组件提供install安装方法，供按需引入
LoadingComponent.install = Vue => {
  // 生成一个Vue的子类
  // 同时这个子类也就是组件
  const LoadingConstructor = Vue.extend(LoadingComponent)
  // 生成一个该子类的实例
  const instance = new LoadingConstructor();

  // 将这个实例挂载到创建的div上，并全局挂载
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  // 通过Vue的原型注册一个方法
  Vue.prototype.$loading = {
    show: ()=> {
      instance.loading = true;
    },
    close: ()=> {
      instance.loading = false;
    },
  }
  // Vue.component(LoadingComponent.name, LoadingComponent)
}

export default LoadingComponent;
