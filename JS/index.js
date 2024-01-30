//  city      >> url: http://api.weatherapi.com/v1/search.json?key=42d00970c554488cb60225409242401&q=${searchweathera}           >> method: get

//  weathare  >> url: https://api.weatherapi.com/v1/current.json?key=42d00970c554488cb60225409242401&q=${searchweathera}           >> method: get

//  weathare 3 days >> url: https://api.weatherapi.com/v1/forecast.json?key=42d00970c554488cb60225409242401&q=cairo&days=3           >>method: ret


//...........................................to set weather for your city..........................................

var resultsOfWeathare = [];

function getresultOfWeathare(searchweatheraOfWeathare) {
  var weatheraOfWeathare = new XMLHttpRequest();
  weatheraOfWeathare.open('get', `https://api.weatherapi.com/v1/forecast.json?key=42d00970c554488cb60225409242401&q=${searchweatheraOfWeathare}&days=7`);
  weatheraOfWeathare.send();

  weatheraOfWeathare.addEventListener('readystatechange', function () {
      if (weatheraOfWeathare.readyState == 4 && weatheraOfWeathare.status == 200) {
          resultsOfWeathare = JSON.parse(weatheraOfWeathare.responseText);
          displayweathareOfWeathare();
          displayweathareOfWeathareDayTow();
          displayweathareOfWeathareDayThree();
      }
  });
}


document.getElementById('getsearch').addEventListener('keyup', function (e) {
  getresultOfWeathare(e.target.value);
});



function displayweathareOfWeathare() {
  if (resultsOfWeathare.location) {

      
      const currentDate = new Date(resultsOfWeathare.location.localtime);
      const dayName = getDayName(currentDate.getDay());

      var cartona = `
      <div class="d-flex bodyheader2 py-2 style2 ">
    

      <div class="w-100">
        <h5 class="mb-0">${dayName}</h5>
      </div>

    </div>

    <div class="my-5" >
        <p>${resultsOfWeathare.location.name}</p>
        <div class="d-flex justify-content-around py-1">
          <div class="w-50">
            <h2 class="fw-bolder">${resultsOfWeathare.forecast.forecastday[0].day.avgtemp_c} ْC</h2>
          </div>
          <div class="w-50">
            <i class="fa fa-cloud"></i>
          </div>
        </div>
      <p class="text-info pt-4 pb-1">${resultsOfWeathare.forecast.forecastday[0].day.condition.text}</p>
      <div class="d-flex w-100 ps-5">
        <div class="d-flex">
          <i class="fa-solid fa-umbrella mx-3"></i>
          <p class="me-4 text-secondary">${resultsOfWeathare.current.precip_in}%</p>
        </div>
        <div class="d-flex">
          <i class="fa-solid fa-tornado mx-3"></i>
          <p class="me-4 text-secondary">${resultsOfWeathare.current.wind_kph}km/h</p>
        </div>
        <div class="d-flex">
          <i class="fa-regular fa-compass mx-3"></i>
          <p class="me-4 text-secondary">${resultsOfWeathare.current.wind_dir}</p>
        </div>
      </div>
      
      
    </div>
      `;
      document.getElementById('demo').innerHTML = cartona;
  } else {
      document.getElementById('demo').innerHTML = 'No results found';
  }
}







function getDayName(dayIndex) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[dayIndex];
}









function displayweathareOfWeathareDayTow() {
  if (resultsOfWeathare.location) {

    const date = new Date(resultsOfWeathare.forecast.forecastday[2].date);
    const dayName = getDayName(date.getDay());

    var cartona = `
      <div class="bodyheader py-2 style2">
        <h5 class="mb-0">${dayName}</h5>
      </div>
      <div class="my-5">
        <i class="fa-solid fa-cloud-sun py-1"></i>
        <h2 class="fw-bolder text-white py-1">${resultsOfWeathare.forecast.forecastday[1].day.avgtemp_c}C</h2>
        <h5 class="fw-bolder text-secondary py-1">${resultsOfWeathare.forecast.forecastday[2].day.avgtemp_c}</h5>
        <p class="text-info">${resultsOfWeathare.forecast.forecastday[1].day.condition.text}</p>
      </div>
    `;
    document.getElementById('demoTow').innerHTML = cartona;
  } else {
    document.getElementById('demoTow').innerHTML = 'No results found';
  }
}






function displayweathareOfWeathareDayThree() {
  if (resultsOfWeathare.location) {

    const date = new Date(resultsOfWeathare.forecast.forecastday[3].date);
    const dayName = getDayName(date.getDay());

    var cartona = `
      <div class="bodyheader py-2 style2">
        <h5 class="mb-0">${dayName}</h5>
      </div>
      <div class="my-5">
        <i class="fa-solid fa-cloud-sun py-1"></i>
        <h2 class="fw-bolder text-white py-1">${resultsOfWeathare.forecast.forecastday[2].day.avgtemp_c}C</h2>
        <h5 class="fw-bolder text-secondary py-1">${resultsOfWeathare.forecast.forecastday[3].day.avgtemp_c}</h5>
        <p class="text-info">${resultsOfWeathare.forecast.forecastday[2].day.condition.text}</p>
      </div>
    `;
    document.getElementById('demoThree').innerHTML = cartona;
  } else {
    document.getElementById('demoThree').innerHTML = 'No results found';
  }
}