<template>
  <div id="app">
    父组件
    <button @click="isShowDemo = !isShowDemo">是否展示demo</button>
    <child v-show="isShowDemo"></child>

    <!-- <div>车 名字 {{car.name}}</div>
    <div>车 价格 {{car.price}}</div> -->

    <!-- return ...toRefs(car) 之后 -->
    <div>车 名字 {{name}}</div>
    <div>车 价格 {{price}}</div>
  </div>
</template>

<script>
import child from './components/Child.vue'

import {ref, reactive, toRefs, provide} from 'vue'
export default {
  name: 'app',
  components: {child},
  setup() {
    let isShowDemo = ref(true)
    let car = reactive({
      name: '奔驰',
      price: '20w',
    })
    // 提供  传递给 后代组件 数据     参数: 传递出去数据的自定义名字 携带的数据
    provide('car',car)    // 给后代组件传递数据
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