<template>
  <div class="persons">
    <div> Count.vue组件中的和 {{sum}}</div>
    <input type="text" @keyup.enter="addPerson" v-model="name">
    <!-- <ul v-for="person in $store.state.personsList" :key="person.id"> -->
      <!-- 计算属性 -->
    <ul v-for="person in personsList" :key="person.id">
      <li>{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
// 导入 唯一id值 库
import { nanoid } from 'nanoid'
import { mapState } from 'vuex'
  export default {
    name: 'Persons',
    data() {
      return {
        name: '',   // 用户输入值
      }
    },
    computed: {
      // personsList() {
      //   return this.$store.state.personsList
      // }
      // mapState 代替 this.$store.state.   1作为计算属性,2作为state中的数据
      ...mapState({personsList: 'personsList', sum: 'sum',})
    },
    methods: {
      // 回车 添加一个用户
      addPerson() {
        // 1 创建一个用户对象
        const personsList = {id: nanoid(), name:this.name }
        console.log(personsList)
        // 2 把数据通过方法传给vuex 给 vuex 发送 mutations方法
        this.$store.commit('addPerson1',personsList)
      }
    }
  }
</script>

<style scoped>
.persons {
  margin-top: 1rem;
}
input {
  outline: none;
}

</style>