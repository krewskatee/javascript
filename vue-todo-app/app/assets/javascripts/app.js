document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
              {
                name: "Walk the dog",
                priority: "High"
              },
              {
                name: "Groceries",
                priority: "Medium"
              },
              {
                name: "Sleep",
                priority: "Very High"
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
                       priority: this.newPriority
                     }
          console.log(newTask)
          this.tasks.push(newTask)
          this.newTask = "";
          this.newPriority = "";
        }
      },
      removeTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index, 1)
      }
    },
  });
});
