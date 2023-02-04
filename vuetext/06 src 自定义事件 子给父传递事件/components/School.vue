<template>
  <div class="school">
    <div> {{school}} </div>
    <button @click="sendSchoolName">点击 app接收school名字</button>
    <button @click="unbind">解绑 自定义事件(app.vue身上的) customEvent,customEvent1 </button>
    <button @click="destroy">销毁school 组件实例对象</button>
  </div>
</template>

<script>
export default {
  name: 'school',
  data() {
    return {
      school:'school1',
    }
  },
  methods: {
    sendSchoolName() {
      // 触发 父组件 定义的 自定义事件(customEvent)  传递参数(this.school)
      this.$emit('customEvent',this.school,11,222,33)
      this.$emit('customEvent1')
      this.$emit('click')
    },
    unbind() {
      // this.$off('customEvent') // 解绑一个自定义事件
      this.$off(['customEvent','customEvent1']) // 解绑多个自定义事件
      // this.$off()                       // 解绑所有自定义事件
    },
    destroy() {
      this.$destroy()     // 组件的实例对象销毁后 组件的自定义事件也销毁了
    }
  }
}
</script>

<style>
.school {
  background-color: skyblue;
  margin-bottom: 1rem;
}
</style>