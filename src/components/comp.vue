<template>
  <div @click="$emit('update:modelValue','new value')"> {{modelValue}} </div>
</template>

<script>
export default {
  props:['modelValue']
}
</script>