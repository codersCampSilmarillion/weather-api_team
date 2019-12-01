import { getUv } from "./uvIndex";

let day1 = document.getElementById("day1");
let day1Temp = document.getElementById("day1temp");
let day1Date = document.getElementById("day1date");
let day1Icon = document.getElementById("day1icon");

let day2 = document.getElementById("day2");
let day2Temp = document.getElementById("day2temp");
let day2Date = document.getElementById("day2date");
let day2Icon = document.getElementById("day2icon");

let day3 = document.getElementById("day3");
let day3Temp = document.getElementById("day3temp");
let day3Date = document.getElementById("day3date");
let day3Icon = document.getElementById("day3icon");

let day4 = document.getElementById("day4");
let day4Temp = document.getElementById("day4temp");
let day4Date = document.getElementById("day4date");
let day4Icon = document.getElementById("day4icon");
let day5 = document.getElementById("day5");
let day5Temp = document.getElementById("day5temp");
let day5Date = document.getElementById("day5date");
let day5Icon = document.getElementById("day5icon");

//funkcja pobierająca dane o prognozie na 5dni na podstawie danych geograficznych
function dailyPrognoseByLocation(api) {
  const weather = [];
  fetch(api)
    .then(result => {
      return result.json();
    })
    .then(data => {
      weather.city = data.city.name;
      weather.country = data.country;
      weather.day1Temp = celsius(data.list[7].main.temp);
      weather.day1icon = data.list[7].weather[0].icon;
      weather.day2temp = celsius(data.list[15].main.temp);
      weather.day2icon = data.list[15].weather[0].icon;
      weather.day3temp = celsius(data.list[23].main.temp);
      weather.day3icon = data.list[23].weather[0].icon;
      weather.day4temp = celsius(data.list[31].main.temp);
      weather.day4icon = data.list[31].weather[0].icon;
      weather.day5temp = celsius(data.list[39].main.temp);
      weather.day5icon = data.list[39].weather[0].icon;
      weather.lat = data.city.coord.lat;
      weather.lon = data.city.coord.lon;
    })
    .then(function() {
      thisWeek(weather);
    });
}

//funckja zamieniająca kelwiny na stopnie celsjusza w przyblizeniu
function celsius(kelwin) {
  return `${Math.round(kelwin - 273.15)}`;
}

//funkcja pokazująca prognozę na 5 dni
function thisWeek(resultFromServer) {
<<<<<<< HEAD
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday"
  ];
  let now = new Date();
  let daysSume = now.getDate();
  day1.innerHTML = `${days[now.getDay() + 1]}`;
  day1Temp.innerHTML = resultFromServer.day1Temp;
  now.setDate(daysSume + 1);
  daysSume = now.getDate();
  day1Date.innerHTML = `${now.getDate()}/${now.getMonth() +
    1}/${now.getFullYear()}`;
  day1Icon.src = "../../assets/WetIcons/" + resultFromServer.day1icon + ".svg";

  day2.innerHTML = `${days[now.getDay() + 1]}`;
  day2Temp.innerHTML = resultFromServer.day2temp;
  now.setDate(daysSume + 1);
  daysSume = now.getDate();
  day2Date.innerHTML = `${now.getDate()}/${now.getMonth() +
    1}/${now.getFullYear()}`;
  day2Icon.src = "../../assets/WetIcons/" + resultFromServer.day2icon + ".svg";

  day3.innerHTML = `${days[now.getDay() + 1]}`;
  day3Temp.innerHTML = resultFromServer.day3temp;
  now.setDate(daysSume + 1);
  daysSume = now.getDate();
  day3Date.innerHTML = `${now.getDate()}/${now.getMonth() +
    1}/${now.getFullYear()}`;
  day3Icon.src = "../../assets/WetIcons/" + resultFromServer.day3icon + ".svg";

  day4.innerHTML = `${days[now.getDay() + 1]}`;
  day4Temp.innerHTML = resultFromServer.day4temp;
  now.setDate(daysSume + 1);
  daysSume = now.getDate();
  day4Date.innerHTML = `${now.getDate()}/${now.getMonth() +
    1}/${now.getFullYear()}`;
  day4Icon.src = "../../assets/WetIcons/" + resultFromServer.day4icon + ".svg";

  day5.innerHTML = `${days[now.getDay() + 1]}`;
  day5Temp.innerHTML = resultFromServer.day5temp;
  now.setDate(daysSume + 1);
  day5Date.innerHTML = `${now.getDate()}/${now.getMonth() +
    1}/${now.getFullYear()}`;
  day5Icon.src = "../../assets/WetIcons/" + resultFromServer.day5icon + ".svg";

  const apiUV = `http://api.openweathermap.org/data/2.5/uvi?appid=0599898336f8892a2625cd0151ec957c&lat=${resultFromServer.lat}&lon=${resultFromServer.lon}`;
  getUv(apiUV);
}
=======
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    let now = new Date();
    let daysSume = now.getDate()
    day1.innerHTML = `${days[now.getDay()+1]}`;
    day1Temp.innerHTML = resultFromServer.day1Temp;
    now.setDate(daysSume + 1);
    daysSume = now.getDate();
    day1Date.innerHTML = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
    day1Icon.src = '../../assets/WetIcons/' + resultFromServer.day1icon + '.svg';

    day2.innerHTML = `${days[now.getDay()+1]}`;
    day2Temp.innerHTML = resultFromServer.day2temp;
    now.setDate(daysSume + 1);
    daysSume = now.getDate();
    day2Date.innerHTML = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    day2Icon.src = '../../assets/WetIcons/' + resultFromServer.day2icon + '.svg';

    day3.innerHTML = `${days[now.getDay()+1]}`;
    day3Temp.innerHTML = resultFromServer.day3temp;
    now.setDate(daysSume + 1);
    daysSume = now.getDate();
    day3Date.innerHTML = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    day3Icon.src = '../../assets/WetIcons/' + resultFromServer.day3icon + '.svg';

    day4.innerHTML = `${days[now.getDay()+1]}`;
    day4Temp.innerHTML = resultFromServer.day4temp;
    now.setDate(daysSume + 1);
    daysSume = now.getDate();
    day4Date.innerHTML = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    day4Icon.src = '../../assets/WetIcons/' + resultFromServer.day4icon + '.svg';

    day5.innerHTML = `${days[now.getDay()+1]}`;
    day5Temp.innerHTML = resultFromServer.day5temp;
    now.setDate(daysSume + 1);
    day5Date.innerHTML = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    day5Icon.src = '../../assets/WetIcons/' + resultFromServer.day5icon + '.svg';

    const apiUV = `http://api.openweathermap.org/data/2.5/uvi?appid=0599898336f8892a2625cd0151ec957c&lat=${resultFromServer.lat}&lon=${resultFromServer.lon}`;
    getUv(apiUV);

};
>>>>>>> a93d2df23a624009b7826822ec8f4f334c6cee1d

export { dailyPrognoseByLocation, thisWeek };
