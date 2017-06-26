let app = new Vue({
  el: '#root',
  data: {
    title: 'Math Operator',
    money: 0
  },
  filters: {
    round(money) {
      return Math.round(money)
    },
    monetize(money) {
      return '$ ' + money + ' USD'
    }
  }
})
