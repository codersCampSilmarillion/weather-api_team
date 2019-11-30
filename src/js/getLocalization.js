import {getWeatherByLocation} from "./wetByLocation";
import {dailyPrognoseByLocation} from "./fiveDaysWeather";
import {getUv} from "./uvIndex";
import {getMap} from "./map";

function getLocalization() {
    if (!("geolocation" in navigator)) {
        error.style.display = "block";
        return (error.message = `<p>Something go wrong</p>`);
    } else {
        return navigator.geolocation.getCurrentPosition(setPosition);
    }
}
function setPosition(position) {
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

export {getLocalization};