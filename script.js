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
  
  $.ajax({
    url: currentURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  
    
    let currentHumidity = response.main.humidity;
    $("#current-humidity").append(currentHumidity)
 /*   let humidityP = $("<p>")
    humidityP.text(humidityCurrent)
    $("#humidity").append(humidityP);
  });
*/
  $.ajax({
    url: fiveDayURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
});
});