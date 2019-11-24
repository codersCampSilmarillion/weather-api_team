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



