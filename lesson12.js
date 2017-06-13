Vue.component('message', {
  template: `
    <div>{{value}}</div>
  `,

  props: { value: { default: '' } }
})

Vue.component('coupon', {
  template: `
    <input v-model="code" @blur="couponwritten" placeholder="Write coupon code"></input>
  `,

  data() {
    return { code: '' }
  },

  methods: {
    couponwritten() {
      this.$emit('couponwritten', this.code)
    }
  }
})

let app = new Vue({
  el: '#root',

  data: {
    couponValue: ''
  },

  methods: {
    couponwritten(code) {
      this.couponValue = code
      //console.log('this.$children = ' + this.$children)
    }
  }
})
