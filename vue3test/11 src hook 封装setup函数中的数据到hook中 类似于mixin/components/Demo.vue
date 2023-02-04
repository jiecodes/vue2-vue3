<template>
  <div id="demo">
    求和{{sum}}
    <button @click="addSum">加1</button>
    <div>当前鼠标的x:{{point.x}} y:{{point.y}}</div>
  </div>
</template> 

<script>
// 导入 vue3生命周期钩子 创建前后的生命周期钩子放到了setup函数中,其他的钩子其前面加上on 写在setup中
import {ref,reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,} from 'vue'

// 导入hooks文件
import usePoint from '../hooks/usePoint'

export default {
  name: 'demo',
  // setup第一次执行的比beforeCrate早
  setup() {
    let sum = ref(0)

    // 使用 导入hooks文件
    let point = usePoint()

    // 把和 移动鼠标事件 相关的 数据 方法 生命周期函数 都移入 hooks中
    // let point = reactive({
    //   x: 0,
    //   y: 0,
    // })
    
    function addSum() {
      sum++
    };
    // 把页面点击事件 抽离出来
    // function savePoint(event) {
    //   console.log(event.pageX, event.pageY)
    //   point.x = event.pageX
    //   point.y = event.pageY
    // }
    // // 页面加载完毕 生命周期函数
    // onMounted( () => {
    //   // window.addEventListener('click',(event) =>{
    //   //   console.log(event.pageX, event.pageY)
    //   //   point.x = event.pageX
    //   //   point.y = event.pageY
    //   // })
    //   // 上面另一种写法
    //   window.addEventListener('click', savePoint)  
    // })

    // // 页面卸载之前 移除点击
    // onBeforeUnmount( () => {
    //   window.removeEventListener('click',savePoint)
    // })

    return {
      sum,
      addSum,
      point,
    }
  }
}
</script>

<style>

</style>