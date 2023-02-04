<template>
  <div class="count" >
    <!-- <div v-model="number">数字和{{sum}}</div> -->
    <!-- vuex方法 -->
    <!-- <div v-model="number">数字和{{$store.state.sum}}</div> -->
    <!-- <div v-model="number">数字10倍和{{$store.state.sum * 10}}</div> -->
    <!-- getters -->
    <!-- <div v-model="number">数字10倍和{{$store.getters.tenDouble}}</div>
    <div>{{$store.state.school}},{{$store.state.subject}}</div> -->

    <!-- 计算属性 -->
    <div v-model="number">数字和{{sum}}</div>
    <!-- <div v-model="number">数字10倍和{{$store.state.sum * 10}}</div> -->
    <!-- getters -->
    <div v-model="number">数字10倍和{{tenDouble}}</div>
    <div>{{school}},{{subject}}</div> 
    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">增量</button>
    <button @click="decrement">减量</button>
    <button @click="incrementOdd">当前和为 奇数增量</button>
    <button @click="incrementWait">等等 再加</button>
  </div>
</template>

<script>
// 单个导入 mapState  
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'Count',
  data() {
    return {
      number: 1,
    }
  },
  computed: {
    // 使用 mapState省略 this.$store.state 
    // sum() {
    //   return this.$store.state.sum
    // },
    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },
    // ... 解构赋值 把对象里面的键值对 添加到computed中   使用mapState简化 this.$store.state
    // ...mapState({sum:"sum", school:"school",subject:"subject"}),
    // 简写   'sum'俩个用途 1作为计算属性,2作为state中的数据 读取state中的数据
    ...mapState(['sum','school','subject']),


    // tenDouble() {
    //   return this.$store.getters.tenDouble
    // },
    // 使用mapGetters简化 this.$store.getters
    // ...mapGetters({tenDouble: 'tenDouble'})
    // 简写
    ...mapGetters(['tenDouble'])
  },
  methods: {
    // increment() {
    //   // this.sum = this.number + this.sum
    //   this.sum += this.number
    // },
    // decrement() {
    //   // this.sum = this.sum - this.number
    //   this.sum -= this.number

    // },
    // incrementOdd() {
    //   // this.sum % 2 取余可以整除2 就是0 0为false不执行 不能整除2 就是1 1为true执行
    //   if (this.sum % 2) {
    //     this.sum += this.number
    //   }
    // },
    // incrementWait() {
    //   setTimeout(() => {
    //     this.sum += this.number
    //   }, 500);
    // },

    // 借助vuex
    increment() {
      // 派遣 方法到 vuex
      // this.$store.dispatch('increment1',this.number)
      // 直接通过 mutations 绕过 actions
      this.$store.commit('increment1',this.number)
    },
    decrement() {
      this.$store.dispatch('decrement1',this.number)
    },
    incrementOdd() {
      this.$store.dispatch('incrementOdd1',this.number)
    },
    incrementWait() {
      this.$store.dispatch('incrementWait1',this.number)
    },
  },
  mounted() {
    // 组件实例对象 vc 有了 $store
    console.log('count',this)
    // 前面的 "sum" 双引号可以省略 加载时 浏览器会添加
    // const x = mapState({"sum":"sum", "school":"school","subject":"subject"})
    const x = mapState({sum:"sum", school:"school",subject:"subject"})
    console.log(x)
  }
}
</script>

<style scoped lang="scss">
  .count button:nth-child(n+1), select {
    margin-right: 5px !important; 
  }
  select {
    width: 40px;
  }
  
</style>