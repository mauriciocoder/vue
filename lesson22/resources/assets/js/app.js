import Vue from 'vue'
import Form from './core/Form.js'

let app = new Vue({
  el: '#root',
  data: {
    form: new Form({
      name: '',
      description: ''
    }),
    projects: []
  },

  methods: {
    newproject(project) {
      this.projects.push(project)
    },

    onSubmit() {
      // Here you should provide the url
      let p1 = this.form.onSubmit()
      p1.then((project) => {
        this.projects.push(project)
        this.form.reset()
      })
      p1.catch((errors) => {
        this.form.addErrors(errors)
      })
      app.$forceUpdate()
    }
  }
})
