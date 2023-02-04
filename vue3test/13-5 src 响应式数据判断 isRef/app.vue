<template>
  <div id="app">
    <button @click="isShowDemo = !isShowDemo">是否展示demo</button>
    <child v-show="isShowDemo"></child>
  </div>
</template>

<script>

import {ref, reactive, toRefs, provide,readonly, isRef, isReactive, isReadonly, isProxy } from 'vue'
export default {
  name: 'app',
  components: {child},
  setup() {
    let isShowDemo = ref(true)
    let car = reactive({
      name: '奔驰',
      price: '20w',
    })
    // readonly 只允许读取数据 不允许修改数据
    let car1 = readonly(car)

    console.log(isRef(isShowDemo))     // true         
    console.log(isReactive(car))       // true       
    console.log(isReadonly(car1))      // true       
    console.log(isProxy(car))          // true     
    console.log(isProxy(car1))         // true     

    return {
      isShowDemo,
      // car,
      // 少写 car.
      ...toRefs(car)
    }
  },
}
</script>

<style>

</style>