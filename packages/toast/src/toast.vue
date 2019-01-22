<template>
  <transition name="fade">
    <div class="toast" :class="`toast_${options.type}`" v-if="show">
      {{message}}
    </div>
  </transition>
</template>
   
<script>
export default {
  name: "StyleToast",
  data() {
    return {
      show: false,
      message: "",
      options:{}
    };
  },
  created() {},
  updated() {
    console.log(this.options);
  },
  methods: {}
};
</script>
<style lang='less'>
.toast {
  position: fixed;
  width: 400px;
  top: 5%;
  left: 50%;
  margin-left: -200px;
  padding: 13px 20px;
  text-align: center;
  border-radius: 4px;
  color: #909399;
  background-color: @color_toast;
  z-index: 999;
}
.toast_success {
  color: @color_success_button;
  background-color: @color_success_plain_button;
}
.toast_warning {
  color: @color_warning_button;
  background-color: @color_warning_plain_button;
}
.toast_error {
  color: @color_error_button;
  background-color: @color_error_plain_button;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease-out;
}
.fade-enter {
  opacity: 0;
  transform: scale(1.2);
}
</style>