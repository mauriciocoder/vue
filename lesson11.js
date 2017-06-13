let bus = new Vue()

Vue.component('tabcontents', {
  template: `
    <div>
      <slot></slot>
    </div>
  `,

  mounted() {
    bus.$on('select-content', (tabName) => {
      var contents = this.$children
      contents.forEach((content) => {
        if (content.source === tabName) {
          content.show()
        } else {
          content.hide()
        }
      })
    })
  }
})

Vue.component('tabcontent', {
  template: `
    <div v-show="isVisible"><slot></slot></div>
  `,

  data() {
    return {isVisible : false}
  },

  props: {
    selected: {default: false},
    source: {required: true}
  },

  mounted() {
    this.isVisible = this.selected
  },

  methods: {
    show() {
      this.isVisible = true
    },

    hide() {
      this.isVisible = false
    }
  }
})

Vue.component('tabs', {
  template: `
    <div class='tabs'>
      <ul>
        <slot></slot>
      </ul>
    </div>
  `,

  mounted() {
    var tabs = this.$children
    bus.$on('select-tab', (tab) => {
      tabs.forEach((t) => {
        if (tab.name !== t.name) {
          t.deSelect()
        }
      })
      bus.$emit('select-content', tab.name)
    })
  },
})

Vue.component('tab', {
  template: `
    <li :class="{'is-active': isActive}" @click="select"><a>{{name}}</a></li>
  `,

  props: {
    name: {required: true},
    selected: {default: false}
  },

  data() {
    return {isActive: false}
  },

  created() {
    this.isActive = this.selected
  },

  methods: {
    select() {
      this.isActive = true
      bus.$emit('select-tab', this)
    },

    deSelect() {
      this.isActive = false
    }
  }
})

let app = new Vue({
  el: '#root'
})
