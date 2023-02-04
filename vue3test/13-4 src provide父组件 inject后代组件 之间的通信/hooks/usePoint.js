import {reactive,  onMounted, onBeforeUnmount, } from 'vue'

// 也可以直接导出 导入者起名字
// export default savePoint() {}

function savePoint() {
  let point = reactive({
    x: 0,
    y: 0,
  })
  // 把页面点击事件 抽离出来
  function savePoint(event) {
    console.log(event.pageX, event.pageY)
    point.x = event.pageX
    point.y = event.pageY
  }
  // 页面加载完毕 生命周期函数
  onMounted( () => {
    // window.addEventListener('click',(event) =>{
    //   console.log(event.pageX, event.pageY)
    //   point.x = event.pageX
    //   point.y = event.pageY
    // })
    // 上面另一种写法
    window.addEventListener('click', savePoint)  
  })

  // 页面卸载之前 移除点击
  onBeforeUnmount( () => {
    window.removeEventListener('click',savePoint)
  })

  return point
}

export default savePoint