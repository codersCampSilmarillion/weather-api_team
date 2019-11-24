//TODO niepełne odczyty danych z API, uzupelnienie nie potrwa długo
//TODO podział pliku na rozsądne klasy

let city = document.getElementById("city");
let temp = document.getElementById("temp");
let desc = document.getElementById("description");
let icon = document.getElementById("icon");
let cloud = document.getElementById("cloud");
let cloudDesc = document.getElementById("cloudDesc");


let error = document.getElementById("city");

//date
var today = new Date();
let date = document.getElementById("date");
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
date.innerHTML = today;

const APIKEY = `621ade6f9cf22647cbe0dc0e15904a9c`;
const weather = {};

if (!('geolocation' in navigator)) {
    error.style.display = "block";
    error.message = `<p>Something go wrong</p>`
} else {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}

//user position
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeatherByLocation(latitude, longitude);
}

//get weather by localization
function getWeatherByLocation(lat, lon) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            weather.city = data.name;
            weather.country = data.sys.country;
            weather.desc = data.weather[0].description;
            weather.icon = data.weather[0].icon;
            weather.cloud = data.clouds.all;
            weather.cloudDesc = data.weather[0].main;
            weather.value = Math.floor((data.main.temp - 273.15));

        })
        .then(function () {
            updateWeather();
        })
}

function updateWeather() {
    city.innerHTML = `${weather.city}${weather.country}`;
    desc.innerHTML = `${weather.description}`;
    icon.innerHTML = `${weather.icon}`;
    cloud.innerHTML = `${weather.cloud}`;
    cloudDesc.innerHTML = `${weather.cloudDesc}`;

}


function showError(error) {
    error.message.innerHTML = `<p>${error.message}</p>`
}
