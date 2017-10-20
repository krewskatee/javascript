document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',

      tasks: [
              {
                name: "Walk the dog",
                priority: "9",
                completed: false
              },
              {
                name: "Groceries",
                priority: "7",
                completed: false
              },
              {
                name: "Sleep",
                priority: "1",
                completed: false
              }
            ],
      newTask: "",
      newPriority: ""
    },
    mounted: function() {

    },
    computed: {
    },
    methods: {
      addTask: function() {
        if(this.newTask && this.newPriority){
           newTask = {
                       name: this.newTask,
                       priority: this.newPriority,
                       completed: false
                     }
          console.log(newTask)
          this.tasks.push(newTask)
          this.newTask = "";
          this.newPriority = "";
        }
      },
      removeTasks: function(tasks) {
        for(var task of tasks) {
          if(task.completed === true) {
            this.tasks.splice(task, 1)
          }
        }
      },
      toggleCompleted: function(inputTask) {
        inputTask.completed = !inputTask.completed;
      },
      countIncompleted: function(tasks) {
        var count = 0;
        for(var task of tasks) {
          if(!task.completed) {
            count++;
          }
        }
        return count;
      }
    },
  });
});
