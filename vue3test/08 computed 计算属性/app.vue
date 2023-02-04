<template>
  <div id="app">
    <!-- @hello 自定义事件 -->
    <demo >
      <!-- <template v-slot="slot"> -->
      <!-- 在vue3使用 v-slot:slot -->
      <template v-slot:slot>
      <!-- 简写 -->
      <!-- <template #slot> -->
        <span>传递给子组件的 插槽</span> 
      </template> 
    </demo>
  </div>
</template>

<script>
import demo from './components/Demo.vue'
export default {
  name: 'app',
  components: {demo},
  setup() {
    
  },
}
</script>

<style>

</style>