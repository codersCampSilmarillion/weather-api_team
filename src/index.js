import "./styles.scss"; \\nie wiem po co to tu i czy to ma być tu


function searchWeather(searchedCity) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&APPID=0599898336f8892a2625cd0151ec957c&units=metric`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {
    (resultFromServer.weather[0].id <= 232) ? document.body.style.backgroundColor = 'black': //thunderstorm
        (resultFromServer.weather[0].id <= 321) ? document.body.style.backgroundColor = 'darkgrey' : //drizzle
        (resultFromServer.weather[0].id <= 531) ? document.body.style.backgroundColor = 'blue' : //rain
        (resultFromServer.weather[0].id <= 622) ? document.body.style.backgroundColor = 'ghostwhite' : //snow
        (resultFromServer.weather[0].id <= 781) ? document.body.style.backgroundColor = 'gold' : //atmosphere
        (resultFromServer.weather[0].id == 800) ? document.body.style.backgroundColor = 'aqua' : //clear sky
        document.body.style.backgroundColor = 'fuchsia'; //clouds;
}

document.getElementById('searchbutton').addEventListener('click', () => {
    let searchedCity = document.getElementById("searchInput").value;
    searchWeather(searchedCity)
})
