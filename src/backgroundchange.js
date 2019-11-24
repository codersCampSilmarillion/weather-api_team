function backgroundChange(resultFromServer) {
    (resultFromServer.weather[0].id <= 232) ? document.body.style.backgroundColor = 'black': //thunderstorm
        (resultFromServer.weather[0].id <= 321) ? document.body.style.backgroundColor = 'darkgrey' : //drizzle
        (resultFromServer.weather[0].id <= 531) ? document.body.style.backgroundColor = 'blue' : //rain
        (resultFromServer.weather[0].id <= 622) ? document.body.style.backgroundColor = 'ghostwhite' : //snow
        (resultFromServer.weather[0].id <= 781) ? document.body.style.backgroundColor = 'gold' : //atmosphere
        (resultFromServer.weather[0].id == 800) ? document.body.style.backgroundColor = 'aqua' : //clear sky
        document.body.style.backgroundColor = 'fuchsia'; //clouds
}

export { backgroundChange }
