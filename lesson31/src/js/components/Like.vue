<template>
  <a class="level-item">
    <span class="icon is-small"><i :class="classes" @click="click">{{counter}}</i></span>
  </a>
</template>
<script>
  export default {
    props: ['likes'],
    data() {
      return { counter: 0,
        clicked: false,
        classes: ['fa', 'fa-heart']
      }
    },
    created() {
      this.counter = this.likes
    },
    methods: {
      click() {
        this.clicked = !this.clicked
        this.updateButtonStyle()
      },
      updateButtonStyle() {
        if (this.clicked === true) {
          this.counter++
        } else {
          this.counter--
        }
      }
    }
  }
</script>
