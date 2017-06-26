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

export default Errors
