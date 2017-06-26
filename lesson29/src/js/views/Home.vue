<template>
  <div>
    <h2>Projects</h2>
    <div v-for="project in projects">
      <span>Name: {{project.name}} </span>
      <span> Description: {{project.description}}</span>
    </div>
    <add-project @completed="addProject"></add-project>
  </div>
</template>
<script>
  import AddProject from '../components/AddProject'
  export default {
    data() {
      return ({ projects: [
        {name: 'iBalcao', description: 'Projeto falido!'},
        {name: 'Multa Full', description: 'Projeto falido 2!'}
      ]})
    },
    methods: {
      addProject(project) {
        this.projects.push(project)
      }
    },
    components: {
      AddProject
    }
  }
</script>
