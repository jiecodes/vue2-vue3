<template>
  <!-- vue3组件中的模板结构可以没有跟标签 -->
  <div id="app">
    <div>信息</div>
    <!-- 这里name通过 ref自动读取value值 不用手动name.value  实现响应式 -->
    <p>{{name}}</p>
    <p>{{age}}</p>
    <p>{{job.type}}</p>
    <p>{{job.salary}}</p>
    <button @click="sayHello">说hello</button>
    <button @click="changeInfo">修改个人信息</button>
  </div>
</template>

<script>
// 导入渲染函数 h函数   基本类型响应式函数 ref函数   对象类型响应式函数 reactive函数(基本类型用ref)
import {h, ref, reactive} from 'vue'

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
    // let job = ref({
    //   type: '工作',
    //   salary: '工资',
    // })
    
    // 对象类型响应式函数 reactive函数(基本类型用ref)
    let job = reactive({
      type: '工作',
      salary: '工资',
    })
    let hobby = reactive(['学习','唱歌'])

    // 方法
    function sayHello() {
      console.log('hello')
      console.log(`我是${name},${age}岁,说了hello`)
    };

    // 把上面的都写入对象中
    // let person = {
    //   name = 'zs',
    //   age = 12,
    //   job: reactive({
    //     type: '工作',
    //     salary: '工资',
    //   }),
    //   hobby: ['学习','唱歌']
    // } 
    // let p = reactive(person)

    // 上面简写
    // let person = reactive({
    //   name = 'zs',
    //   age = 12,
    //   job: reactive({
    //     type: '工作',
    //     salary: '工资',
    //   }),
    //   hobby: ['学习','唱歌']
    // })
    // 页面显示
    // {{person.name}}
    // 修改
    person.name = 'ls';
    person.age = 11;
    person.job.type = '工作1';
    person.hobby[0] = '学习1';

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
      // 借助ref函数 响应式修改数据对象
      console.log(job.value)    // 数据在 Proxy对象上 reactive函数
      // 修改对象
      job.value.type = '工作1';
      job.value.salary = '工资1'
      // 修改数组   vue2通过数组索引修改不是响应式的(object.defineProperty) vue3通过数组索引修改是响应式的(Proxy)
      hobby[0] = '学习1';
    }
    

    // 返回数据 对象
    return {
      name: name,
      age,
      job,
      sayHello,
      changeInfo,
      hobby,

      person
    }

    // 返回一个 渲染函数  写这个函数 template模板的内容都会被替换掉
    // return () => h('h1','nihao')
  }
}
</script>

<style>

</style>