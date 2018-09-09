<template>
  <div class="container">
    <textarea class="box box-green" v-model="input"></textarea>
    <p class="box box-blue">{{ output }}</p>
  </div>
</template>

<script>
import wc from '@reed665/wordscount'

export default {
  data() {
    return {
      input: 'Love to hate to love'
    }
  },
  computed: {
    output() {
      return wc(this.input)
    }
  }
}
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
}
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
textarea {
  resize: vertical;
  min-height: 100px;
}
</style>
