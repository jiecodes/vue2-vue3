<template>
  <div class="school">
    <div ref="title">{{msg}}</div>
    <div>{{name}}</div>
    <div>{{sex}}</div>
    <div>{{age + 1}}</div>
    <div>修改年龄 {{myAge}}</div>
    <button @click="myAge++">点击修改 props 年龄 不能直接修改props传过来的数据 会报错</button>
  </div>
</template>

<script>
export default {
  data() {
    console.log(this)
    return {
      msg: 'school',
      myAge: this.age
    }
  },
  // 1 子props简单接收   父传子 子props接收多个数据 
  // props: ['name', 'sex', 'age']

  // 2 子props接收数据 对类型进行限制
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number,
  // }

  // 3 
  props: {
    name: {
      type: String,
      required: true, // name必须传
    },
    sex: {
      type: String,
      required: true, // age必须传
    },
    age: {
      type: Number,
      default: 99, // 默认值为99
    },
  },
}
</script>

<style>

</style>