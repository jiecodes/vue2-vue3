<template>
  <!-- vue3组件中的模板结构可以没有跟标签 -->
  <div id="app">
    <div>信息</div>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <button @click="sayHello">说hello</button>
  </div>
</template>

<script>
// 导入渲染函数
import {h} from 'vue'

export default {
  name: 'app',
  // 测试  在vue3不建议使用vue2的数据和方法
  setup() {
    // 数据
    let name = 'zs';
    let age = 12;

    // 方法
    function sayHello() {
      console.log('hello')
      console.log(`我是${name},${age}岁,说了hello`)
    }

    // 返回数据 对象
    return {
      name: name,
      age,
      sayHello
    }

    // 返回一个 渲染函数  写这个函数 template模板的内容都会被替换掉
    // return () => h('h1','nihao')
  }
}
</script>

<style>

</style>