function getFata() {
  let stationsDiv = document.getElementById('stations');
  $.get('https://data.cityofchicago.org/resource/9rg7-mz9y.json', function(stations) {
    let htmlString = "";
    for (let station of stations) {
      htmlString += `
        <h2>${station.district_name}</h2>
        <h4>Phone: ${station.phone}</h4>
        <br />
      `;
    }
    stationsDiv.innerHTML = htmlString;
  });
}
