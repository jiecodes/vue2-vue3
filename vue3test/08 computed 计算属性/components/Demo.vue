<template>
  <div class="demo">
    姓<input type="text" v-model="person.firstName">
    <br>
    名<input type="text" v-model="person.lastName">
    全名 <div>{{fullName}}</div>
    全名 <input type="text" v-model="person.fullName">
  </div>
</template>

<script>
import {reactive, computed, } from 'vue'
export default { 
  name: 'demo',
  // vue2计算属性
  computed: {
    fullName() {
      return this.person.firstName + '-' + this.person.lastName
    }
  },
  // setup只能接收俩个参数
  setup(props,content) {
      // slots  插槽
    let person = {
      firstName : 张,
      lastName : 三,
    }
    let p = reactive(person)
    // vue3计算属性: 
    // 计算属性-简写 只能读,不能修改 (没有考虑计算属性被修改的情况)
    person.fullName = computed(() => {
      return person.firstName + '-' + person.lastName
    })
    // 计算属性-完整写法 可读可修改
    person.fullName = computed({
      // 读取
      get() {
        return person.firstName + '-' + person.lastName
      },
      // 修改
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      },
    })



    return {
      p,
    }
  }
}
</script>

<style>

</style>