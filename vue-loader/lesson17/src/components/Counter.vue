<template>
  <div>
    <h3>The counter is always {{counter}}</h3>
    <button @click="calculate">Calculate</button>
  </div>
</template>
<script>
  export default {
    name: 'counter',

    data() {
      return { counter: 0 }
    },

    methods: {
      calculate() {
        this.counter += 11
      }
    }
  }
</script>
<style></style>
