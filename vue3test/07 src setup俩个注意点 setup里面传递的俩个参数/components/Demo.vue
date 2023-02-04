<template>
  <div class="demo">
    <div>{{p.name}}</div>
    <div>{{p.age}}</div>
    <button @click="hello1">触发demo中的自定义事件hello</button>
  </div>
</template>

<script>
export default { 
  name: 'demo',
  // 接收父组件传递过来的数据  props:[] 不做类型限制
  props: ['msg','school',],
  // 接收父组件定义的自定义事件
  emits: ['hello'],
  // setup只能接收俩个参数
  setup(props,content) {
    console.log('setup----', props, content)
    console.log(content.attrs)      // attrs 当没有用props接收传过来的数据时 attrs就会接收
    console.log(content.emit)      // emit 触发父组件自定义事件
    console.log(content.slots)      // slots  插槽
    let person = {
      name : 张三,
      age : 23,
    }
    let p = reactive(person)
    // 方法
    function hello1() {
      content.emit('hello',aaa)
    }
    return {
      p,
      hello1,
    }
  }
}
</script>

<style>

</style>