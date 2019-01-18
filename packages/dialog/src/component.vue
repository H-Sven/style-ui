<template>
  <div class="dialog_wrapper" v-if="showDialoa" ref="dialog">
    <div class="style_dialog" :style="{'width':width}">
      <botton class="close" @click="closeDialog">+</botton>
      <div class="dialog_header" :class="{'dialog_center':center}">
        <slot name="header">{{title}}</slot>
      </div>
      <div class="dialog_body"><slot></slot></div>
      <div class="dialog_footer" :class="{'dialog_center':center}">
        <slot name="footer"></slot>
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
    },
    center:{
      type: Boolean,
      default: false
    },
    width:{
      type: String,
      default: '600px'
    },
  },
  methods: {
    // 关闭dialog
    closeDialog(){
      this.$emit('close-dialog')
    },
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
      margin-top: 15vh;
      padding: 15px 20px;
      display: flex;
      flex-direction: column;
      .close {
        align-self: flex-end;
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
      .dialog_header {
        width: 100%;
        display: flex;
        .title {
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }
      }
      .dialog_body {
        width: 100%;
        display: flex;
        margin-top: 20px;
        padding: 20px 0;
      }
      .dialog_footer {
        padding: 20px 0;
        width: 100%;
        display: flex;
        justify-content: flex-end;
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
      .dialog_center {
        justify-content: center;
      }
    }
  }
</style>