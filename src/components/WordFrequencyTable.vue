<template>
  <div>
    <div class="word" v-for="(pair, idx) of tableData" :key="idx">
      {{ pair.word }}: {{ pair.count }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableData: Array
  }
}
</script>

<style scoped>
.word {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
