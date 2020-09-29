<template>
  <div class="emits">
      vue3中组件发送的自定义事件需要定义在 emits中：

      自定义事件 尽量不要和原生事件重名

      原生事件会触发2次 在emits里面添加就没有该问题了
      对象形式 事件校验

      <div @click="$emit('click')">
          <h3>自定义事件</h3>
      </div>
  </div>
</template>

<script>
export default {
  name: 'emits',
  emits:['click'],
 }
</script>

<style scoped>

</style>