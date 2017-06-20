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
    return new Promise((resolve, reject) => {
      let errors = {}
      let hasError = false
      let name = this.name
      let description = this.description
      if (name === '') {
        errors.name = 'name is required'
        hasError = true
      }
      if (description === '') {
        errors.description = 'description is required'
        hasError = true
      }
      if (hasError === false) {
        resolve(new Project(name, description))
      } else {
        reject(errors)
      }
    })
  }

  addErrors(errors) {
    for (let key in this) {
      if (key !== 'errors') {
        let err = errors[key]
        if (err !== undefined) {
          this.errors.add(key, err)
        }
      }
    }
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
