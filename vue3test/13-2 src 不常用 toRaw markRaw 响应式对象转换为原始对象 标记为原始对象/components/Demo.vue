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

    <button @click="showRawPerson">输出最原始的person</button>

    <!-- toRaw markRaw 展示 -->
    <div v-show="person.car">{{person.car}}</div>
    <button @click="addCar">添加一台车的数据</button>
    vue3 通过 preson.car = {} 添加的数据是响应式的 <br>
    <button @click="person.car.name = '奔驰1'">换车名</button>
    <button @click="person.car.price = '111'">换车价格</button>
  </div>
</template>

<script>
import {reactive, ref, toRef, toRefs, computed, watch, shallowReactive, shallowRef, readonly, shallowReadonly, toRaw, markRaw,   } from 'vue'
export default { 
  name: 'demo',
  // setup只能接收俩个参数
  setup(props,content) {
    // shallowReactive shallowRef  浅层次的响应式(只能修改一层数据) 
    // let person = shallowReactive({
    let sum = ref(0)
    // person 通过 reactive创建的响应式数据 添加任何一个属性(car)都是响应式的 car里面的属性修改也是响应式的 
    let person = reactive({
      name: '张三',
      age: 12,
      job:{
        j1: {
          salary: '薪资',
        }
      },
    }) 
    // toRaw 把响应式数据 转换为原始(未加工)数据 原始object对象   注意: 只能处理reactive函数 不能处理ref函数,返回的是undefined
    // markRaw 标记为原始数据 使其不会成为响应式对象
    function showRawPerson() {
      let p = toRaw(person)
      console.log(p)
    };
    function addCar() {
      let car = {car: '奔驰', price: '40w',}
      // 把一个 object对象 添加到reactive创建的person响应式对象中 添加的数据(car)也是响应式的
      // person.car = car
      // car添加后是响应式的数据     通过markRaw函数 变为不是响应式的数据
      person.car = markRaw(car)
    }

    return {
      sum,
      person,       //...toRefs(person)添加car不会重新执行 但是person是响应式对象 person里面的值发生变化 person就会重新执行 插值表达式{{person.car}}  

      // 用roRefs返回的是一个对象  对象里面使用对象 用... 把里面对象数据展开放到外面的对象中
      ...toRefs(person),      // toRefs 添加一个属性 car 不会重新执行 如果...toRefs(person)重新执行 就必须setup重新执行

      showRawPerson,
      addCar,
    }
  }
  
}
</script>

<style>

</style>