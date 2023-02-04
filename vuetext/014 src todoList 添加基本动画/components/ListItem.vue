<template>
  <!-- 给每一个item添加 动画 -->
  <transition name="todo" appear>
    <div class="todoListItem" >
      <div>
        <!-- 动态决定是否勾选 根据传过来的对象里面的属性 v-bind      :checked="true"为勾选 为false为不勾选 -->
        <input type="checkbox" :checked="todo.complete" @click="changeCheck(todo.id)">
        <!-- v-model="todo.complete" 这样绑定也可以实现 勾选复选框 后台也会响应   但是不建议(不推荐修改props里面的数据) -->
        <!-- <input type="checkbox" v-model="todo.complete"> -->

        <!-- 双向绑定 简单实现 -->
        <!-- <input type="text" v-model="todo.title"> -->
        <label for="blur">
          <span v-show="!todo.isEdit" @click="handleEdit(todo.id)" >{{todo.title}}</span>
          <input ref="blur" type="text" id="blur" :value="todo.title" v-show="todo.isEdit" @blur="inputBlur(todo,$event)" @keyup.enter="inputBlur(todo,$event)"> 
        </label>
      </div>
      <!-- 根据id删除 数据 -->
      <button @click="removeListItem(todo.id)">删除</button>
    </div>
  </transition>
</template>

<script>
// 消息订阅与发布 导入库
import pubsub from 'pubsub-js'

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

        // 消息订阅与发布 发布消息 发送数据 
        pubsub.publish('removeListItemId',id)
      }
    },
    // 编辑
    handleEdit() {
      // 判断todo有没有 isEdit属性
      if(this.todo.hasOwnProperty('isEdit')) {
        this.todo.isEdit = true
      } else {
        console.log('todo 没有isEdit属性')
        // 添加一个属性 是响应式的
        this.$set(this.todo,'isEdit',true)
      }
      // 点击编辑的同时 让input获取焦点   setTimeout为了使功能实现,编译先后问题
      // setTimeout(() => {
      //   this.$refs.blur.focus()
      // }, 200);
      // 上面代码 vue提供方法       $nextTick 指定的回调会在demo节点更新完毕后执行
      this.$nextTick(() => {
        this.$refs.blur.focus();
      })
      
      // 添加一个属性 不是响应式的
      // this.todo.isEdit = true;
      console.log(this.todo)
    },
    // input 失去焦点  后 修改input里面的数据
    inputBlur(todo,e) {
      // this.$set(this.todo,'isEdit',false)
      todo.isEdit = false
      // 如果输入值为空 
      if(!e.target.value.trim()) return prompt('不能输入为空')
      // 第一个参数:修改的id  第二个参数:修改的input value值  发送事件 发送数据
      this.$bus.$emit('updateTodo', this.todo.id, e.target.value)
      console.log(e)
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

// 动画
.todo-enter-active {
  animation: isShow1 1s linear;
}
.todo-leave-active {
  animation: isShow1 2s reverse;
}
/* 设置动画 */
@keyframes isShow1 {
  /* 从 */
  from{
    transform: translateX(100%);
  }
  /* 到 */
  to {
    transform: translateX(0px);
  }
}
</style>