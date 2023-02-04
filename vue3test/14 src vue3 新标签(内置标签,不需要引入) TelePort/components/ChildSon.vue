<template>
  <div class="childSon">
    孙组件
    <dialog></dialog>
  </div>
</template>

<script>
import {inject} from 'vue'
import dialog from './Dialog.vue'

export default {
  name: 'childSon',
  components: { dialog },
  setup() {
    
  }
}
</script>

<style>

</style>