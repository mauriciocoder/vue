Vue.component('card', {
  props: ['title', 'subtitle'],
  data() {
    return {
      isVisible: true
    }
  },
  template: `
    <div class="card" v-show="isVisible">
      <div class="card-content">
        <button @click='closeCard'>Close</button>
        <p class="title">
          {{title}}
        </p>
        <p class="subtitle">
          {{subtitle}}
        </p>
      </div>
    </div>
  `,
  methods: {
    closeCard() {
      this.isVisible = false
    }
  }
})

new Vue({
  el: '#root'
})
