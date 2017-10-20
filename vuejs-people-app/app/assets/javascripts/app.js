document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      people: [],
      newName: "",
      newBio: "",
      errors: []
    },
    mounted: function() {

      $.get('/api/v1/people.json', function(data) {
        this.people = data;
      }.bind(this));

    },
    methods: {
      addPerson: function() {
           var newPerson = {
                       name: this.newName,
                       bio: this.newBio
                     };
          $.post('/api/v1/people.json', newPerson, function(newPerson) {
            this.people.push(newPerson);
            this.newName = "";
            this.newBio = "";
          }.bind(this)).fail(function(response) {
            this.errors = response.responseJSON.errors;
          }.bind(this));
      },
      removePerson: function(inputPerson) {
        var index = this.people.indexOf(inputPerson);
        this.people.splice(index, 1);
      },
      bioToggle: function(inputPerson) {
        inputPerson.bioVisible = !inputPerson.bioVisible;
      }
    },
    computed: {

    }
  });
});
