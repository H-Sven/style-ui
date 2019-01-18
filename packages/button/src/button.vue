<template>
  <button
    class="style_button"
    @click="handleClick"
    :type="nativeType"
    :disabled="disabled || loading"
    :class="[
      type ? 'style_button--' + type : '',
      {
        'is_disabled': disabled,
        'is_loading': loading,
        'is_plain': plain,
        'is_round': round,
        'is_circle': circle
      }
    ]"
    >
    <slot></slot>
  </button>
</template>
   
<script>
   
export default {
  name : 'StyleButton',
  props:{
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    disabled:Boolean,
    loading:Boolean,
    circle:Boolean,
    round: Boolean,
    plain: Boolean,
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>
<style lang='less'>
  .style_button {
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    background: @white;
    border: 1px solid @dcdfe6;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
  }
  .style_button.is_round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  .style_button.is_circle {
    border-radius: 50%;
    padding: 12px;
  }
  .style_button:hover,
  .style_button:focus {
    color: @409eff;
    border-color: @c6e2ff;
    background-color: @ecf5ff;
  }
  .style_button:active {
    color: @3a8ee6;
    border-color: @3a8ee6;
    outline: none;
  }
  .style_button.is_plain:focus, 
  .style_button.is_plain:hover {
    background: @white;
    border-color: @409eff;
    color: @409eff;
  }
  .style_button.is_disabled, 
  .style_button.is_disabled:focus, 
  .style_button.is_disabled:hover {
    color: @c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: @white;
    border-color: @ebeef5;
  }
  .style_button--text {
    border-color: transparent;
    color: @409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
  }
  .style_button--text:focus, 
  .style_button--text:hover {
    color: @66b1ff;
    border-color: transparent;
    background-color: transparent;
  }
  .style_button--text:active {
    color: @3a8ee6;
    background-color: transparent;
  }
  .style_button--text.is_disabled, 
  .style_button--text.is_disabled:focus, 
  .style_button--text.is_disabled:hover, 
  .style_button--text:active {
    border-color: transparent;
  }



  // primary
  .style_button--primary {
    color: @white;
    background-color: @409eff;
    border-color: @409eff;
  }
  .style_button--primary.is_plain {
    color: @409eff;
    background: @ecf5ff;
    border-color: @b3d8ff;
  }
  .style_button--primary.is_active, 
  .style_button--primary:active {
    background: @3a8ee6;
    border-color: @3a8ee6;
    color: @white;
  }
  .style_button--primary:focus, 
  .style_button--primary:hover {
    background: @66b1ff;
    border-color: @66b1ff;
    color: @white;
  }
  // success
  .style_button--success {
    color: @white;
    background-color: @67c23a;
    border-color: @67c23a;
  }
  .style_button--success.is_plain {
    color: @67c23a;
    background: @f0f9eb;
    border-color: @c2e7b0;
  }
  .style_button--success.is_active, 
  .style_button--success:active {
    background: @85ce61;
    border-color: @85ce61;
    color: @white;
  }
  .style_button--success.is_plain:focus, 
  .style_button--success.is_plain:hover {
    background: @67c23a;
    border-color: @67c23a;
    color: @white;
  }
  .style_button--success.is_plain:active {
    background: @5daf34;
    border-color: @5daf34;
    color: @white;
    outline: none;
  }
  .style_button--success:focus, 
  .style_button--success:hover {
    background: @85ce61;
    border-color: @85ce61;
    color: @white;
  }





  // warning
  .style_button--warning {
    color: @white;
    background-color: @e6a23c;
    border-color: @e6a23c;
  }
  .style_button--warning.is_plain {
    color: @e6a23c;
    background: @fdf6ec;
    border-color: #f5dab1;
  }
  .style_button--warning.is_plain:active {
    background: @cf9236;
    border-color: @cf9236;
    color: @white;
    outline: none;
  }
  .style_button--warning.is_plain:focus, 
  .style_button--warning.is_plain:hover {
    background: @e6a23c;
    border-color: @e6a23c;
    color: @white;
  }
  .style_button--warning.is_active, 
  .style_button--warning:active {
    background: @ebb563;
    border-color: @ebb563;
    color: @white;
  }
  .style_button--warning:focus,
  .style_button--warning:hover {
    background: @ebb563;
    border-color: @ebb563;
    color: @white;
  }


  // danger
  .style_button--danger {
    color: @white;
    background-color: @f56c6c;
    border-color: @f56c6c;
  }
  .style_button--danger.is_plain {
    color: @f56c6c;
    background: @fef0f0;
    border-color: @fbc4c4;
  }
  .style_button--danger.is_plain:focus, 
  .style_button--danger.is_plain:hover {
    background: @f56c6c;
    border-color: @f56c6c;
    color: @white;
  }
  .style_button--danger.is_plain:active {
    background: @dd6161;
    border-color: @dd6161;
    color: @white;
    outline: none;
  }
  .style_button--danger.is_active, 
  .style_button--danger:active {
    background: @f78989;
    border-color: @f78989;
    color: @white;
  }
  .style_button--danger:focus, 
  .style_button--danger:hover {
    background: @f78989;
    border-color: @f78989;
    color: @white;
  }
</style>