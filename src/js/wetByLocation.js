import { backgroundChange } from "./backgroundChange";
import { alerts } from "./alerts";

let city = document.getElementById("city");
let temp = document.getElementById("temp");
let desc = document.getElementById("description");
let icon = document.getElementById("icon");
let maxmin = document.getElementById("maxmin");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let vis = document.getElementById("rain");
let detailetDesc = document.getElementById("detailedDesc");
let cloudDesc = document.getElementById("cloudDecs");

//get weather by localization
function getWeatherByLocation(api) {
  const weather = {};

  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      weather.city = data.name;
      weather.country = data.sys.country;
      weather.temp = Math.floor(data.main.temp - 273.15);
      weather.description = data.weather[0].description;
      weather.icon = data.weather[0].icon;
      weather.max = Math.floor(data.main.temp_max - 273.15);
      weather.min = Math.floor(data.main.temp_min - 273.15);
      weather.wind = data.wind.speed;
      weather.desc = data.clouds.all;
      weather.rain = data.weather[0].main;
      weather.humidity = data.main.humidity;
      weather.pressure = data.main.pressure;
      weather.id = data.weather[0].id;
      weather.vis = data.visibility;
    })
    .then(function() {
      updateWeatherByLocation(weather);
      backgroundChange(weather);
      alerts(weather);
      // console.log(weather.icon)
    });
}

function colorChange(api) {
  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(response => {
      backgroundChange(response);
    });
}

function updateWeatherByLocation(weather) {
  city.innerHTML = `${weather.city} ${weather.country}`;
  temp.innerHTML = `${weather.temp}&degC`;
  desc.innerHTML = `${weather.description}`;
  icon.style.background = `url("../../assets/weticons/${weather.icon}.svg")`;
  maxmin.innerHTML = `▾${weather.min} &degC▴${weather.max} &degC`;
  wind.innerHTML = `${weather.wind} m/s`;
  humidity.innerHTML = `${weather.humidity} %`;
  pressure.innerHTML = `${weather.pressure} hPa`;
  !weather.vis
    ? (rain.innerHTML = "10 km")
    : (rain.innerHTML = `${weather.vis / 1000} km`);
  //cloudDesc.innerHTML = `${weather.desc}`
}

export { updateWeatherByLocation };
export { getWeatherByLocation, colorChange };
