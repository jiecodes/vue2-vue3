<template>
  <div class="demo">
    <div>信息对象{{person}}</div>
    <div>x1: {{x1}}</div>
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
import {reactive, ref, toRef, toRefs, computed, watch, shallowReactive, shallowRef } from 'vue'
export default { 
  name: 'demo',
  // setup只能接收俩个参数
  setup(props,content) {
    // shallowReactive shallowRef  浅层次的响应式(只能修改一层数据)
    // let person = shallowReactive({
    let person = reactive({
      name: '张三',
      age: 12,
      job:{
        j1: {
          salary: '薪资',
        }
      },
    })

    // 基本数据类型 ref 和 shallowRef 都可以处理 基本数据类型 变为响应式的数据
    // let x1 = ref(0),
    // let x1 = shallowRef(0),
    // 对象数据类型 ref(可以使对象变为响应式的,ref内部可以调用reactive) 和 shallowRef(传入的对象就不是响应式的) 
    // let x1 = ref({x:1}),
    // console.log(x1)  value指向的是 Proxy(vue3的响应式数据)
    // let x1 = shallowRef(({x:1})),
    // console.log(x1)  value指向的是对象 所以不是响应式的


    const name1 = person.name
    console.log(name1)

    // toRef 只能处理对象一个属性
    // toRef把不是响应式的数据 转换为响应式数据  name2对象有 RefImpl{value} 而这个value值就是person.name
    const name2 = toRef(person, 'name')
    console.log(name2)

    // toRefs(返回的是一个对象) 可以处理对象的多个属性 
    const x = toRefs(person)
    console.log(x)

    return {
      x1,
      person,
      // ref 是又创建了一个person 不是修改的原来的person
      // name: ref(person.name),
      // age: ref(person.age),
      // salary: ref(person.job.j1.salary),

      name: toRef(person,'name'),
      age: toRef(person,'age'),
      salary: toRef(person.job.j1, 'salary'),

      // 用roRefs返回的是一个对象  对象里面使用对象 用... 把里面对象数据展开放到外面的对象中
      ...toRefs(person)
    }
  }
  
}
</script>

<style>

</style>