let bus = new Vue({})

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

class Form {
  constructor(data) {
    for (let d in data) {
      this[d] = data[d]
    }
    this.errors = new Errors()
  }

  reset() {
    for (let att in this) {
      if ((this[att] instanceof Errors) === false) {
          this[att] = ''
      }
    }
  }

  onSubmit() {
    var hasError = false
    var name = this.name
    var description = this.description
    if (name === '') {
      this.errors.add('name', 'name is required')
      hasError = true
    }
    if (description === '') {
      this.errors.add('description', 'description is required')
      hasError = true
    }
    if (hasError === false) {
      bus.$emit('newproject', new Project(name, description))
    }
    this.reset()
    app.$forceUpdate()
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
    form: new Form({
      name: '',
      description: ''
    }),
    projects: []
  },

  created() {
    bus.$on('newproject', this.newproject)
  },

  methods: {
    newproject(project) {
      this.projects.push(project)
    }
  }
})
