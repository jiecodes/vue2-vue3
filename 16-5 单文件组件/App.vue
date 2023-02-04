<template>
  <div>
    <school></school>
    <student></student>
  </div>
</template>

<script>
// 默认导入
import school from './School.vue'
import student from './Student.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: '',
    }
  },
  components: {
    school,
    student,
  }
}
</script>

<style>

</style>