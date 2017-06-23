Vue.component('coupon', {
  template: `<input @input="updateCoupon($event.target.value)">`,
  methods: {
    updateCoupon(value) {
      this.$emit('input', value)
    }
  }
})

new Vue({
  el: '#root',
  data: {
    coupon: ''
  }
})
