class Project {
  constructor(name, description) {
    this.name = name
    this.description = description
  }

  toString() {
    return 'Name: ' + this.name + ' Description: ' + this.description
  }
}

export default Project
