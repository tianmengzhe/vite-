<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- 组合api composition api -->
  <!-- <HelloWorld /> -->

  <!-- 传送门 teleport-->
  <!-- <TeleportComp /> -->

  <!-- 多个根 -->
  <!-- <FragmentsComp /> -->

  <!-- emits 自定义事件处理  -->
  <!-- <Emits @click="onClick"/> -->

  <!-- 自定义渲染器  未实现-->
  <!-- <CustomRender /> -->

  <!-- v-model -->
  <!-- <Model/> -->


  <!-- Todos 示例-->
  <Todos/>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import TeleportComp from './components/TeleportComp.vue'
import FragmentsComp from './components/FragmentsComp.vue'
import Emits from './components/Emits.vue'
// import CustomRender from './components/CustomRender.vue'
import Model from './components/Model.vue'
import Todos from './components/Todos.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,TeleportComp,FragmentsComp,Emits,Model,Todos
  },
  methods:{
    onClick(){
      console.log('onClick')
    }
  }
}
</script>
