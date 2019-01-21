<template>
  <div class="home">
    <br/>
    <br/>
    <style-button @click="dialogShow">默认按钮</style-button>
    <style-button type="primary" >主要按钮</style-button>
    <style-button type="success" >成功按钮</style-button>
    <style-button type="warning" >警告按钮</style-button>
    <style-button type="danger" >错误按钮</style-button>
    <br/>
    <br/>
    <br/>
    <style-button plain>默认按钮</style-button>
    <style-button type="primary" plain >主要按钮</style-button>
    <style-button type="success" plain >成功按钮</style-button>
    <style-button type="warning" plain >警告按钮</style-button>
    <style-button type="danger" plain >错误按钮</style-button>
    <br/>
    <br/>
    <br/>
    <style-button round>默认按钮</style-button>
    <style-button type="primary" round >主要按钮</style-button>
    <style-button type="success" round >成功按钮</style-button>
    <style-button type="warning" round >警告按钮</style-button>
    <style-button type="danger" round >错误按钮</style-button>
    <br/>
    <br/>
    <br/>
    <style-button circle>默认按钮</style-button>
    <style-button type="primary" circle >主要按钮</style-button>
    <style-button type="success" circle >成功按钮</style-button>
    <style-button type="warning" circle >警告按钮</style-button>
    <style-button type="danger" circle >错误按钮</style-button>
    <br/>
    <br/>
    <br/>
    <style-button disabled>默认按钮</style-button>
    <style-button type="primary"disabled>主要按钮</style-button>
    <style-button type="success"disabled>成功按钮</style-button>
    <style-button type="warning"disabled>警告按钮</style-button>
    <style-button type="danger" disabled>错误按钮</style-button>
    <br/>
    <br/>
    <br/>
    <style-button type="text">文字按钮</style-button>
    <style-button type="text" disabled>文字按钮</style-button>
    <br/>
    <br/>
    <br/>
    <style-button type="primary"  :loading="true">加载中</style-button>
    <br/>
    <br/>
    <br/>



    <style-dialog title="提示标题" :showDialoa="isShowDia" @close-dialog="isShowDia = false">
      <div class="dialog_box">313123123123</div>
      <div slot="footer">
        <style-button @click="closeDialog">取消</style-button>
        <style-button type="primary" @click="confirmDialog">确定</style-button>
      </div>
    </style-dialog>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      isShowDia:false
    }
  },
  methods: {
    onClick(){
      alert(111111)
    },
    // 显示
     dialogShow () {
      this.isShowDia = true;
    },
    // 确定
    confirmDialog(){
      this.isShowDia = false;
    },
    // 取消
    closeDialog(){
      this.isShowDia = false;
    },
  }
};
</script>
<style lang="less">
.home {
  .style_button {
    margin-right: 10px;
  }
}
  
</style>

