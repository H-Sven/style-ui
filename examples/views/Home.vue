<template>
  <div class="home">
    <button @click="dialogShow">显示Dialog</button>
    <style-dialog
      title="提示Title"
      :showDialoa="isShowDia"
      @close-dialog="closeDia"
    >
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
     dialogShow () {
      // this.isShowDia = !this.isShowDia;
      this.isShowDia = true;
    },
    closeDia(status){
      console.log(status);
      this.isShowDia = status;
    }
  }
};
</script>
