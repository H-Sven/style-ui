<template>
  <transition name="fade">
    <div class="toast" v-if="show">
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
      message: ""
    };
  },
  created() {},
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
  color: @textColor;
  background-color: @message;
  z-index: 999;
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