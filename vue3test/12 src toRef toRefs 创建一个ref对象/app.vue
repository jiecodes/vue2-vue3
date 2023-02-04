<template>
  <div id="app">
    <button @click="isShowDemo = !isShowDemo">是否展示demo</button>
    <demo v-show="isShowDemo"></demo>
  </div>
</template>

<script>
import demo from './components/Demo.vue'

import {ref} from 'vue'
export default {
  name: 'app',
  components: {demo},
  setup() {
    let isShowDemo = ref(true)
    return {
      isShowDemo
    }
  },
}
</script>

<style>

</style>