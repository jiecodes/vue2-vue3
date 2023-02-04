<template>
  <div class="school">
    <div> {{school}} </div>
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
    
  },
  mounted() {
    this.x.$on('hello',(data)=> {
      console.log('school 收到了student数据',data)
    })
  },
  beforeDestroy() {
    // 解绑全局事件总线 hello方法
    this.x.$off('hello')
  }
}
</script>

<style>
.school {
  background-color: skyblue;
  margin-bottom: 1rem;
}
</style>