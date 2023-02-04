<template>
  <div id="demo">
    求和{{sum}}
    <button @click="addSum">加1</button>
  </div>
</template>

<script>
// 导入 vue3生命周期钩子 创建前后的生命周期钩子放到了setup函数中,其他的钩子其前面加上on 写在setup中
import {ref,onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,} from 'vue'

export default {
  name: 'demo',
  // setup第一次执行的比beforeCrate早
  setup() {
    let sum = ref(0)
    function addSum() {
      sum++
    };

    // 通过组合式api的形式使用生命周期钩子(写在setup函数中的 这些钩子都是函数) setup内
    // 创建前后的生命周期钩子被放到了 setup中
    onBeforeMount(() => {
      console.log('--onBeforeMount--')
    })
    onMounted(() => {
      console.log('--onMounted--')
    })
    onBeforeUpdate(() => {
      console.log('--onBeforeUpdate--')
    })
    onUpdated(() => {
      console.log('--onUpdated--')
    })
    onBeforeUnmount(() => {
      console.log('--onBeforeUnmount--')
    })
    onUnmounted(() => {
      console.log('--onUnmounted--')
    })
    return {
      sum,
      addSum
    }
  },
  // vue3 生命周期 通过配置项的形式使用生命周期
  // 页面创建完毕到数据展示到页面 触发下面四个钩子
  beforeCreate() { console.log('--beforeCreate--')},
  created() { console.log('--created--')},
  beforeMount() { console.log('--beforeMount--')},
  mounted() { console.log('--mounted--')},
  // 数据发生改变触发下面俩个钩子
  beforeUpdate() { console.log('--beforeUpdate--')},
  updated() { console.log('--updated--')},
  // 页面卸载 子组件 自定义事件都会在 卸载钩子触发 
  beforeUnmount() { console.log('--beforeUnmount--')},
  unmounted() { console.log('--unmounted--')},
}
</script>

<style>

</style>