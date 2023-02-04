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
    <!-- <div>展示Persons.vue 有几个人 {{this.$store.state.personsList.length}}</div> -->
    <!-- mapState 计算属性 -->
    <div>展示Persons.vue 有几个人 {{personsList.length}}</div>
    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(number)">增量</button>
    <!-- 配合 mapMutations 数组方法 -->
    <!-- <button @click="increment1(number)">增量</button> -->
    <button @click="decrement(number)">减量</button>
    <!-- 配合 mapActions 数组方法 -->
    <!-- <button @click="decrement1(number)">减量</button> -->
    <button @click="incrementOdd(number)">当前和为 奇数增量</button>
    <button @click="incrementWait(number)">等等 再加</button>
  </div>
</template>

<script>
// 单个导入 mapState  
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

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
    // ... 解构赋值 把对象里面的键值对 添加到computed中   使用mapState简化 this.$store.state 对象方法
    // ...mapState({sum:"sum", school:"school",subject:"subject"}),
    // 简写   'sum'俩个用途 1作为计算属性,2作为state中的数据  数组方法
    ...mapState(['sum','school','subject','personsList']),


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
    // increment() {
    //   // 派遣 方法到 vuex
    //   // this.$store.dispatch('increment1',this.number)
    //   // 直接通过 mutations 绕过 actions
    //   this.$store.commit('increment1',this.number)
    // },
    // 借助 mapMutations 处理mutations里面的方法     省略 this.$store.commit
    // 传递参数另一种方法
    // increment() {
    //   this.increment(this.number)
    // },
    ...mapMutations({increment: 'increment1',}),    // 这样传递的数据就是 event(默认传递的事件)  传递值 可以从方法名传递 increment(number)
    // ...mapMutations(['increment1']),      // 数组方法 修改方法名

    decrement() {
      this.$store.dispatch('decrement1',this.number)
    },
    incrementOdd() {
      this.$store.dispatch('incrementOdd1',this.number)
    },
    incrementWait() {
      this.$store.dispatch('incrementWait1',this.number)
    },
    // 借助 mapActions 处理Actions里面的方法    这样传递的数据就是 event(默认传递的事件)  传递值 可以从方法名传递 increment(number)
    ...mapActions({decrement:'decrement1', incrementOdd:'incrementOdd1', incrementWait:'incrementWait1'})
    // ...mapActions(['decrement1', 'incrementOdd1', 'incrementWait1'])     // 数组写法 修改方法名
  },
  mounted() {
    // 组件实例对象 vc 有了 $store
    console.log('count',this)
    // 前面的 "sum" 双引号可以省略 加载时 浏览器会添加
    // const x = mapState({"sum":"sum", "school":"school","subject":"subject"})
    const x = mapState({sum:"sum", school:"school",subject:"subject",})
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