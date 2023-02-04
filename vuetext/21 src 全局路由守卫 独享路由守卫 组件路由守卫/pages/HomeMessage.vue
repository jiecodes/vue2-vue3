<template>
  <div class="homeMessage">
   <li v-for="item in msg" :key="item.id">
     <!-- query  传递固定值、 -->
     <!-- <router-link to="/home/homeMessage/detail?id=66&title=你好">{{item.title}}</router-link> -->
     <!-- v-bind: 把字符串变为js表达式   模板字符串里面通过${}传递参数  字符串写法 -->
     <!-- <router-link :to="`/home/homeMessage/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link> -->

    <!-- 跳转路由 携带query参数 to对象写法  -->
    <!-- <router-link :to="{
      // path: '/home/homeMessage/detail',
      // 在router.js 中配置了 命名路由 name
      name: 'detailName',
      query: {
        id: item.id,
        title: item.title,
      }
    }">
    {{item.title}}
    </router-link> -->

    <!-- params参数 id 666  title 你好  固定值 字符串写法 -->
    <!-- <router-link :to="`/home/homeMessage/detail/666/你好`">{{item.title}}</router-link> -->
    <!-- params参数 id 666  title 你好  传递值 字符串写法 -->
    <!-- <router-link :to="`/home/homeMessage/detail/${item.id}/${item.title}`">{{item.title}}</router-link> -->
    <!-- params参数 id 666  title 你好  传递值 对象写法 使用params对象传递数据,不允许写path路径-->
    <router-link :to="{
       name: 'detailName',
      // path: '/home/homeMessage/detail',
      params: {
        id: item.id,
        title: item.title
        }
      }">
      {{item.title}}&nbsp;
      <button @click="pushShow(item)">push</button> &nbsp;
      <button @click="replaceShow(item)">replace</button>

      <!-- 输入内容后 切换组件 组件被销毁 不想被销毁 借助组件<keep-alive includde="homeMessage"/> includde设置缓存组件  -->
      <input type="text" value="切换后 homeMessage组件 被销毁了">
    </router-link>

   </li>
   <div :style="{opacity: opacity}">aa</div>
   <div :style="{opacity}">定时器循环展示</div>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'homeMessage',
  data() {
    return {
      opacity: 1,
      timer: 0,
      msg: [
        {id: '001', title: 'aaa'},
        {id: '002', title: 'bbb'},
        {id: '003', title: 'ccc'},
      ]
    }
  },
  methods: {
    pushShow(item) {
      // 编程式跳转 $router.push  有历史记录
      console.log(this.$router)
      this.$router.push({
        name: 'detailName',
        params: {
          id: item.id,
          title: item.title
        }
      })
    },
    replaceShow(item) {
      // 编程式跳转 $router.replace  没有历史记录 替换当前历史
      console.log(this.$router) 
      this.$router.replace({
        name: 'detailName',
        params: {
          id: item.id,
          title: item.title
        }
      })
    },
  },
  // vue 生命周期实现 页面显示循环
  // mounted() {
  //   this.timer = setInterval(() => {
  //     this.opacity = this.opacity - 0.01
  //     if (this.opacity <= 0) 
  //     this.opacity = 1
  //     console.log('aa')   // <router-view></router-view>外面包裹了 </keep-alive> 所以切换了定时器没有销毁
  //   }, 10);
  // },
  // beforeDestroy() {
  //   clearInterval(this.timer)
  // },

  // 路由组件 生命周期实现 页面显示循环 
  // 路由组件 才有的生命周期 activated() deactivated()  配合</keep-alive>(缓存组件,组件销毁,数据还在)使用
  activated() {
    console.log('homeMessage 组件被激活了')
    this.timer = setInterval(() => {
      this.opacity = this.opacity - 0.01
      if (this.opacity <= 0) 
      this.opacity = 1
      console.log('aa')   // 使用路由组件生命周期函数 组件失活了 定时器关闭了 
    }, 10);
  },
  deactivated() {
    console.log('homeMessage 组件失活了')
    clearInterval(this.timer)
  },
}
</script>

<style>
  .homeMessage {
    display: inline-block;
    background-color: lightblue;
    border: 1px solid #ccc;
    padding: 0.5rem;
    margin: 0.5rem 0 0 3.5rem;
    border-radius: 4%;
    cursor: pointer;
  }
</style>