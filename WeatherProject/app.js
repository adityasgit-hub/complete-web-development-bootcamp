const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=4847be4cc4bc75b0146ebf4bf5a54959&units=metric";
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      console.log(weatherDescription);
      res.write("<h1>The temperature in Delhi is " + temp + " deg. celcius.</h1>")
      res.write("<p>The weather is currently " + weatherDescription + ".</p>")
      res.send()
      // res.send("<h1>The temperature in Delhi is " + temp + " deg. celcius.</h1>\n<h3>The weather is currently " + weatherDescription + ".</h3>");
    })
  });

  // res.send("Server is up and running.");
})






app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
