<template>
  <!-- vue3组件中的模板结构可以没有跟标签 -->
  <div id="app">
    <div>信息</div>
    <!-- 这里name通过 ref自动读取value值 不用手动name.value  实现响应式 -->
    <p>{{name}}</p>
    <p>{{age}}</p>
    <button @click="sayHello">说hello</button>
    <button @click="changeInfo">修改个人信息</button>
  </div>
</template>

<script>
// 导入渲染函数 h函数   响应式函数 ref函数
import {h, ref} from 'vue'

export default {
  name: 'app',
  // 测试  在vue3不建议使用vue2的数据和方法
  setup() {
    // 数据
    // let name = 'zs';
    // let age = 12;
    // 通过ref函数 修改为响应式的数据
    let name = ref('zs');
    let age = ref(12);

    // 方法
    function sayHello() {
      console.log('hello')
      console.log(`我是${name},${age}岁,说了hello`)
    };
    function changeInfo() {
      // name = 'ls';
      // age = 11;
      // 数据修改了 但是页面没修改 不是响应式的 解决: 通过ref函数 使用ref函数后 数据变成了对象 RefImpl
      // RefImpl -> reference引用 implement实现 简称:引用对象
      // vue2 通过 Object.defineprototype 配合getter setter完成响应式
      // vue3 通过 refImpl对象 修改对象里面的 value值
      console.log(name, age)
      // 响应式的修改 借助 ref函数
      name.value = 'ls';
      age.value = 11;
    }
    

    // 返回数据 对象
    return {
      name: name,
      age,
      sayHello,
      changeInfo,
    }

    // 返回一个 渲染函数  写这个函数 template模板的内容都会被替换掉
    // return () => h('h1','nihao')
  }
}
</script>

<style>

</style>