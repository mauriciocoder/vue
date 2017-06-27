export default {
  template: `<div><h1>{{message | capitalize}}</h1></div>`,
  props: ['message'],
  filters: {
    capitalize(value) {
      return value.toUpperCase()
    }
  },
  computed: {
    duplicate() {
      return (this.message + this.message)
    }
  }
}
