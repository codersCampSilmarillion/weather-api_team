import { getWeatherByLocation } from "./wetByLocation";
import { dailyPrognoseByLocation } from "./fiveDaysWeather";
import { getUv } from "./uvIndex";
import { getMap } from "./map";

let er = document.getElementById("er");
let today = document.getElementById("today");
let weatherMap = document.getElementById("weather-map");
let aside = document.getElementById("aside");

function getLocalization() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else {
        er.innerHTML = "Geolocation is not supported by this browser. Insert city name to check a forecast."
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            er.innerHTML = "You don't allow the WeatherApp to show a forecast in your location. Insert a city name to check the forecast!"
            break;
        case error.POSITION_UNAVAILABLE:
            er.innerHTML = "Forecast at this location is unavailable. Insert city name to check a forecast."
            break;
        case error.TIMEOUT:
            er.innerHTML = "The request to get forecast at this location timed out. Insert city name to check a forecast."
            break;
        case error.UNKNOWN_ERROR:
            er.innerHTML = "An unknown error occurred during getting your location. Insert city name to check a forecast."
            break;
    }
}

function setPosition(position) {
    er.innerHTML = '';
    today.style.display = 'block';
    weatherMap.style.display = 'block';
    aside.style.display = 'block';
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const APIKEY = `621ade6f9cf22647cbe0dc0e15904a9c`;
    let apiGetByLoc = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
    let api5Days = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
    let apiuv = `http://api.openweathermap.org/data/2.5/uvi?appid=${APIKEY}&lat=${latitude}&lon=${longitude}`;
    getWeatherByLocation(apiGetByLoc);
    dailyPrognoseByLocation(api5Days);
    getUv(apiuv);
    getMap(latitude, longitude);
}

export { getLocalization };
