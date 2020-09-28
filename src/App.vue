<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- 组合api composition api -->
  <!-- <HelloWorld /> -->

  <!-- 传送门 teleport-->
  <TeleportComp />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TeleportComp from './components/TeleportComp.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,TeleportComp
  }
}
</script>
