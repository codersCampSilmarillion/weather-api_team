import { backgroundChange } from "./backgroundChange";
import { dailyPrognoseByLocation, getCoord } from "./fiveDaysWeather";
import { getWeatherByLocation } from "./wetByLocation";

let er = document.getElementById("er");
let today = document.getElementById("today");
let weatherMap = document.getElementById("weather-map");
let aside = document.getElementById("aside");

function search() {
    document.getElementById("searchButton").addEventListener('click', function() {
        const searchedCity = document.getElementById("searchInput").value;
        const api = `http://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&APPID=0599898336f8892a2625cd0151ec957c`;
        const api1 = `http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=0599898336f8892a2625cd0151ec957c`;
        getWeatherByLocation(api1);
        searchWeatherByCity(searchedCity);
        dailyPrognoseByLocation(api);
        event.preventDefault()
    })
}

function searchWeatherByCity(searchedCity) {
    const weather = [];
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&APPID=0599898336f8892a2625cd0151ec957c`).then(result => {
        return result.json();
    }).then(data => {
        weather.id = data.list[0].weather[0].id;
    }).then(() => {
        today.style.display = 'block';
        weatherMap.style.display = 'block';
        aside.style.display = 'block';
        er.innerHTML = '';
    }).then(function() {
        backgroundChange(weather);
    }).catch(() => {
        er.innerHTML = "Cannot show a forecast for that city"
        today.style.display = 'none';
        weatherMap.style.display = 'none';
        aside.style.display = 'none';
        document.body.style.background = "rgba(235, 244, 245, 0.84)";
    })
}

export { search };
