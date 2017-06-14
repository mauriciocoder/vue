Vue.component('modal', {
  props: {
    title: { required: true },
    btnconfirm: { required: true },
    btncancel: { required: true },
  },

  template: `
    <div class="modal" :class="{'is-active': isActive}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{title}}</p>
          <button class="delete" @click="close"></button>
        </header>
        <section class="modal-card-body">
          <slot name="content"></slot>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success">{{btnconfirm}}</a>
          <a class="button">{{btncancel}}</a>
        </footer>
      </div>
    </div>
  `,

  data() {
    return { isActive: true }
  },

  methods: {
    close() {
      this.isActive = false
    }
  }
})

let app = new Vue({
  el: '#root'
})
