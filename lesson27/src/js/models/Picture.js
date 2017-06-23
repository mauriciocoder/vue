class Picture {
  constructor() {
    this.title = ''
    this.url = ''
  }

  findPicOfDay() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(result => {
        this.title = result.data.title
        this.url = result.data.url
      })
  }
}

export default Picture
