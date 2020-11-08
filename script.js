$("#city-btn").on("click", function () {
    event.preventDefault();;
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
   
    let todayDate = new Date();
    $("#current-date").text("");
    $("#current-date").append(todayDate.toLocaleDateString());

    // make icons for weather
    let currentCondition = response.weather[0].icon;
    $("#current-weather-icon").attr("src", "http://openweathermap.org/img/wn/" + currentCondition + "@2x.png");
  
    // call the city and append it to the html
    let currentCity = response.name;
    $("#current-city-name").text("");
    $("#current-city-name").append(currentCity);

    // make a formula to convert Kelvin to fahrenheit in main temp
    let currentKelvin = response.main.temp;
    let currentFahrenheit = Math.floor((currentKelvin - 273.15) * 1.8) + 32;
    $("#current-temp").text("");
    $("#current-temp").append(currentFahrenheit);

    //current humidity and wind speed
    let currentHumidity = response.main.humidity;
    $("#current-humidity").text("");
    $("#current-humidity").append(currentHumidity);
    
    let currentWind = response.wind.speed;
    $("#current-wind-speed").text("");
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
      $("#current-UV-index").text("");
      $("#current-UV-index").append(currentUV);
      
      //add color to UV Index based on value
    // 0-3 is favorable (green); 3.01 to 6 is moderate (orange); 6.01 + is severe (red) 
      if (currentUV <= 3) {
        $("#current-UV-index").css("background-color", "#6dd45f");
      } else if (currentUV >= 3.01 && currentUV <= 6) {
        $("#current-UV-index").css("background-color", "#f2bd0f");
      } else {
        $("#current-UV-index").css("background-color", "#fa2a05");
      }    
    });

    $.ajax({
      url: fiveDayURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);

    // day 1 date
     let dayPlusOne = new Date(todayDate.getTime() + 86400000);
     $("#day-1-date").text("");
     $("#day-1-date").append(dayPlusOne.toLocaleDateString());

      // add icon for day 1
    let day1Icon = response.list[7].weather[0].icon;
    $("#day-1-icon").attr("src", "http://openweathermap.org/img/wn/" + day1Icon + "@2x.png");

      // add temp and humidity for day 1
    let day1Kelvin = response.list[7].main.temp;
    let day1F = Math.floor((day1Kelvin - 273.15) * 1.8) + 32;
    $("#day-1-temp").text("");
    $("#day-1-temp").append(day1F);
    
    let day1Humidity = response.list[7].main.humidity;
    $("#day-1-humidity").text("");
    $("#day-1-humidity").append(day1Humidity);
    
    // day 2 date
    let dayPlusTwo = new Date(todayDate.getTime() + 86400000 + 86400000);
    $("#day-2-date").text("");
    $("#day-2-date").append(dayPlusTwo.toLocaleDateString());

    // add icon for day 2
    let day2Icon = response.list[15].weather[0].icon;
    $("#day-2-icon").attr("src", "http://openweathermap.org/img/wn/" + day2Icon + "@2x.png");

    // add temp & humidity for day 2
    let day2Kelvin = response.list[15].main.temp;
    let day2F = Math.floor((day2Kelvin - 273.15) * 1.8) + 32;
    $("#day-2-temp").text("");
    $("#day-2-temp").append(day2F);

    let day2Humidity = response.list[15].main.humidity;
    $("#day-2-humidity").text("");
    $("#day-2-humidity").append(day2Humidity);
    
    // day 3 date
    let dayPlusThree = new Date(todayDate.getTime() + 86400000 + 86400000 + 86400000);
    $("#day-3-date").text("");
    $("#day-3-date").append(dayPlusThree.toLocaleDateString());

    // add icon for day 3
    let day3Icon = response.list[23].weather[0].icon;
    $("#day-3-icon").attr("src", "http://openweathermap.org/img/wn/" + day3Icon + "@2x.png");

    // add temp & humidity for day 3
    let day3Kelvin = response.list[23].main.temp;
    let day3F = Math.floor((day3Kelvin - 273.15) * 1.8) + 32;
    $("#day-3-temp").text("");
    $("#day-3-temp").append(day3F);

    let day3Humidity = response.list[23].main.humidity;
    $("#day-3-humidity").text("");
    $("#day-3-humidity").append(day3Humidity);
    
    // day 4 date
    let dayPlusFour = new Date(todayDate.getTime() + 86400000 + 86400000 + 86400000 + 86400000);
    $("#day-4-date").text("");
    $("#day-4-date").append(dayPlusFour.toLocaleDateString());

    // add icon for day  4
    let day4Icon = response.list[31].weather[0].icon;
    $("#day-4-icon").attr("src", "http://openweathermap.org/img/wn/" + day4Icon + "@2x.png");

    // add temp & humidity for day 4
    let day4Kelvin = response.list[31].main.temp;
    let day4F = Math.floor((day4Kelvin - 273.15) * 1.8) + 32;
    $("#day-4-temp").text("");
    $("#day-4-temp").append(day4F);

    let day4Humidity = response.list[31].main.humidity;
    $("#day-4-humidity").text("");
    $("#day-4-humidity").append(day4Humidity);
    
    // day 5 date
    let dayPlusFive = new Date(todayDate.getTime() + 86400000 + 86400000 + 86400000 + 86400000 + 86400000);
    $("#day-5-date").text("");
    $("#day-5-date").append(dayPlusFive.toLocaleDateString());

    // add icon for day 5
    let day5Icon = response.list[39].weather[0].icon;
    $("#day-5-icon").attr("src", "http://openweathermap.org/img/wn/" + day5Icon + "@2x.png");

    // add temp & humidity for day 5
    let day5Kelvin = response.list[39].main.temp;
    let day5F = Math.floor((day5Kelvin - 273.15) * 1.8) + 32;
    $("#day-5-temp").text("");
    $("#day-5-temp").append(day5F);

    let day5Humidity = response.list[39].main.humidity;
    $("#day-5-humidity").text("");
    $("#day-5-humidity").append(day5Humidity);


  });
});
});