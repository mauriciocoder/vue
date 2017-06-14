let bus = new Vue()

Vue.component('search-result', {
  template: `
    <div>
      <div v-for="state in states">{{state}}</div>
    </div>
  `,

  data() {
    return { states: [] }
  },

  created() {
    bus.$on('search-complete', states => {
      this.states = states
    })
  }
})

Vue.component('wikipedia-form', {
  template: `
    <div>
      <input type="text" placeholder="Write a term to search..." v-model="userQuery"></input>
      <button @click="search">Search</button>
    </div>
  `,

  data() {
    return { userQuery: '' }
  },

  methods: {
    search() {
      var req = 'http://services.groupkt.com/state/get/' + this.userQuery + '/all'
      axios.get(req)
        .then(data => {
          //alert('data.data.RestResponse.result = ' + JSON.stringify(data.data.RestResponse.result))
          let states = data.data.RestResponse.result.map(state => {
            return state.name
          })
          bus.$emit('search-complete', states)
        })
    }
  }
})

let app = new Vue({
  el: '#root'
})
