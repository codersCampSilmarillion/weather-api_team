//funkcję backgroundChange chciałem dać do innego pliku i ją wyeksportować, jednak nie chce mi to działać, nie wiem dlaczego

function backgroundChange(resultFromServer) {
    (resultFromServer.weather[0].id <= 232) ? document.body.style.backgroundColor = 'black': //thunderstorm
        (resultFromServer.weather[0].id <= 321) ? document.body.style.backgroundColor = 'darkgrey' : //drizzle
        (resultFromServer.weather[0].id <= 531) ? document.body.style.backgroundColor = 'blue' : //rain
        (resultFromServer.weather[0].id <= 622) ? document.body.style.backgroundColor = 'ghostwhite' : //snow
        (resultFromServer.weather[0].id <= 781) ? document.body.style.backgroundColor = 'gold' : //atmosphere
        (resultFromServer.weather[0].id == 800) ? document.body.style.backgroundColor = 'aqua' : //clear sky
        document.body.style.backgroundColor = 'fuchsia'; //clouds
    console.log(resultFromServer.weather[0].id)
}


//funkcja, która na podstawie danych geograficznych użytkownika pokazuje odpowiednią pogode (należy dodać) i zmienia kolor tła(to już jest)
function searchWeatherByLocation(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=0599898336f8892a2625cd0151ec957c&units=metric`).then(result => {
        return result.json();
    }).then(result => {
        backgroundChange(result);
    })
};

//pobranie danych geograficznych od użytkownika
var geo = navigator.geolocation;

if (geo) {
    geo.getCurrentPosition(function(location) {
        var lat = Math.round(location.coords.latitude);
        var lon = Math.round(location.coords.longitude);
        searchWeatherByLocation(lat, lon)
        dailyPrognose(lat, lon)
    });
} else {
    console.log('niedostępny');
}



//funkcja, która na podstawie wprowadzonego miasta przez użytkownika pokazuje odpowiednią pogode (należy dodać) i zmienia kolor tła(to już jest)
function searchWeatherByCity(searchedCity) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&APPID=0599898336f8892a2625cd0151ec957c&units=metric`).then(result => {
        return result.json();
    }).then(result => {
        backgroundChange(result);
    })
}

document.getElementById('searchbutton').addEventListener('click', () => {
    let searchedCity = document.getElementById("searchInput").value;
    searchWeatherByCity(searchedCity)
})

//funkcja pobierająca dane o prognozie na 5dni
function dailyPrognose(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=0599898336f8892a2625cd0151ec957c`).then(result => {
        return result.json();
    }).then(result => {
        console.log(result);
        thisWeek(result)
    })
}
//funkcja pokazująca prognozę na 5 dni, nie działa jeszcze zmiana daty:(
function thisWeek(resultFromServer) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    now = new Date();
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

    day1.innerHTML = `${days[now.getDay()+1]}`;
    day1Temp.innerHTML = `${Math.round(resultFromServer.list[7].main.temp-273.15)}°C`;
    day1Icon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.list[7].weather[0].icon + '.png';
    console.log(Math.round(resultFromServer.list[15].main.temp - 273.15))
    day2.innerHTML = `${days[now.getDay()+2]}`;
    day2Temp.innerHTML = `${Math.round(resultFromServer.list[15].main.temp-273.15)}°C`;

    day2Icon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.list[15].weather[0].icon + '.png';

    day3.innerHTML = `${days[now.getDay()+3]}`;
    day3Temp.innerHTML = `${Math.round(resultFromServer.list[23].main.temp-273.15)}°C`;
    day3Icon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.list[23].weather[0].icon + '.png';

    day4.innerHTML = `${days[now.getDay()+4]}`;
    day4Temp.innerHTML = `${Math.round(resultFromServer.list[31].main.temp-273.15)}°C`;
    day4Icon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.list[31].weather[0].icon + '.png';

    day5.innerHTML = `${days[now.getDay()+5]}`;
    day5Temp.innerHTML = `${Math.round(resultFromServer.list[39].main.temp-273.15)}°C`;
    day5Icon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.list[39].weather[0].icon + '.png';
};
