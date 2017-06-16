class Errors {
  constructor() {
    this.errors = {}
  }

  add(type, description) {
    this.errors[type] = description
  }

  get(type) {
    let message = this.errors[type]
    if (message != undefined) {
      return message
    }
    return ''
  }

  has(type) {
    return this.errors.hasOwnProperty(type)
  }

  hasAny() {
    return Object.keys(this.errors).length > 0
  }

  clear(targetName) {
    delete this.errors[targetName]
  }
}

class Project {
  constructor(name, description) {
    this.name = name
    this.description = description
  }

  toString() {
    return 'Name: ' + this.name + ' Description: ' + this.description
  }
}

let app = new Vue({
  el: '#root',
  data: {
    name: '',
    description: '',
    projects: [],
    errors: new Errors()
  },
  methods: {
    onSubmit() {
      var hasError = false
      if (this.name === '') {
        this.errors.add('name', 'name is required')
        hasError = true
      }
      if (this.description === '') {
        this.errors.add('description', 'description is required')
        hasError = true
      }
      if (hasError === false) {
        this.projects.push(new Project(this.name, this.description))
      }
      this.name = this.description = ''
      this.$forceUpdate()
    }
  }
})
