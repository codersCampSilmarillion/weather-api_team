import {backgroundChange} from "./js/backgroundChange";
import {search} from "./js/search";
import {dailyPrognoseByLocation} from "./js/fiveDaysWeather";


search();

// //funkcja, która na podstawie wprowadzonego miasta przez użytkownika pokazuje odpowiednią pogode (należy dodać) i zmienia kolor tła(to już jest)
// function searchWeatherByCity(searchedCity) {
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&APPID=0599898336f8892a2625cd0151ec957c&units=metric`).then(result => {
//         return result.json();
//     }).then(result => {
//         backgroundChange(result);
//     })
// }



