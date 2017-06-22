let store = {
  name: 'Sara Korobinski'
}

new Vue({
  el: '#one',
  data: {
    shared: store,
    description: 'Component One'
  }
})

new Vue({
  el: '#two',
  data: {
    shared: store,
    description: 'Component Two'
  }
})
