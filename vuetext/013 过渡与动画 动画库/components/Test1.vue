<template>
<!-- 过渡 -->
  <div class="test1">
  <button @click="isShow = !isShow">隐藏切换</button>
  <transition name="hello">
    <div class="aa" v-show="isShow"> {{test}} </div>
  </transition>
  多个过渡元素  appear 开始运行一次 transition-group配上key值
  <transition-group name="hello" appear>
    <div key="a1" class="aa" v-show="isShow"> {{test}} </div>
    <div key="a2" class="aa" v-show="isShow"> {{test}} </div>
  </transition-group>
  
  </div>
</template>

<script>
  // 导入消息订阅与发布 
  import pubsub from 'pubsub-js'

export default {
  name: 'test1',
  data() {
    return {
      test:'test2过渡',
      isShow: true
    }
  },
  methods: {
     
  },
}
</script>

<style>
.aa {
  background-color: skyblue;
  margin-top: 1rem;
  transition: 1s linear;
}
/* 进入的起点 */
.hello-enter {
  transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to {
  transform: translateX(0)
}

/* 离开的起点 */
.hello-leave {
  transform: translateX(0);
}
/* 离开的终点 */
.hello-leave-to {
  transform: translateX(-100%);
}

</style>