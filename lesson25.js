Vue.component('coupon', {
  props: ['coupon'],
  template: `<input :value="coupon" @input="updateCoupon($event.target.value)">`,
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
