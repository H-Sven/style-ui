<template>
  <div class="home">
    <br/>
    <br/>
    <br/>
    <div style="width:500px;height:300px;background:#f1f3f4;position:absolute">
      测试Loading组件
      <style-loading :loading="true"></style-loading>
    </div>
    <style-button @click="dialogShow">默认按钮</style-button>
    <style-button type="primary" @click="showToast" >主要按钮</style-button>
    <style-button type="success" @click="showLoading" >成功按钮</style-button>
    <style-button type="warning" >警告按钮</style-button>
    <style-button type="error" >错误按钮</style-button>

    <style-loading></style-loading>
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
      isShowDia:false,
      value:1,
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
    // 显示toast
    showToast(){
      this.$toast("Hello World",3000,{
        type:'error'
      });
      // setTimeout(() => {
      //   this.$toast("你好3213123123");
      // }, 3000);
    },
    showLoading(){
      this.$loading.show()
      setTimeout(() => {
        this.$loading.close()
      }, 3000);
    },
    // 确定
    confirmDialog(){
      this.isShowDia = false;
    },
    // 取消
    closeDialog(){
      this.isShowDia = false;
    },
    // 测试radio
    getChange(status){
      this.value = status;
      console.log(this.value,'status');
    }
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

