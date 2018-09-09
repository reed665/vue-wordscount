<template>
  <div>
    <h2>WordsCount</h2>
    <p class="box box-green"> {{ input }}</p>
    <p class="box box-blue"> {{ output }}</p>
  </div>
</template>

<script>
import wc from '@reed665/wordscount'

export default {
  data() {
    return {
      input: 'Love to hate to love',
      output: ''
    }
  },
  created() {
    this.output = wc(this.input)
  }
}
</script>

<style scoped>
.box {
  padding: 15px;
  font-size: 1.5em;
  border-radius: 5px;
  background: lightgray;
}
.box-green {
  background: lightgreen;
}
.box-blue {
  background: lightblue;
}
</style>
