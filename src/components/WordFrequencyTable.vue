<template>
  <table>
    <tr class="pair" v-for="(pair, idx) of computedTableData" :key="idx" style="width: 100%;">
      <td class="word" :title="pair.word">{{ pair.word }}</td>
      <td class="frequency" style="width: 99%;">
        <div class="freq-bar" :style="pair.styles">{{ pair.frequency }}</div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    tableData: Array
  },
  computed: {
    wordsTotal() {
      return this.tableData.reduce((total, pair) => total + pair.count, 0)
    },
    computedTableData() {
      if (!this.tableData || !this.tableData.length) {
        return []
      }
      const tableDataWithFrequency = this.tableData.map(({ word, count }) => {
        const frequency = Math.round(count / this.wordsTotal * 100)
        return {
          word,
          frequency,
        }
      })
      const firstPair = tableDataWithFrequency[0]
      const normingFactor = 100 / firstPair.frequency
      return tableDataWithFrequency.map(({ word, frequency }) => {
        const width = Math.round(frequency * normingFactor)
        return {
          word,
          frequency,
          styles: { width: `${width}%` }
        }
      })
    }
  }
}
</script>

<style scoped>
.word {
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 100px;
  max-width: 140px;
}
.freq-bar {
  background: lightsalmon;
  color: transparent;
}
</style>
