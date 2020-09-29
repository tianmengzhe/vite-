<template>
  <div @click="$emit('update:modelValue','new value')"> {{modelValue}} </div>
  <div @click="$emit('update:count',count+1)"> {{count}} </div>
</template>

<script>
export default {
  props:{
      modelValue:{
          
      },
       count:{
          
      }
  }
}
</script>