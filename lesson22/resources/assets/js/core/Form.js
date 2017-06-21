import Errors from './Errors.js'
import Project from './Project.js'

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

export default Form
