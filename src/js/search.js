import {backgroundChange} from "./backgroundChange";
import {dailyPrognoseByLocation, getCoord} from "./fiveDaysWeather";
import {getWeatherByLocation} from "./wetByLocation";

function search() {
    document.getElementById("searchButton").addEventListener('click', () => {
        const searchedCity = document.getElementById("searchInput").value;
        const api = `http://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&APPID=0599898336f8892a2625cd0151ec957c`;
        const api1 = `http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=0599898336f8892a2625cd0151ec957c`;
        dailyPrognoseByLocation(api);
        getWeatherByLocation(api1);
        searchWeatherByCity(searchedCity);
        event.preventDefault()
    });
}

function searchWeatherByCity(searchedCity) {
    const weather = [];
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&APPID=0599898336f8892a2625cd0151ec957c`).then(result => {
        return result.json();
    }).then(data => {
        weather.id = data.list[0].weather[0].id;
    }).then(function () {
        backgroundChange(weather);
    })
}

export {search};
