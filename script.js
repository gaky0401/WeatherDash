$("#city-btn").on("click", function () {
    event.preventDefault();
    console.log("clicked");
    let cityName = $("#city-search").val().trim();
    let currentURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
  "&appid=ab71125de5aff9fb594cb0a9e4c3dade";
    let fiveDayURL="http://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName + "&appid=ab71125de5aff9fb594cb0a9e4c3dade";
   // let UVIndexURL="http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=ab71125de5aff9fb594cb0a9e4c3dade"
  //make a call inside ajax current to get lat and lon to concatenate into UVindexURL
  $.ajax({
    url: currentURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  
    // make a formula to convert Kelvin to fahrenheit in main temp
    let currentKelvin = response.main.temp;
    let currentFahrenheit = Math.floor((currentKelvin - 273.15) * 1.8) + 32;
    $("#current-temp").append(currentFahrenheit);

    //current variables and appendages
    let currentHumidity = response.main.humidity;
    $("#current-humidity").append(currentHumidity);
    let currentWind = response.wind.speed;
    $("#current-wind-speed").append(currentWind);
    
    // adding UV functionality
    let lat = response.coord.lat;
    let lon = response.coord.lon;
    let UVIndexURL="http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=ab71125de5aff9fb594cb0a9e4c3dade"
    $.ajax({
      url: UVIndexURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      let currentUV = response.value;
      $("#current-UV-index").append(currentUV);
    });

  $.ajax({
    url: fiveDayURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
});
});