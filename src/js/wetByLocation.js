import {backgroundChange} from "./backgroundChange";

let city = document.getElementById("city");
let temp = document.getElementById("temp");
let desc = document.getElementById("description");
let icon = document.getElementById("icon");
let maxmin = document.getElementById("maxmin");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let pressure =  document.getElementById("pressure");
let rain = document.getElementById("rain");
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
            weather.temp = Math.floor((data.main.temp - 273.15));
            weather.description = data.weather[0].description;
            weather.icon = data.weather[0].icon;
            weather.max = Math.floor((data.main.temp_max - 273.15));
            weather.min = Math.floor((data.main.temp_min - 273.15));
            weather.wind = data.wind.speed;
            weather.desc = data.clouds.all;
            weather.rain = data.weather[0].main;
            weather.humidity = data.main.humidity;
            weather.pressure = data.main.pressure;
            weather.id = data.weather[0].id;


        })
        .then(function () {
            updateWeatherByLocation(weather);
            backgroundChange(weather);
        })

}

function colorChange(api) {
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(response => {
            backgroundChange(response);
        })
}

function updateWeatherByLocation(weather) {
    city.innerHTML = `${weather.city} ${weather.country}`;
    temp.innerHTML = `${weather.temp} C&deg`;
    desc.innerHTML = `${weather.description}`;
    icon.src = `http://openweathermap.org/img/wn/${weather.icon}.png`;
    maxmin.innerHTML = `▾${weather.min} C&deg▴${weather.max} C&deg`;
    wind.innerHTML = `${weather.wind} km/h`
    humidity.innerHTML = `${weather.humidity} %`;
    pressure.innerHTML = `${weather.pressure} hPa`;
    rain.innerHTML = `${weather.rain} mm`;
    //cloudDesc.innerHTML = `${weather.desc}`

}

export {updateWeatherByLocation};
export {getWeatherByLocation, colorChange};
