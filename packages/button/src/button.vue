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
    border: 1px solid @color_border_button;
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
    color: @color_main;
    border-color: @color_border_hover_focus_button;
    background-color: @color_bg_hover_focus_button;
  }
  .style_button:active {
    color: @color_active_button;
    border-color: @color_active_button;
    outline: none;
  }
  .style_button.is_plain:focus, 
  .style_button.is_plain:hover {
    background: @white;
    border-color: @color_main;
    color: @color_main;
  }
  .style_button.is_disabled, 
  .style_button.is_disabled:focus, 
  .style_button.is_disabled:hover {
    color: @color_disabled;
    cursor: not-allowed;
    background-image: none;
    background-color: @white;
    border-color: @color_border_disabled;
  }

  .style_button--text {
    border-color: transparent;
    color: @color_main;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
  }
  .style_button--text:focus, 
  .style_button--text:hover {
    color: @color_hover_focus_main;
    border-color: transparent;
    background-color: transparent;
  }
  .style_button--text:active {
    color: @color_active_button;
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
    background-color: @color_main;
    border-color: @color_main;
  }
  .style_button--primary.is_active, 
  .style_button--primary:active {
    background: @color_active_button;
    border-color: @color_active_button;
    color: @white;
  }
  .style_button--primary:focus, 
  .style_button--primary:hover {
    background: @color_hover_focus_main;
    border-color: @color_hover_focus_main;
    color: @white;
  }
  .style_button--primary.is_disabled, 
  .style_button--primary.is_disabled:focus, 
  .style_button--primary.is_disabled:hover, 
  .style_button--primary:active {
    color: @white;
    background-color: @color_primary_disabled_button;
    border-color: @color_primary_disabled_button;
  }
  .style_button--primary.is_plain {
    color: @color_main;
    background: @color_bg_hover_focus_button;
    border-color: @color_border_primary_button;
  }
  .style_button--primary.is_plain:active, 
  .style_button--primary.is_plain:focus, 
  .style_button--primary.is_plain:hover {
    color: @white;
    background-color: @color_main;
  }
  .style_button--primary.is_plain:active{
    color: @white;
    background-color: @color_active_button;
    border-color: @color_active_button;
  }
  .style_button--primary.is_plain.is_disabled, 
  .style_button--primary.is_plain.is_disabled:active, 
  .style_button--primary.is_plain.is_disabled:focus, 
  .style_button--primary.is_plain.is_disabled:hover {
    color: @color_primary_plain_disabled;
    background-color: @color_bg_hover_focus_button;
    border-color: color_bg_primary_hover_focus_button;
  }
  // success
  .style_button--success {
    color: @white;
    background-color: @color_success_button;
    border-color: @color_success_button;
  }
  .style_button--success.is_plain {
    color: @color_success_button;
    background: @color_success_plain_button;
    border-color: @color_success_border_plain_button;
  }
  .style_button--success.is_active, 
  .style_button--success:active {
    background: @color_success_active_button;
    border-color: @color_success_active_button;
    color: @white;
  }
  .style_button--success.is_plain:focus, 
  .style_button--success.is_plain:hover {
    background: @color_success_button;
    border-color: @color_success_button;
    color: @white;
  }
  .style_button--success.is_plain:active {
    background:@color_success_active_plain_button;
    border-color:@color_success_active_plain_button;
    color: @white;
    outline: none;
  }
  .style_button--success:focus, 
  .style_button--success:hover {
    background: @color_success_active_button;
    border-color: @color_success_active_button;
    color: @white;
  }
  .style_button--success.is_disabled, 
  .style_button--success.is_disabled:focus, 
  .style_button--success.is_disabled:hover, 
  .style_button--success:active {
    color: @white;
    background-color: @color_success_disabled_button;
    border-color: @color_success_disabled_button;
  }
  .style_button--success.is_plain.is_disabled, 
  .style_button--success.is_plain.is_disabled:active, 
  .style_button--success.is_plain.is_disabled:focus, 
  .style_button--success.is_plain.is_disabled:hover {
    color: @color_success_plain_disabled_button;
    background-color: @color_success_plain_button;
    border-color: @color_success_border_disabled_plain_button;
  }





  // warning
  .style_button--warning {
    color: @white;
    background-color: @color_warning_button;
    border-color: @color_warning_button;
  }
  .style_button--warning.is_plain {
    color: @color_warning_button;
    background: @color_warning_plain_button;
    border-color: @color_warning_border_plain_button;
  }
  .style_button--warning.is_plain:active {
    background: @color_warning_active_plain_button;
    border-color: @color_warning_active_plain_button;
    color: @white;
    outline: none;
  }
  .style_button--warning.is_plain:focus, 
  .style_button--warning.is_plain:hover {
    background: @color_warning_button;
    border-color: @color_warning_button;
    color: @white;
  }
  .style_button--warning.is_active, 
  .style_button--warning:active {
    background: @color_warning_active_button;
    border-color: @color_warning_active_button;
    color: @white;
  }
  .style_button--warning:focus,
  .style_button--warning:hover {
    background: @color_warning_active_button;
    border-color: @color_warning_active_button;
    color: @white;
  }
  .style_button--warning.is_disabled, 
  .style_button--warning.is_disabled:focus, 
  .style_button--warning.is_disabled:hover, 
  .style_button--warning:active {
    color: @white;
    background-color: @color_warning_disabled_button;
    border-color: @color_warning_disabled_button;
  }
  .style_button--warning.is_plain.is_disabled, 
  .style_button--warning.is_plain.is_disabled:active, 
  .style_button--warning.is_plain.is_disabled:focus, 
  .style_button--warning.is_plain.is_disabled:hover {
    color: @color_warning_plain_disabled_button;
    background-color: @color_warning_plain_button;
    border-color: @color_warning_border_disabled_plain_button;
  }


  // error
  .style_button--error {
    color: @white;
    background-color: @color_error_button;
    border-color: @color_error_button;
  }
  .style_button--error.is_plain {
    color: @color_error_button;
    background: @color_error_plain_button;
    border-color: @color_error_border_button;
  }
  .style_button--error.is_plain:focus, 
  .style_button--error.is_plain:hover {
    background: @color_error_button;
    border-color: @color_error_button;
    color: @white;
  }
  .style_button--error.is_plain:active {
    background: @color_error_active_plain_button;
    border-color: @color_error_active_plain_button;
    color: @white;
    outline: none;
  }
  .style_button--error.is_active, 
  .style_button--error:active {
    background: @color_error_active_button;
    border-color: @color_error_active_button;
    color: @white;
  }
  .style_button--error:focus, 
  .style_button--error:hover {
    background: @color_error_active_button;
    border-color: @color_error_active_button;
    color: @white;
  }
  .style_button--error.is_disabled, 
  .style_button--error.is_disabled:focus, 
  .style_button--error.is_disabled:hover, 
  .style_button--error:active {
    color: @white;
    background-color: @color_error_disabled_button;
    border-color: @color_error_disabled_button;
  }
  .style_button--error.is_plain.is_disabled, 
  .style_button--error.is_plain.is_disabled:active, 
  .style_button--error.is_plain.is_disabled:focus, 
  .style_button--error.is_plain.is_disabled:hover {
    color: @color_error_plain_disabled;
    background-color: @color_error_plain_button;
    border-color: @color_error_border_disabled_active_plain_button;
  }
</style>