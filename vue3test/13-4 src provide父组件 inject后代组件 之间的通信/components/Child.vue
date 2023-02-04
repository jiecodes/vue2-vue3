<template>
  <div class="child">
    子组件
    <child-son></child-son>
  </div>
</template>

<script>
import childSon from './ChildSon.vue'
export default {
  name: 'child',
  components: {childSon}
}
</script>

<style>

</style>