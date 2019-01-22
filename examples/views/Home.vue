<template>
  <div class="home">
    <br/>
    <br/>
    <br/>
    <style-radio v-model="value" label="1" @change="getChange">radio测试1</style-radio>
    <style-radio v-model="value" label="2" @change="getChange">radio测试2</style-radio>
    <br/>
    <br/>
    <br/>
    <style-button @click="dialogShow">默认按钮</style-button>
    <style-button type="primary" @click="showToast" >主要按钮</style-button>
    <style-button type="success" >成功按钮</style-button>
    <style-button type="warning" >警告按钮</style-button>
    <style-button type="error" >错误按钮</style-button>
    <br/>
    <br/>
    <br/>
    <style-button plain>默认按钮</style-button>
    <style-button type="primary" plain >主要按钮</style-button>
    <style-button type="success" plain >成功按钮</style-button>
    <style-button type="warning" plain >警告按钮</style-button>
    <style-button type="error" plain >错误按钮</style-button>
    <br/>
    <br/>
    <br/>
    <style-button round>默认按钮</style-button>
    <style-button type="primary" round >主要按钮</style-button>
    <style-button type="success" round >成功按钮</style-button>
    <style-button type="warning" round >警告按钮</style-button>
    <style-button type="error" round >错误按钮</style-button>
    <br/>
    <br/>
    <br/>
    <style-button circle>默认按钮</style-button>
    <style-button type="primary" circle >主要按钮</style-button>
    <style-button type="success" circle >成功按钮</style-button>
    <style-button type="warning" circle >警告按钮</style-button>
    <style-button type="error" circle >错误按钮</style-button>
    <br/>
    <br/>
    <br/>
    <style-button disabled>默认按钮</style-button>
    <style-button type="primary" disabled>主要按钮</style-button>
    <style-button type="success" disabled>成功按钮</style-button>
    <style-button type="warning" disabled>警告按钮</style-button>
    <style-button type="error" disabled>错误按钮</style-button>
    <br/>
    <br/>
    <br/>
    <style-button disabled plain>默认按钮</style-button>
    <style-button type="primary" disabled plain>主要按钮</style-button>
    <style-button type="success" disabled plain>成功按钮</style-button>
    <style-button type="warning" disabled plain>警告按钮</style-button>
    <style-button type="error" disabled plain>错误按钮</style-button>
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

