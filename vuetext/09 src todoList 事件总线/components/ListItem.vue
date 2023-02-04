<template>
  <div class="todoListItem">
    <div>
      <!-- 动态决定是否勾选 根据传过来的对象里面的属性 v-bind      :checked="true"为勾选 为false为不勾选 -->
      <input type="checkbox" :checked="todo.complete" @click="changeCheck(todo.id)">
      <!-- v-model="todo.complete" 这样绑定也可以实现 勾选复选框 后台也会响应   但是不建议(不推荐修改props里面的数据) -->
      <!-- <input type="checkbox" v-model="todo.complete"> -->
      <input type="text" v-model="todo.title">
    </div>
    <!-- 根据id删除 数据 -->
    <button @click="removeListItem(todo.id)">删除</button>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: ['todo',],
  mounted() {
    console.log(this.todo)
  },
  methods: {
    // 勾选
    changeCheck(id) {
      // this.todo.complete = !this.todo.complete

      // checkTodo是 app.vue->list.vue->listitem.vue 传递过来的方法
      // this.checkTodo(id)
      // 事件总线
      this.$bus.$emit('checkTodo',id)
    },
    // 删除
    removeListItem(id) {
      // 弹出后 点击确认为true 取消为false
      if(confirm('确认吗')) {
        console.log(id)
        // removeListItem是  app.vue->list.vue->listitem.vue 传递过来的方法
        // this.removeListItemId(id)
        // 事件总线
        this.$bus.$emit('removeListItemId',id)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.todoListItem {
  display: flex;
  justify-content: space-between;
  padding: .4rem .5rem;
  border: 1px solid #ccc;
  border-top: none;
  
  input:nth-child(1) {
    // 图片和文字 对齐方式
    vertical-align: middle;
    width: .9rem;
    height: .9rem;
  }
  input:nth-child(2) {
    border: none;
    outline: none;
    font-size: 1rem;
  } 
  button {
    background-color: rgb(207, 101, 101);
    color: white;
    border-color: white;
    border-radius: .3rem;
    display: none;
    // 消除 点击按钮之后出现的边框
    border: none;
    outline: none;
  }
}
// 鼠标移入 显示button
.todoListItem:hover button{
  display: block;
}
.todoListItem:hover input{
  background-color: #ccc;
}
.todoListItem:hover {
  background-color: #ccc;
}
</style>