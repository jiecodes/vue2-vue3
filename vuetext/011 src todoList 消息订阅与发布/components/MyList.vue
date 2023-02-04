<template>
  <div class="todoList">
    <!-- 父组件 定义数据对象 通过v-bind把对象传递给子组件 子组件通过props接收todo -->
    <listitem v-for="item in todos" :key="item.id" :todo='item' ></listitem>
  </div>
</template>

<script>
import listitem from './ListItem.vue'

export default {
  name: 'MyList',
  data() {
    return {
      // todos: [
      //   {id: '001', title: 'aa', complete: true,},
      //   {id: '002', title: 'bb', complete: false,},
      //   {id: '003', title: 'cc', complete: true,},
      // ]
    }
  },
    // 接收 app.vue传递过来的 对象
  props: ['todos',],
  components: {
    listitem
  }
}
</script>

<style scoped lang="scss">
.todoList {
  padding-bottom: 1rem;
  border-top: 1px solid #ccc;
}
</style>