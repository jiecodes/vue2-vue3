<template>
  <div class="todoHeader">
    <!-- 获取输入的数据
    1 event.target.value
    2 v-model="title"  data() {return { title: ''}} console.log(this.title) -->
    <input type="text" placeholder="输入内容 按回车确认"  @keyup.enter="add">
  </div>
</template>

<script>
// 导入 唯一id值 库
import { nanoid } from 'nanoid'
export default {
  name: 'MyHeader',
  data() {
    return {
      // title: '',
    }
  },
  // 接收父组件app.vue 传递过来的方法 接收过来的方法(receive)在vue组件实例对象上(myheader.vue) vue实例对象和vue组件实例对象都可以用
  props: ['receive'],
  methods: {
    add(event) {
      // 输入内容可以添加 没有输入内容不能添加    event.target.value 有值为false false取反为true 则return   
      if (!event.target.value.trim()) return prompt("Enter your website address", "http://");
      // 获取输入的数据
      console.log(event.target.value)
      // event.target.value 为空就是 true
      console.log(event.target.value === '')
      // console.log(this.title)
      // 点击添加数据 1 先创建一个添加的对象   将输入的数据 包装成为一个todo对象
      const todoObj = {id: nanoid(), title: event.target.value, complete: false }
      console.log(todoObj)
      // 使用父组件(app.vue) 传递过来的方法 并且把创建的todoObj对象传递到app.vue组件上
      this.receive(todoObj)
      // 清空 value值 input输入框值
      event.target.value = null
    }
  }
}
</script>

<style scoped lang="scss">
  .todoHeader {
      padding-bottom: 1rem;
      input {
        width: 30vw;
        height: 1.8rem;
        padding-left: .5rem;
        outline: none;    // 取消 点击边框加粗
        border-color: none;
        // 修改边框颜色 取消原先黑框
        border: 1px solid #ccc;
      } 
      input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 10px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)
      }
    }
</style>