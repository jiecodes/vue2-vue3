<template>
  <div class="school">
    <div> {{school}} </div>
  </div>
</template>

<script>
  // 导入消息订阅与发布 
  import pubsub from 'pubsub-js'

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
    // 事件总线
    // this.x.$on('hello',(data)=> {
    //   console.log('school 收到了student数据',data)
    // })

    // 消息订阅与发布 导入库方法   订阅消息 接收数据
    pubsub.subscribe('hello1',function(a,b) {
      console.log('订阅消息',a,b)
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