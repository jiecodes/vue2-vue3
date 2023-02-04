<template>
  <div class="search">
    <div class='searchContainer'>
      <div class="searchTop">aa</div>
      <div class="searchBottom">
        <input type="text" value="输入" v-model="keyWord" @keyup.enter="searchUsers">
        <!-- https://api.github.com/search/users?q=xxx -->
        <button @click="searchUsers" >Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      keyWord: '',
    }
  },
  methods: {
    searchUsers() {
      // 导入插件 vueResource之后使用 里面就有$http属性
      console.log(this)

      // 请求前更新list数据、
      // this.$bus.$emit('getUsers',false,true,'','');
      // 对象 写法
      this.$bus.$emit('getUsers',{isWelcome:false,isLoading: true, users: '', errorMsg: '',});

      // 这样写 '' 内的都变为字符串 this.keyWord不会成为js解析的
      // axios.get('https://api.github.com/search/users?q=this.keyWord')
      // 使用axios发送请求   使用模板字符串 
      // axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        // 导入插件 vueResource使用 this里面的属性 $http
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          console.log('请求成功了', response.data)
          console.log(response.data.items)
          // 事件总线 发送数据 获取方法名    请求前更新list数据
          // this.$bus.$emit('getUsers',false,false, response.data.items,'')

          // 对象 写法
          this.$bus.$emit('getUsers',{isWelcome:false,isLoading: false, users: response.data.items, errorMsg: '',})
        },
        error => {
          console.log('请求失败')
          this.$bus.$emit('getUsers',{isWelcome:false,isLoading: false, users: '', errorMsg: '请求失败',})
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.searchContainer {
  width: 70vw;
  height: 20vh;
  background-color: #ccc;
  margin: 0 auto;
  .searchTop {
    padding: 5vh 0 0 5vw;
  }
  .searchBottom {
    display: flex;
    margin-left: 5vw;
    button {
      margin-left: 1rem;
    }
  }
  
}

</style>