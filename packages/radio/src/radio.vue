<template>
  <label class="radio">
    <input type="radio" 
      :value="label"
      v-model="model"
      :name="name"
      :disabled="disabled"
    />
    <slot></slot>
  </label>
</template>
   
<script>
   
export default {
  name : 'StyleRadio',
  props:{
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },
  data () {
    return {
    
    }
  },
  computed: {
    model:{
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('change', val);
      }
    }
  },
  mounted () {

  },
  methods: {
    
  }
}
</script>
<style lang='less'>
  .radio {
   
  }
</style>