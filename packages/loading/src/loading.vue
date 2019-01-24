<template>
  <div class="style_loading" v-if="loading">
    <div class="loading_element"></div>
  </div>
</template>
   
<script>
   
export default {
  name : 'StyleLoading',
  props:{
    loading:{
      default:false
    }
  },
  data() {
    return {
      
    }
  },
  created() {
    
  },
  methods: {
    
  }
}
</script>
<style lang='less'>
  .style_loading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: @color_rgba;
    .loading_element {
      width: 40px;
      height: 40px;
      border: 2.5px solid @white;
      border-radius: 50%;
      border-top-color: @color_main;
      animation: myrotate 1s linear infinite;
      position: absolute;
    }
  }
</style>