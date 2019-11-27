import {updateWeather} from "./updateWeather";


function getLocalization() {
    if (!('geolocation' in navigator)) {
        error.style.display = "block";
        return error.message = `<p>Something go wrong</p>`
    } else {
        return navigator.geolocation.getCurrentPosition(setPosition);
    }
}

//user position
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const APIKEY = `621ade6f9cf22647cbe0dc0e15904a9c`;
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
    getWeatherByLocation(api);
}

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
            weather.main = data.weather[0].main;
            weather.icon = data.weather[0].icon;
            weather.cloud = data.clouds.all;
            weather.cloudDesc = data.weather[0].main;

        })
        .then(function () {
            updateWeather(weather);
        })
}


export {getLocalization};
