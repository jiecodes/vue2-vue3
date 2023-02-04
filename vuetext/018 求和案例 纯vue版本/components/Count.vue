<template>
  <div class="count" >
    <div v-model="number">数字和{{sum}}</div>
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
export default {
  name: 'Count',
  data() {
    return {
      number: 1,
      sum: 0,
    }
  },
  methods: {
    increment() {
      // this.sum = this.number + this.sum
      this.sum += this.number
    },
    decrement() {
      // this.sum = this.sum - this.number
      this.sum -= this.number

    },
    incrementOdd() {
      // this.sum % 2 取余可以整除2 就是0 0为false不执行 不能整除2 就是1 1为true执行
      if (this.sum % 2) {
        this.sum += this.number
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.number
      }, 500);
    },
  }
}
</script>

<style scoped lang="scss">
  .count button:nth-child(n+1), select {
    margin-right: 5px !important; 
  }
  
</style>