<template>
    
    <div v-text="text"></div>

    <comp v-model="data" />

    <comp :modelValue="data" @update:modelValue="data=$event" />

</template>

<script>

import comp from './comp.vue'

export default {
  name: '',
  data() { 
    return {
        text:`
        <comp v-model="data" />

        等效于

        <comp :modelValue="data" @update:modelValue="data=$event" />`,
        data: '旧的内容' 
       
    }
  },
  components:{
      comp
  }
 }
</script>

<style scoped>

</style>