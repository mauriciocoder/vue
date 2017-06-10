Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks">{{task.description}}</task>
    </div>
  `,
  data() {
    return {
      tasks: [
        {description: 'Task1', complete: true},
        {description: 'Task2', complete: true}
      ]
    }
  }
})

Vue.component('task', {
  template: '<p><slot></slot></p>'
})

let app = new Vue({
  el: '#root'
})
