import {backgroundChange} from "./backgroundChange";
import {thisWeek} from "./fiveDaysWeather";

function search() {
    document.getElementById("searchButton").addEventListener('click', () => {
        let searchedCity = document.getElementById("searchInput").value;
        searchWeatherByCity(searchedCity)
        dailyPrognoseByCity(searchedCity);
        event.preventDefault()
    });
}

function searchWeatherByCity(searchedCity) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&APPID=0599898336f8892a2625cd0151ec957c&units=metric`).then(result => {
        return result.json();
    }).then(result => {
        backgroundChange(result);
    })
}


//funkcja pobierająca dane o prognozie na 5dni na podstawie wpisanego przez użytkownika miasta
function dailyPrognoseByCity(searchedCity) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&APPID=0599898336f8892a2625cd0151ec957c`).then(result => {
        return result.json();
    }).then(result => {
        thisWeek(result)
    })
}

export {search};
