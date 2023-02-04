<template>
  <div id="app">
    父组件
    <button @click="isShowDemo = !isShowDemo">是否展示demo</button>
    <child v-show="isShowDemo"></child>
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
    // 提供  传递给 后代组件 数据     参数: 传递出去数据的自定义名字 携带的数据
    return {
      isShowDemo,
    }
  },
}
</script>

<style>

</style>