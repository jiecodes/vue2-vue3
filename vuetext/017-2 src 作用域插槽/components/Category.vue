<template>
  <div class="category">
    <h2>{{title}}</h2>
    <!-- 使用插槽 -->
    <!-- 作用域插槽 数据传给插槽的使用者 -->
    <slot :games="games">默认值,插槽没有传递数据的时候,默认值会显示</slot>
  </div>
</template>

<script>
export default {
  name: 'category',
  props: ['title',],
  data() {
    return {
      games: ['1','2','3','4'],
    }
  },
}
</script>

<style scoped lang="scss">
  .category {
    width: 22vw;
    background-color: red;
    margin-left: 2vw;
    margin-bottom: 2vw;
    img {
      width: 100%;
    }
  }
  
</style>