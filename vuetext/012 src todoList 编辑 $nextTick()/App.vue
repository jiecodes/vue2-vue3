<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="todoContainer">
      <div class="todoWrap">
        <!-- 改造 @receive  子给父传递 自定义事件  -->
        <myheader @receive="receive"></myheader>
        <mylist :todos="todos" ></mylist>
        <!-- footers 想要知道有几个完成,全部有几个 必须获取todos,把todos传到footers -->
        <myfooters :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></myfooters>
      </div>
    </div>
  </div>
</template>

<script>
// 消息订阅与发布 导入库
import pubsub from 'pubsub-js'

// 导入子组件
import myfooters from './components/MyFooters.vue'
import myheader from './components/MyHeader.vue'
import mylist from './components/MyList.vue'

export default {
  name: 'App',
  components: {
    myfooters,
    myheader,
    mylist,
  },
  data() {
    console.log(this)
    return {
      // 把todos对象 通过mylist标签 传递给MyList.vue  MyList.vue通过props接收
      // todos: [
      //   {id: '001', title: 'aa', complete: true,},
      //   {id: '002', title: 'bb', complete: false,},
      //   {id: '003', title: 'cc', complete: true,},
      // ],
      // 数据
      // todos: [],
      // 读取存储的到sessionStorage的数据  转换为 js对象   || 解决报错:如果前面有数据就用前面的没有就用[] 
      todos: JSON.parse(window.sessionStorage.getItem('todos'))  || []
    }
  },
  watch: {
    // 简便写法:修改todos里面的属性 watch监视不到,只能监视第一层对象, 如果想监视todos里面属性的变化,使用深度监视,写完整watch
    // value是: todos发生变化 value就是最新的todos  装换为字符串
    // todos(value) {
    //   window.sessionStorage.setItem('todos', JSON.stringify(value))
    // }
    // 完整写法
    todos: {
      deep: true,   // 可以监听多层级数据改变
      handler(value) {
        window.sessionStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  methods: { 
    // 添加一个todo对象  把这个方法传递给 子组件 myhander.vue
    receive(todoObj) {
      console.log(todoObj)
      // a就是 接收到的 myheader.vue 创建的对象  把a添加到todos数组中
      this.todos.unshift(todoObj)
    },
    // 点击勾选按钮 修改vue数据中的 complete为true或者false 方法传递: app.vue->list.vue->listitem.vue
    checkTodo(id) {
      this.todos.forEach((todo)=> {
        // 如果传入的id和遍历出来的其中一个id一样 则把complete中的布尔值取反
        if (todo.id === id) todo.complete = !todo.complete
      })
    },
    // app.vue->list.vue->listitem.vue    msgName形参是为了,消息发布与订阅服务
    removeListItemId(msgName,id) {
      this.todos = this.todos.filter((todo) => {
        // 过滤出来的值   接收到的id值, return 与接收到的id值不匹配的多个值
        return todo.id !== id
      })
      // 简写
      // this.todos.filter( todo => todo.id !== id)
    }, 
    // 是否全选 
    checkAllTodo(complete) {
      this.todos.forEach(todo => {
        todo.complete = complete
      })
    },
    // 清除已选内容
    clearAllTodo() {
      if (confirm('确定吗')) {
      // prompt("Enter your website address", "http://");
        this.todos = this.todos.filter(todo => {
        // 返回 todo.complete 为true的值 为true的值再组成todos数组
        console.log(todo.complete)
          
          // prompt("Enter your website address", "h//");
          return !todo.complete
        })
      }
    },
    // 失去焦点 修改input里面的值
    updateTodo(id,value) {
      this.todos.forEach(todo => {
        if (todo.id === id) todo.title = value 
      })
    }
  },
  mounted() {
    // 事件总线
    this.$bus.$on('checkTodo',this.checkTodo)
    // this.$bus.$on('removeListItemId',this.removeListItemId)

    // 失去焦点 修改input里面的值 接收方法 接收数据
    this.$bus.$on('updateTodo', this.updateTodo)

    // 消息订阅与发布 接收数据 发送方法
    this.pubId = pubsub.subscribe('removeListItemId',this.removeListItemId)


  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('removeListItemId')

    // 销毁 消息订阅与发布
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style lang="scss">
.todoContainer {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  .todoWrap {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: .4rem;
    // .todoHeader {
    //   padding-bottom: 1rem;
    //   input {
    //     width: 30vw;
    //     height: 1.8rem;
    //     padding-left: .5rem;
    //     outline: none;    // 取消 点击边框加粗
    //     border-color: none;
    //     border-color: rgb(85, 85, 231);
    //   } 
    //   input:focus {
    //     outline: none;
    //     border-color: rgba(82, 168, 236, 0.8);
    //     box-shadow: inset 0 1px 1px □rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)
    //   } 
    // }

    // .todoList {
    //   padding-bottom: 1rem;
    //   border-top: 1px solid #ccc;
    //   .todoListItem {
    //     display: flex;
    //     justify-content: space-between;
    //     padding: .4rem .5rem;
    //     border: 1px solid #ccc;
    //     border-top: none;
    //     input:nth-child(1) {
    //       // 图片和文字 对齐方式
    //       vertical-align: middle;
    //       width: .9rem;
    //       height: .9rem;
    //     }
    //     input:nth-child(2) {
    //       border: none;
    //       outline: none;
    //     } 
    //   }
    // }

    // .todoFooter {
    //   display: flex;
    //   justify-content: space-between;
    //   .footerContainer {
    //     display: flex;
    //     input {
    //       width: .9rem;
    //       height: .9rem;
    //       // 图片和文字 对齐方式
    //       vertical-align: bottom;
    //     }

    //     .finish {
    //       position: relative;
    //       top: -1px;
    //       left: 13px;
    //       span {

    //       }
    //     }
    //   }
    //   button {
    //     background-color: rgb(216, 11, 11);
    //     width: 7rem;
    //     height: 2rem;
    //     color: white;
    //     border-color: white;
    //     border-radius: .3rem;
    //   }
    // }
  }
}

</style>
