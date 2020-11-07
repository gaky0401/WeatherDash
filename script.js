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
    // call the date and reformat if necessary

    // make icons for weather
    let currentCondition = response.weather[0].icon;
    $("#current-weather-icon").attr("src", "http://openweathermap.org/img/wn/" + currentCondition + "@2x.png");
  

    // call the city and append it to the html
    let currentCity = response.name;
    $("#current-city-name").append(currentCity);

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
      // add icon for day 1
    let day1Icon = response.list[7].weather[0].icon;
    $("#day-1-icon").attr("src", "http://openweathermap.org/img/wn/" + day1Icon + "@2x.png");

      // add temp and humidity for day 1
    let day1Kelvin = response.list[7].main.temp;
    let day1F = Math.floor((day1Kelvin - 273.15) * 1.8) + 32;
    $("#day-1-temp").append(day1F);
    
    let day1Humidity = response.list[7].main.humidity;
    $("#day-1-humidity").append(day1Humidity);

    // add icon for day 2
    let day2Icon = response.list[15].weather[0].icon;
    $("#day-2-icon").attr("src", "http://openweathermap.org/img/wn/" + day2Icon + "@2x.png");

    // add temp & humidity for day 2
    let day2Kelvin = response.list[15].main.temp;
    let day2F = Math.floor((day2Kelvin - 273.15) * 1.8) + 32;
    $("#day-2-temp").append(day2F);

    let day2Humidity = response.list[15].main.humidity;
    $("#day-2-humidity").append(day2Humidity);

    // add icon for day 3
    let day3Icon = response.list[23].weather[0].icon;
    $("#day-3-icon").attr("src", "http://openweathermap.org/img/wn/" + day3Icon + "@2x.png");

    // add temp & humidity for day 3
    let day3Kelvin = response.list[23].main.temp;
    let day3F = Math.floor((day3Kelvin - 273.15) * 1.8) + 32;
    $("#day-3-temp").append(day3F);

    let day3Humidity = response.list[23].main.humidity;
    $("#day-3-humidity").append(day3Humidity);

    // add icon for day  4
    let day4Icon = response.list[31].weather[0].icon;
    $("#day-4-icon").attr("src", "http://openweathermap.org/img/wn/" + day4Icon + "@2x.png");

    // add temp & humidity for day 4
    let day4Kelvin = response.list[31].main.temp;
    let day4F = Math.floor((day4Kelvin - 273.15) * 1.8) + 32;
    $("#day-4-temp").append(day4F);

    let day4Humidity = response.list[31].main.humidity;
    $("#day-4-humidity").append(day4Humidity);

    // add icon for day 5
    let day5Icon = response.list[39].weather[0].icon;
    $("#day-5-icon").attr("src", "http://openweathermap.org/img/wn/" + day5Icon + "@2x.png");

    // add temp & humidity for day 5
    let day5Kelvin = response.list[39].main.temp;
    let day5F = Math.floor((day5Kelvin - 273.15) * 1.8) + 32;
    $("#day-5-temp").append(day5F);

    let day5Humidity = response.list[39].main.humidity;
    $("#day-5-humidity").append(day5Humidity);


  });
});
});