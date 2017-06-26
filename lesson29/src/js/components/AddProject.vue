<template>
  <div>
    <h3>Add a Project</h3>
    <form method="POST" action="#" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
      <div>Name: <input type="text" placeholder="project name" name="name" v-model="form.name"></input></div>
      <span v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
      <div>Description: <input type="text" placeholder="Description" name="description" v-model="form.description"></input></div>
      <span v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
      <div><button :disabled="form.errors.hasAny()">Submit</button></div>
    </form>
  </div>
</template>
<script>
  import Form from '../models/Form'
  export default {
    methods: {
      onSubmit() {
        // Here you should provide the url
        let p1 = this.form.onSubmit()
        p1.then((project) => {
          this.$emit('completed', project)
          this.form.reset()
        })
        p1.catch((errors) => {
          this.form.addErrors(errors)
          this.$forceUpdate()
        })
      }
    },

    data() {
      return {form: new Form({
        name: '',
        description: ''
      })}
    }
  }
</script>
