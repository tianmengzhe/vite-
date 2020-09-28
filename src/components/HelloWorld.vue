<template>
  vue3 组合api holleworld.vue 测试
  <button>{{ count }}</button>
  {{ doubleCount }}
  {{ msg }}
  <div ref="div"></div>
</template>

<script>
import { computed, reactive, onMounted, onUnmounted, ref, toRefs, watch } from "vue";
export default {
  name: "HelloWorld",
  setup() {
    // count相关逻辑
    // const data = reactive({
    //   count: 1,
    //   doubleCount: computed(()=> data.count*10 )
    // })
    // let timer;
    // onMounted(()=>{
    //   timer = setInterval(()=>{
    //     data.count++
    //   }, 1000)
    // })
    // onUnmounted(()=>{
    //   clearInterval(timer)
    // })
    // 访问 count {{data.count}}

    // 抽离
    // const data = useCount()
    // 访问 count {{data.count}}

    // 解构
    // 如果没有 toRefs 直接解构就没有响应式
    const {count,doubleCount} = useCount()
    // 访问 count {{count}}

    // other 相关 单值响应式
    const msg = ref("message");

    // 元素引用  ref(null) 然后就会在上下文查找到 ref 绑定的元素
    const div = ref(null) 

    // 侦听器 监听count
    watch( count, (val, oldVal)=>{
      const d = div.value // => <div ref="div"></div>
      d.innerText = `count is change ${oldVal} to ${val}`
    })

    return { count, doubleCount, msg, div};
  },
};

function useCount() {
  const data = reactive({
    count: 1,
    doubleCount: computed(() => data.count * 10),
  });
  let timer;
  onMounted(() => {
    timer = setInterval(() => {
      data.count++;
    }, 1000);
  });
  onUnmounted(() => {
    clearInterval(timer);
  });
  // toRefs 解构data 
  return toRefs(data);
}
</script>
