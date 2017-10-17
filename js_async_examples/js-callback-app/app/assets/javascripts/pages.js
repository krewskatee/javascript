function getData() {
  let employeesDiv = document.getElementById('employees');
  $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(employees) {
    let htmlString = "";
    for (let employee of employees) {
      htmlString += `
      <h2>${employee.name}</h2>
      <h2>Dept: ${employee.department}</h2>
      <h2>Title: ${employee.job_titles}</h2>
      <br />
      `;
    }
    employeesDiv.innerHTML = htmlString;
  });
}

function showAll() {
  let employees = document.querySelectorAll('.employee');

  for( let employee of employees ) {
    employee.classList.remove('hidden');
  }
}

function showPolice() {
  let employees = document.querySelectorAll('.employee');
  for( let employee of employees ) {
    if(employee.job_titles == 'officer') {
      employee.classList.remove('hidden');
    } else {
      employee.classList.add('hidden');
    }
  }
}
