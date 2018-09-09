<template>
  <div class="container">
    <textarea class="box box-green" v-model="text"></textarea>

    <div class="box box-blue">
      <div class="word" v-for="(pair, idx) of countedAndSorted" :key="idx">
        {{ pair.word }}: {{ pair.count }}
      </div>
    </div>
  </div>
</template>

<script>
import wordscount from '@reed665/wordscount'

export default {
  data() {
    return {
      text: 'Love to hate to love'
    }
  },
  computed: {
    countedAndSorted() {
      const textWordsCount = wordscount(this.text)
      return Object.keys(textWordsCount).map(word => ({
        word,
        count: textWordsCount[word]
      })).sort((a, b) => b.count - a.count)
    }
  }
}
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  padding: 10px;
}
@media (max-width: 800px) {
  .container {
    flex-direction: column;
  }
}
.box {
  flex: 1;
  min-width: 0;
  padding: 15px;
  font-size: 1.5em;
  border-radius: 5px;
  margin: 10px;
  overflow: hidden;
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
.word {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
