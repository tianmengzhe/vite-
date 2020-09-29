<template>
    自定义渲染器

    <piechart @click="handleClick" :data="state.data" :x='200' :y="200" :r="200" />
</template>

<script>
import { reactive } from "vue";
export default {
  name: "",
  setup() {
    const state = reactive({
      data: [
        { name: "项目一", count: 200, color: "red" },
        { name: "项目二", count: 300, color: "yellow" },
        { name: "项目三", count: 20, color: "blue" },
        { name: "项目四", count: 10, color: "pink" },
        { name: "项目五", count: 250, color: "skyblue" },
      ],
    });

    function handleClick(){
        state.data.push({ name: "项目一", count: 200, color: "red" })
    }
    return {state, handleClick};
  },
};
</script>

<style scoped>
</style>