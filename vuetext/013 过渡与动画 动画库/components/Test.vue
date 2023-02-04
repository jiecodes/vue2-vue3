<template>
<!-- 动画 -->
  <div class="test">
  <button @click="isShow = !isShow">隐藏切换</button>
  <transition name="hello">
    <div class="aa" v-show="isShow"> {{test}} </div>
  </transition>
  </div>
</template>

<script>
  // 导入消息订阅与发布 
  import pubsub from 'pubsub-js'

export default {
  name: 'test',
  data() {
    return {
      test:'test1',
      isShow: true
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
    // pubsub.subscribe('hello1',function(a,b) {
    //   console.log('订阅消息',a,b)
    // })
  },
  beforeDestroy() {
    // 解绑全局事件总线 hello方法
    // this.x.$off('hello')
  }
}
</script>

<style>
.aa {
  background-color: skyblue;
  margin-top: 1rem;
}
/* 开启动画 */
/* .come {
  animation: isShow1 3s;
}
.go {
  animation: isShow1 2s reverse;
} */
/* 默认 */
/* .v-enter-active {
  animation: isShow1 3s;
}
.v-leave-active {
  animation: isShow1 2s reverse;
} */
/* 加上name="hello" */
.hello-enter-active {
  animation: isShow1 3s;
}
.hello-leave-active {
  animation: isShow1 2s reverse;
}
/* 设置动画 */
@keyframes isShow1 {
  /* 从 */
  from{
    transform: translateX(-100%);
  }
  /* 到 */
  to {
    transform: translateX(0px);
  }
}
</style>