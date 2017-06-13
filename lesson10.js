Vue.component('modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box"><p><slot></slot></p></div>
      </div>
      <button class="modal-close" @click="$emit('close')"></button>
    </div>
  `
})

new Vue({
  el: '#root',
  data: {
    isModalVisible: true
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    }
  }
})
