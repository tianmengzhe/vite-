<template>
    
    <div v-text="text"></div>


    <comp v-model:modelValue="data" />
    <!-- <comp :modelValue="data" @update:modelValue="data=$event" /> -->

    <comp v-model:count="count" />


</template>

<script>

import comp from './comp.vue'

export default {
  name: '',
  data() { 
    return {
        text:`
        <comp v-model:modelValue="data" />

        等效于

        <comp :modelValue="data" @update:modelValue="data=$event" />`,
        data: '旧的内容' ,
        count:1
       
    }
  },
  components:{
      comp
  }
 }
</script>

<style scoped>

</style>