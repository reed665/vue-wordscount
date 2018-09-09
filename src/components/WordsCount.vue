<template>
  <div class="container">
    <textarea class="box box-green" v-model="input"></textarea>

    <div class="box box-blue">{{ output }}</div>

    <div class="box box-pink" v-if="wordsArray && wordsArray.length">
      <div v-for="(word, idx) of wordsArray" :key="idx">{{ word }}</div>
    </div>
  </div>
</template>

<script>
import wordscount, { getWordsArray } from '@reed665/wordscount'

export default {
  data() {
    return {
      input: 'Love to hate to love'
    }
  },
  computed: {
    output() {
      return wordscount(this.input)
    },
    wordsArray() {
      return getWordsArray(this.input)
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
  margin: 10px 0;
  background: lightgray;
}
.box-green {
  background: lightgreen;
}
.box-pink {
  background: lightpink;
}
.box-blue {
  background: lightblue;
}
textarea {
  resize: vertical;
  min-height: 100px;
}
</style>
