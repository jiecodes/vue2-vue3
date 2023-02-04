<template>
  <div class="childSon">
    孙组件
    <div>展示app.vue 父组件 传递过来的数据 {{car.name}}--{{car.price}}</div>
  </div>
</template>

<script>
import {inject} from 'vue'

export default {
  name: 'childSon',
  setup() {
    // 注入  接收通过 provide 传递过来的数据    参数: 接收传递过来的自定义名字
    let car = inject('car')
    console.log(car)
    return {car}
  }
}
</script>

<style>

</style>