<template>
  <div class="demo">
    <div>求和{{sum}}</div>
    <button @click="addSum">+1</button>
    
    <div>当前信息{{msg}}</div>
    <button @click="changeMsg">修改信息</button>

    <div>姓名: {{person.name}}</div>
    <div>年龄: {{person.age}}</div>
    <button @click="person.name += 'a'">修改姓名</button>
    <button @click="person.age += 2">修改年龄</button>

    <div>薪资 {{person.job.j1.salary}}</div>
    <button @click="person.job.j1.salary += 1">增长薪资</button>
  </div>
</template>

<script>
import {reactive, ref, computed, watch, } from 'vue'
export default { 
  name: 'demo',
  // 监视  vue2
  watch: {
    // 简单写法
    // sum(newValue, oldValue) {
    //   console.log('sum的值监听到了',newValue, oldValue)
    // }
    // 完整写法
    sum: {
      immediate: true,  // 页面启动后 立即监听一下
      deep: true,       // 深度监视
      handler(newValue, oldValue) {
        console.log('sum的值监听到了',newValue, oldValue)
      }
    }
  },
  // setup只能接收俩个参数
  setup(props,content) {
      // slots  插槽
    let sum = ref(0)
    let msg = ref('你好啊')
    // 解决: watch监听 reactive函数 无法正确获取oldValue的值
    // let age = ref(12)
    let person = reactive({
      name: '张三',
      age: 12,
      job:{
        j1: {
          salary: '薪资',
        }
      },
    })
    function addSum() {
      sum++;
    };
    function changeMsg() {
      msg = msg + '!'
    };

    // vue3 监视  
    // ref监视 :注意: 1 watch监视ref基本数据 不需要写sum.value 这样就监听不到了 写sum监听的是 refImpl{...}
    //         2 watch监听ref对象数据 需要写sum.value(本质是: 不在监视ref定义的数据了,而是ref里面属性求助reactive所定义的数据) 就可以监听到了
    //         3 watch监听ref对象数据 不写sum.value 还可以通过 添加深度监视,监视到 deep
    // 1 监视ref所定义的 一个 响应式数据
    // watch(sum,(newValue, oldValue)=> {
    //   console.log('sum监听到了',newValue,oldValue)
    //   // immediate 开始时执行一次  deep 深度监视
    // }, {immediate: true, deep: true,})
    // 2 监视ref所定义的 多个 响应式数据
    // watch([sum, msg],(newValue, oldValue)=> {
    //   console.log('sum,msg监听到了',newValue,oldValue)
    // })
    // 3 监视reactive所定义的一个响应式数据的 全部属性
    //    注意: 1 此处无法正确获取 oldValue(获取的是新的数据) 解决: 把 age=12放到外面
    //          2. 强制开启了 deep(深度监视, 可以监视对象多层次的数据变化)
    // watch(person,(newValue,oldValue)=> {
    //   console.log('person 修改了',newValue,oldValue)
    // })
    // 4 监视reactive所定义的一个响应式数据的 某个属性
    // watch(() => person.age,(newValue,oldValue)=> {
    //   console.log('person的age 修改了',newValue,oldValue)
    // })
    // 5 监视reactive所定义的一个响应式数据的 某些属性
    // watch([() => person.age,() => person.name],(newValue,oldValue)=> {
    //   console.log('person的age和name 修改了',newValue,oldValue)
    // })
    // 6 特殊情况 监视reactive所定义的一个响应式数据的 对象里面的数据 监视不到:加上 {deep:true}
    // watch(()=> person.job, (newValue,oldValue)=> {
    //   console.log('person的job修改了',newValue,oldValue)
    // },{deep:true})   // 监视reactive函数里面的对象的属性值还是对象 就必须开启deep 深度监视


    // watchEffect函数  所指定的回调中用到的数据只要发生变化，则直接重新执行回调。 智能(你用谁我监视谁)
    watchEffect(() => {
      const x1 = sum.value
      const x2 = person.job.j1.salary
      console.log('watchEffect函数指定的回调调用了')
    })

    return {
      sum,
      msg,
      person,
      addSum,
      changeMsg,
    }
  }
  
}
</script>

<style>

</style>