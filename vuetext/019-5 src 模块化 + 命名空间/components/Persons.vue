<template>
  <div class="persons">
    <div> Count.vue组件中的和 {{sum}}</div>
    <div> 列表中第一个人的名字{{firstPersonName}}</div>
    <input type="text" @keyup.enter="addPerson" v-model="name">
    <button @click="addWang">添加姓王的人</button>
    <button @click="addServer">添加服务器名字</button>
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
      ...mapState({personsList: 'personsList', sum: 'sum',}),

      // store 模块化 获取state中的countAbout里面的数据
      personsList() {
        return this.$store.state.personAbout.personsList
      },
      sum() {
        return this.$store.state.countAbout.sum
      },
      firstPersonName() {
        // 读取对象的属性 getters['属性']
        return this.$store.getters['personAbout/firstPersonName']
      }
    },
    methods: {
      // 回车 添加一个用户
      addPerson() {
        // 1 创建一个用户对象
        const personsList = {id: nanoid(), name:this.name }
        console.log(personsList)
        // 2 把数据通过方法传给vuex 给 vuex 发送 mutations方法
        // this.$store.commit('addPerson1',personsList)
        // store 模块化 里面的方法必须告诉是哪个对象里面的
        this.$store.commit('personAbout/addPerson1',personsList)
        this.name = ''
      },
      addWang() {
        // 1 创建添加的对象
        const personObj = {id: nanoid(), name:this.name}
        // 2 调用vuex里面的方法  actions
        // this.$store.dispatch('addPersonWang',value)    // 错误 里面的方法必须告诉是哪个对象里面的
        this.$store.dispatch('personAbout/addPersonWang',personObj)
      },
      addServer() {
        // 使用 vuex 中 person方法
        this.$store.dispatch('personAbout/addPersonServer')
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
button {
  margin-left: 1rem;
}

</style>