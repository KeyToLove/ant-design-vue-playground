<template>
  <div class="contetn">
    <div class="contetn-text">count is {{ count }}</div>
    <a-button @click="add">点我</a-button>
  </div>
</template>
<script type="module" >
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0)
    const add = () => {
      count.value++
    }
    return { count, add }
  }
}
</script>
<style scoped lang="less">
.content {
  padding: 20px;

  &-text {
    margin-bottom: 20px;
    color: skyblue;
  }
}
</style>