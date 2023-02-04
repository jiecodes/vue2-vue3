// 创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import HomeMessage from '../pages/HomeMessage'
import HomeNews from '../pages/HomeNews'
import HomeMesssageDetail from '@/pages/HomeMesssageDetail'
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
          children: [
            {
              name: 'detailName',   // 路由命名     使用: :to={name: 'detailName'}
              path: 'detail/:id/:title',      // params传递参数 /:id 占位符
              component: HomeMesssageDetail,

              // props目的: 少写 $route.params.
              // props第一种写法,值为对象 对象的key-value以props形式传递给 HomeMesssageDetail组件
              // props: {a:1, b:'nihao'},

              // props第二种写法,值为布尔值 若为真,就会把该路由组件所接收到的params参数,以props的新式传给 HomeMesssageDetail组件
              // props: true,

              // props第三种写法,值为函数       使用第三种方法: path写为 path: 'detail',
              props($route) {
                return {
                  // 传递固定参数
                  // id: 6666,
                  // title: 'nihao11',

                  // 传递参数
                  id: $route.params.id,
                  title: $route.params.title,
                }
              },
              // 解构赋值 上面代码
              // props({params}) {
              //   return {
              //     id: params.id,
              //     title: params.title,
              //   }
              // },
              // 解构赋值连续写法 上面代码
              // props({params: {id, title}}) {
              //   return {
              //     id,
              //     title,
              //   }
              // },
            },
          ],
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