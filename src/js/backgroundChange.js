
//funkcja zmieniająca tło
function backgroundChange(resultFromServer) {
    (resultFromServer.id <= 232) ? document.body.style.backgroundColor = 'black' : //thunderstorm
        (resultFromServer.id <= 321) ? document.body.style.backgroundColor = 'darkgrey' : //drizzle
            (resultFromServer.id <= 531) ? document.body.style.backgroundColor = 'blue' : //rain
                (resultFromServer.id <= 622) ? document.body.style.backgroundColor = 'ghostwhite' : //snow
                    (resultFromServer.id <= 781) ? document.body.style.backgroundColor = 'gold' : //atmosphere
                        (resultFromServer.id == 800) ? document.body.style.backgroundColor = 'aqua' : //clear sky
                            document.body.style.backgroundColor = 'fuchsia'; //clouds
}


export {backgroundChange}