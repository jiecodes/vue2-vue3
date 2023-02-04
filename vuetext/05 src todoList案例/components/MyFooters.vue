<template>
  <!-- v-show="true"展示 false隐藏  0为false 1,2为true -->
  <div class="todoFooter" v-show="todos.length">
    <label for="finish">
    <div class="footerContainer">
      <!-- checked="true" 为勾选  选中的todo.complete为true的个数 === todos的长度 -->
      <!-- <input type="checkbox" id="finish" :checked="completeTotal === todos.length" > -->
      <!-- <input type="checkbox" id="finish" :checked="isAll" @change="checkAll" > -->
      <!-- 替换上面的 另一种方法 -->
      <input type="checkbox" id="finish" v-model="isAll" >
      <div class="finish">
        以完成<span>{{completeTotal}}</span>/
        全部<span>{{todos.length}}</span>
      </div>
    </div>
    </label>
    <button @click="clearAll">清除以完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooters',
  // 接收app.vue 的todos
  props: ['todos','checkAllTodo','clearAllTodo',],
  computed: {
    // 通过 todos里面的每一项 complete属性 为true加1 为false加0 
    completeTotal() {
      // let i = 0;
      // this.todos.forEach((todo) => {
      //   // 如果 todo.complete=true 则为真 执行后面的
      //   if (todo.complete)  i++
      // }) 
      // return i
      // 另一种方式
      // 根据数组的长度决定遍历几次,初始值是0,第一次pre就是0,第二次调用是上一次调用返回值作为pre的值,current是每一次传入的值
      const x = this.todos.reduce((pre, current) => {
        console.log('a',pre, current)
        // return pre + 1
        // current.complete 如果current.complete为true是1 为false是0
        console.log(pre + (current.complete ? 1 : 0))
        return pre + (current.complete ? 1 : 0)
      }, 0)
      return x
    },
    // 全选按钮
    // isAll() {
    //   return this.completeTotal === this.todos.length && this.todos.length > 0
    // },
    // 使用 v-model 计算属性需要全写
    isAll: {
      // 读取数据  get
      get() {
        return this.completeTotal === this.todos.length && this.todos.length > 0
      },
      // 修改数据 set
      // value 接收修改的值
      set(value) {
        console.log(value)
        this.checkAllTodo(value)
      }
    },
  },
  methods: {
    // 是否全选
    checkAll(e) {
      console.log(e.target.checked)
      // 调用app.vue中的checkAllTodo方法,  把e.target.checked中的数据传过去
      this.checkAllTodo(e.target.checked)
    },
    // 清除已选内容
    clearAll() {
      this.clearAllTodo()
    }
  }
}
</script>

<style scoped lang="scss">
.todoFooter {
  display: flex;
  justify-content: space-between;
  .footerContainer {
    display: flex;
    input {
      width: .9rem;
      height: .9rem;
      // 图片和文字 对齐方式
      vertical-align: bottom;
      position: relative;
      top: 3px;
    }

    .finish {
      position: relative;
      top: 2px;
      left: 13px;
      span {

      }
    }
  }
  button {
    background-color: rgb(207, 101, 101);
    width: 7rem;
    height: 2rem;
    color: white;
    border-color: white;
    border-radius: .3rem;
  }
}
</style>