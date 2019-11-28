import {getDate, getTime} from "./js/getDate";
import {colorChange, getWeatherByLocation} from "./js/wetByLocation";
//import {getMap1} from "./js/map";
import {setPositionUv} from "./js/uvIndex";
import {search} from "./js/search";
import {dailyPrognoseByLocation} from "./js/fiveDaysWeather";

function getLocalization() {
    if (!('geolocation' in navigator)) {
        error.style.display = "block";
        return error.message = `<p>Something go wrong</p>`
    } else {
        return navigator.geolocation.getCurrentPosition(setPosition);
    }
}
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const APIKEY = `621ade6f9cf22647cbe0dc0e15904a9c`;
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
    let api1 = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
    getWeatherByLocation(api)
    dailyPrognoseByLocation(api1)
    colorChange(api)
}


getDate();
getTime();
getLocalization();
setPositionUv();
//getMap1();

search();


