$(document).ready(function () {
    let APIKey = "64637c790d79a4af4c245ed1db87d049";
    let searchValue = $("#search-value").val().trim();

    $('#search-button').click(function () {
        searchValue = $("#search-value").val().trim();
        let queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + searchValue + "&units=imperial" + "&APPID=" + APIKey

        let forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&units=imperial" + "&APPID=" + APIKey

        $.ajax({
            url: queryURL, 
            method: "GET" })

        .then(function (response) 
        {
            console.log(response);
            let icon = response.weather[0].icon;
            let iconEl = $("<img src='https://openweathermap.org/img/wn/" + icon +  "@2x.png'></img>")
            $("#forecast").append(iconEl);
            console.log();



            let city =  response.name
            let cityElement = $("<div class=city></div>")

            let wind =  response.wind.speed
            let windElement = $("<div class=wind></div>")
           
            let humidity = response.main.humidity
            let humidityElement = $("<div class=humidity></div>")
            
            let temp = response.main.temp
            let tempElement = $("<div class=temp></div>")

            let time = response.timezone
            let timeElement = $("<div class=time></div>")
console.log(time)
            cityElement.html("<div>" + city + " Weather Details</div>");
            windElement.text("Wind Speed: " + wind);
            // timeElement.text("Timezone: " + time);

        
            $("#today").append(iconEl);
            $("#today").append(cityElement);
            $("#today").append("Humidity: " + humidity);
            $("#today").append(timeElement);
            $("#today").append(windElement);
            $("#today").append("Temperature " + temp);











    })
 $.ajax({
     url:forecastURL,
     method: "GET",
 })
 .then(function(response){
     console.log(response)
 })
    })

})