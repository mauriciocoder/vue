let bus = new Vue()

Vue.component('message', {
  template: `
    <div>{{value}}</div>
  `,

  data() {
    return { value: '' }
  },

  created() {
    bus.$on('couponwritten', (couponCode) => {
      this.value = couponCode
    })
  }
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
      bus.$emit('couponwritten', this.code)
    }
  }
})

let app = new Vue({
  el: '#root'
})
