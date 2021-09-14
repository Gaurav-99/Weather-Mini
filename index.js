const express = require('express');
const bodyParser = require('body-parser');
const https = require('https')
const product = require("./api/product");
const cors = require('cors');

//Setup express app
const app = express();
const PORT = process.env.PORT || 3000;


app.use("/api/product", product);
require("dotenv").config();

//API key
const apiKey = `${process.env.API_KEY}`;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cors());
app.options('*', cors());

//default get request
app.get("/", (req, res) => {
  res.render("lander", { weatherData: 0, error: null });
});


app.post('/', (req, res) => {

  let city = req.body.city;


  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  https.get(url, (response) => {

    if (response.statusCode === 200) {
      response.on("data", (data) => {

        let weatherData = JSON.parse(data);
        console.log(weatherData);

        if (weatherData.main == undefined) {
          res.render('lander', { weatherData: null, error: 'Error, please try again' });
        } else {

          let place = `${weatherData.name}, ${weatherData.sys.country}`,
            weatherTimezone = `${new Date(weatherData.dt * 1000)}`,
            sunset = `${new Date(weatherData.sys["sunset"] * 1000)}`,
            sunrise = `${new Date(weatherData.sys["sunrise"] * 1000)}`;

          var timezone = `${weatherData["timezone"]}`;


          var ist = 19800;
          weatherTimezone = `${new Date(weatherData.dt * 1000 + weatherData["timezone"] * 1000)}`;
          sunset = `${new Date(weatherData.sys["sunset"] * 1000 + weatherData["timezone"] * 1000)}`;
          sunrise = `${new Date(weatherData.sys["sunrise"] * 1000 + weatherData["timezone"] * 1000)}`;


          console.log(" Timezone: ", weatherTimezone);
          console.log(" Sunset: ", sunset);
          console.log(" sunrise: ", sunrise);
          /*         weatherTimezone = weatherTimezone.toUTCString();
                  sunset = sunset.toUTCString();
                  sunrise = sunrise.toUTCString(); */
          let weatherTemp = `${weatherData.main.temp}`,
            weatherPressure = `${weatherData.main.pressure}`,
            weatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            weatherDescription = `${weatherData.weather[0].description}`,
            humidity = `${weatherData.main.humidity}`,
            clouds = `${weatherData.clouds.all}`,
            visibility = `${weatherData.visibility}`,
            main = `${weatherData.weather[0].main}`,
            weatherFahrenheit;
          weatherFahrenheit = (weatherTemp * 9) / 5 + 32;

          function roundToTwo(num) {
            return +(Math.round(num + "e+2") + "e-2");
          }
          weatherFahrenheit = roundToTwo(weatherFahrenheit);


          res.render("weatherPage", {
            weatherData,
            place,
            temp: weatherTemp,
            sunset,
            sunrise,
            pressure: weatherPressure,
            icon: weatherIcon,
            description: weatherDescription,
            timezone: weatherTimezone,
            humidity,
            fahrenheit: weatherFahrenheit,
            clouds,
            visibility,
            main,
            error: null,
          });

        }

      })
    } else {
      res.render('lander', { weatherData: null, error: 'Error, please try again' });
    }
  });
});

app.listen(PORT, function () {
  console.log("Weather app listening on port 3000!");
});
