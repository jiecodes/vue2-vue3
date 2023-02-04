<template>
  <div class="dialog">
    <button @click="isShowDialog = !isShowDialog">点我弹出对话框</button>
    <!-- 遮罩层 -->
    <div class="mask">
      <!-- 传送  to="body" 传送到哪个html页面 -->
      <teleport to="body">    
        <div class="dialog1"  v-show="isShowDialog">
          <div>我是一个弹窗</div>
          <button @click="isShowDialog = !isShowDialog">关闭弹窗</button>
        </div>
      </teleport>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'dialog',
  setup() {
    let isShowDialog = ref(false),

    return isShowDialog
  }
}
</script>

<style>
  .dialog1 {
    width: 100%;
    height: 100%;
    background-color: #ccc;

    text-align: center;

    position: absolute;
    /* 50% 是参考父元素(页面) */
    top: 50%;
    left: 50%;
    /* 50% 是参考自身 */
    transform: translate(-50%, -50%);
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
  }
</style>