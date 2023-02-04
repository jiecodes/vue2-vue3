<template>
  <div class="list">
    <!-- 展示用户  users.length不为0 则展示 -->
    <div v-show="infoUsers.users.length" class="listItem" v-for="item in infoUsers.users" :key="item.login">
      <a :href="item.html_url">
        <!-- <div class="img"></div> -->
        <img :src="item.avatar_url" alt="">
        <span>{{item.login}}</span>
      </a>
    </div>
    <!-- 展示欢迎 -->
    <div v-show="infoUsers.isWelcome"> 欢迎使用 </div>
    <!-- 展示加载 -->
    <div v-show="infoUsers.isLoading">加载中</div>
    <!-- 展示错误 -->
    <div v-show="infoUsers.errorMsg">{{infoUsers.errorMsg}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isWelcome: true,
      // isLoading: false,
      // users: '',
      // errorMsg: '',

      // 可以批量替换对象
      infoUsers: {
        isWelcome: true,
        isLoading: false,
        users: '',
        errorMsg: '',
      }
    }
  },
  mounted() {
    //  事件总线 接收数据 把自定义方法名存入$bus
    // this.$bus.$on('getUsers', (users) => {
    //   console.log('我是list.vue 组件 收到了数据' , users)
    //   this.users = users
    // })
    // this.$bus.$on('getUsers', (isWelcome,isLoading,users,errorMsg) => {
    //   console.log('我是list.vue 组件 收到了数据' , users)
    //   this.users = users
    //   this.isWelcome = isWelcome
    //   this.isLoading = isLoading
    //   this.errorMsg = errorMsg
    // })
    this.$bus.$on('getUsers', (listObj) => {
      console.log('我是list.vue 组件 收到了数据' , listObj)
      // 替换 infoUsers对象
      this.infoUsers = listObj
      // 合并 this.infoUsers listObj 对象 属性相同的已后面的对象为主
      this.infoUsers = {...this.infoUsers, ...listObj}
      console.log(this)
    })
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 70vw;
  // height: 20vh;
  background-color: hotpink;
  margin: 0 auto;
  display: flex;
  // 移除隐藏
  flex-wrap: wrap;
  .listItem {
    box-sizing: border-box;
    width: 23.3333333333vw;
    height: 15vh;
    background-color: red;
    border: 1px solid blue;
    margin-top: 2vw;
    // 让子元素居中
    text-align: center;

    img {
      width: 100%;
      height: 7vw;
      // 图片自适应
      object-fit: contain;
    }
    .img {
      // 照片自适应
      width: 12vw;
      height: 7vw;
      background: url(https://img0.baidu.com/it/u=3156137851,1307209439&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1674061200&t=736d2c1a69ba422655f0f10ed8949164) no-repeat center center;
      background-size: contain;
      margin: .1vw auto 0;
    }
    span {
      display: block;
    }
  }
}
</style>