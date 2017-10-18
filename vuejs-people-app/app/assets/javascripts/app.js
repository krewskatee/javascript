document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      people: [
                {
                  name: "John Doe",
                  bio: "I am so cool",
                  bioVisible: true
                }
            ],
      newName: "",
      newBio: ""
    },
    mounted: function() {

    },
    methods: {
      addPerson: function() {
        if(this.newName && this.newBio){
           newPerson = {
                       name: this.newName,
                       bio: this.newBio,
                       bioVisible: true
                     }
          console.log(newPerson)
          this.people.push(newPerson)
          this.newName = "";
          this.newBio = "";
        }
      },
      removePerson: function(inputPerson) {
        var index = this.people.indexOf(inputPerson);
        this.people.splice(index, 1)
      },
      bioToggle: function(inputPerson) {
        !input.bioVisible
      }
    },
    computed: {

    }
  });
});
