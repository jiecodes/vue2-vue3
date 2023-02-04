// 创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import HomeMessage from '../pages/HomeMessage'
import HomeNews from '../pages/HomeNews'
// 创建一个路由器
const router = new VueRouter({
  // 多个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      
      // home 里面的 组件   子组件路径前面不加/ 加上children会自动匹配/
      children: [
        // 这里面的 / 会自动添加
        {
          path: 'homeMessage',
          component: HomeMessage,
        },
        {
          path: 'homeNews',
          component: HomeNews,
        },
      ]
    },
  ]
})

export default router