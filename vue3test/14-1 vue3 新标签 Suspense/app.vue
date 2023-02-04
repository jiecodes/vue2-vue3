<template>
  <div id="app">
    父组件
    <button @click="isShowDemo = !isShowDemo">是否展示demo</button>
    <!-- Suspense 内置组件 不用引入 内部原理是插槽 -->
    <Suspense>
      <!-- v-slot:default 默认选择显示这个组件 -->
      <template v-slot:default>
        <child v-show="isShowDemo"></child>
      </template>
      <!-- v-slot:fallback 如果组件显示的慢了 就显示这个组件 -->
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// 导入子组件 静态引入 网速慢时: app.vue组件和Child.vue组件一起显示
// import child from './components/Child.vue'
// 动态导入子组件 异步引入  网速慢时: app.vue组件先显示 Child.vue组件后显示
import { defineAsyncComponent} from 'vue'

import {ref, reactive, toRefs, provide} from 'vue'

// const child = defineAsyncComponent(() => {
//   // return 99
//   return import('./components/Child.vue')
// })
// 简写
const child = defineAsyncComponent( ()=> { import('./components/Child.vue')})

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
 .app  {
   background-color: red;
 }
</style>