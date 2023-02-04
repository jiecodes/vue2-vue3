<template>
  <div class="demo">
    <input type="text" v-model="text">
    <h3>{{text}}</h3>
  </div>
</template>

<script>
import {ref, customRef} from 'vue'

export default {
  setup() {
    // let text = ref('hello') // 使用vue提供的ref

    function myRef(value, delay) {   // 自定义的ref函数    value是初始值 开始传入的是hello delay自己传入定时器时间
      let timer 
      const x = customRef( (track, trigger) => {   // 通过 customRef 自定义的ref函数
        // return 语法要求
        return {
          get: function () {
            // return 100
            track()       // 4 追踪value数据的变化
            return value  // 3
            console.log(`在myRef读取数据,我把${value}交出去了`)   // 读取俩次   <input type="text" v-model="text">  <h3>{{text}}</h3>
          },
          // newValue 修改后的新值
          set: function (newValue) {
            console.log(`在myRef修改数据,我把${newValue}修改了`)   // 读取俩次   <input type="text" v-model="text">  <h3>{{text}}</h3>
            clearTimeout(timer)   // 如果执行定时器 先清除之前定时器 作用:点的过块(防抖:不点了就出现结果)
            // 一秒后数据出现
            timer = setTimeout(() => {
              // 1 初始值 修改为 新值 
              value = newValue
              trigger()     // 2 触发  通知vue重新解析模板
            // }, 1000);
            }, delay);
          }
        }
      })  
      // 把定义的x交出去   
      return x

      // 简写 
      return customRef(() => {})
    }
    let text = myRef('hello',1000)  // 自定义的ref函数   

    return {text,}
  }
}
</script>

<style>

</style>