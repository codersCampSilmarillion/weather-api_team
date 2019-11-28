import {updateWeatherByLocation} from "./updateWeatherByLocation";
import {backgroundChange} from "./backgroundChange";


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
            updateWeatherByLocation(weather);
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


export {getWeatherByLocation, colorChange};
