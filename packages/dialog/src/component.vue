<template>
  <div class="dialog_wrapper" v-if="showDialoa">
    <div class="style_dialog">
      <div class="dialog_header">
        <span class="title">{{title}}</span>
        <span class="close" @click="closeDialog">+</span>
      </div>
      <div class="dialog_body">
        这是一段信息
      </div>
      <div class="dialog_footer">
        <button type="button" class="sy-button sy-button--primary" @click="confirmDialog">确定</button>
        <button type="button" class="sy-button" @click="closeDialog">取消</button>
      </div>
    </div>
  </div>
</template>
   
<script>
   
export default {
  name : 'StyleDialog',
  props:{
    showDialoa:{
      type: Boolean,
      default: false
    },
    title:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      
    }
  },
  created() {
    
  },
  methods: {
    // 关闭dialog
    closeDialog(){
      this.$emit('close-dialog',false)
    },
    // 确认按钮
    confirmDialog(){
      alert('点击了确认')
    }
  }
}
</script>
<style lang='less'>
.dialog_wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  z-index: 1024;
  background-color: rgba(0,0,0,.3);
  .style_dialog {
    position: relative;
    margin: 0 auto 50px;
    min-height: 200px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(255,255,255,.3);
    box-sizing: border-box;
    width: 30%;
    margin-top: 15vh;
    padding: 15px 20px;
    .dialog_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .close {
        font-size: 28px;
        opacity: .5;
        transform: rotate(135deg);
        cursor: pointer;
        transition: all .2s ease-in-out;
      }
      .close:hover {
        color: #409eff;
        transition: all .2s ease-in-out;
        transform: rotate(225deg);
      }
    }
    .dialog_body {
      display: flex;
      justify-content: flex-start;
      margin-top: 20px;
      padding: 20px 0;
    }
    .dialog_footer {
      padding: 20px 0;
      text-align: right;
      .sy-button{
        width: 100px;
        height: 40px;
        margin-left: 15px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        color: #333;
        cursor: pointer;
      }
      .sy-button--primary {
        background-color: #409eff;
        color: #fff;
      }
    }
  }
}
</style>