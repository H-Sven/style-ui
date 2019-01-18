<template>
  <div class="home">
    <button @click="dialogShow">显示Dialog</button>
    <style-dialog title="提示标题" :showDialoa="isShowDia" @close-dialog="isShowDia = false">
      <div class="dialog_box">313123123123</div>
      <div slot="footer">
        <button type="button" class="sy-button sy-button--primary" @click="confirmDialog">确定</button>
        <button type="button" class="sy-button" @click="closeDialog">取消</button>
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
