<template>
  <div class="category">
    <h2>{{title}}</h2>
    <!-- 不使用 插槽 -->
    <!-- <div v-show="title === '美食'" v-for="(item,index) in listData" :key="index">
      <li>{{item}}</li>
    </div>
    <img v-show="title !== '美食'" src="https://img.tukuppt.com/photo-big/00/00/94/6152bc0ce6e5d805.jpg" alt=""> -->

    <!-- 使用插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'category',
  data() {
    return {

    }
  },
  props: ['listData','title']
}
</script>

<style scoped lang="scss">
  .category {
    width: 22vw;
    background-color: red;
    margin-left: 2vw;
    margin-bottom: 2vw;
    img {
      width: 100%;
    }
  }
  
</style>