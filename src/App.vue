<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <header>
      <h1>WordsCount</h1>
    </header>

    <main>
      <WordsCount />
    </main>

    <footer>
      Footer
    </footer>
  </div>
</template>

<script>
import WordsCount from './components/WordsCount.vue'

export default {
  name: 'app',
  components: {
    WordsCount
  }
}
</script>

<style>
body {
  margin: 0;
  overflow-y: scroll;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  background: #eee;
}
#app {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app header {
  background: white;
  padding: 15px;
  text-align: center;
}
#app footer {
  background: white;
  padding: 15px;
}
#app main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
