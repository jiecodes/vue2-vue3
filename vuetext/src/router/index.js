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
  mode: 'history',
  // 多个路由
  routes: [
    {
      path: '/about',
      component: About,
      // 设置标题名字 路由元信息
      meta:{isAuth: true, title: '关于'},
    },
    {
      path: '/home',
      component: Home,
      meta: {title: '首页'},
      // home 里面的 组件   子组件路径前面不加/ 加上children会自动匹配/
      children: [
        // 这里面的 / 会自动添加
        {
          path: 'homeMessage',
          component: HomeMessage,
          // this.$route里面的属性  meta配置自己的数据 meta路由元信息
          meta: {isAuth: true, title: '首页信息',},
          // 独享路由守卫(只有前置)
          // beforeEnter:((to, from, next) => {
          //   console.log('前置独享路由守卫', to, from ,next)
          //   if (to.meta.isAuth) {
          //     if (localStorage.getItem('key' === 'nihao')) {
          //       next();
          //     } else {
          //       prompt('key值错误')
          //     }
          //   } else {
          //     next();
          //   }
          // }),
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
          // this.$route里面的属性  meta配置自己的数据
          meta: {isAuth: true, title: '首页新闻',},
        },
      ]
    },
  ]
})

// 全局前置路由守卫 初始化被调用 路由切换之前被调用
// to 到那个页面
// from 从那个页面出发
// next() 放行函数
router.beforeEach((to, from, next) => {
  console.log('前置路由守卫',to, from, next)
  // document.title = '页面标题'     // 修改页面标题
  // 判断到的那个页面的页面路径
  // if (to.path === '/home/homeMessage' || to.path === '/home/homeNews') {
  // 判断 this.$route里面的meta是否有isAuth为true     false放行 true执行下面代码
  if (to.meta.isAuth) {   
    // 判断 浏览器本地存储有没有数据
    if (localStorage.getItem('key') === 'nihao') {
      next()
    } else {
      prompt('key值不对')
    }
  } else {
    // 访问的不是home下的俩个页面 则执行放行函数
    next();
  }
})

// 全局前置路由守卫 初始化被调用 路由切换之后被调用
router.afterEach((to, from, next) => {
  console.log('后置路由守卫',to, from, next)
  // 设置标题名称    to.meta.title || '空' 或者:前面有值执行前面,没有值,执行后面
  document.title = to.meta.title || '空'
})

export default router