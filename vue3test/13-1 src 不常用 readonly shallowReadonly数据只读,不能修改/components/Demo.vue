<template>
  <div class="demo">
    <div>{{sum}}</div>
    <button @click="sum++">加一</button>
    <div>姓名: {{person.name}}</div>
    <div>年龄: {{person.age}}</div>
    <button @click="person.name += 'a'">修改姓名</button>
    <button @click="person.age += 2">修改年龄</button>

    <div>薪资 {{person.job.j1.salary}}</div>
    <button @click="person.job.j1.salary += 1">增长薪资</button>

    <!-- 在 return中使用了 toRef 后 -->
    <div>姓名: {{name}}</div>
    <div>年龄: {{age}}</div>
    <div>薪资 {{salary}}</div>
  </div>
</template>

<script>
import {reactive, ref, toRef, toRefs, computed, watch, shallowReactive, shallowRef, readonly, shallowReadonly } from 'vue'
export default { 
  name: 'demo',
  // setup只能接收俩个参数
  setup(props,content) {
    // shallowReactive shallowRef  浅层次的响应式(只能修改一层数据)
    // let person = shallowReactive({
    let sum = ref(0)
    let person = reactive({
      name: '张三',
      age: 12,
      job:{
        j1: {
          salary: '薪资',
        }
      },
    })

    // readonly 把ref、reactive出来的person响应式数据 转变为不允许修改的数据 用readonly加工出来的person覆盖了reactive定义的person
    // person = readonly(person)
    // shallowReadonly   不能修改ref、reactive出来的函数浅层次的数据 只能修改深层次的数据
    person = shallowReadonly(person)

    return {
      sum,
      person,
      // ref 是又创建了一个person 不是修改的原来的person
      // name: ref(person.name),
      // age: ref(person.age),
      // salary: ref(person.job.j1.salary),

      name: toRef(person,'name'),
      age: toRef(person,'age'),
      salary: toRef(person.job.j1, 'salary'),

      // 用roRefs返回的是一个对象  对象里面使用对象 用... 把里面对象数据展开放到外面的对象中
      // ...toRefs(person)
    }
  }
  
}
</script>

<style>

</style>