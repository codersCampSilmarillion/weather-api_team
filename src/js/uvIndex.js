
let uvIndex = document.getElementById("uv");

function setPositionUv() {
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
    let api = `http://api.openweathermap.org/data/2.5/uvi?appid=${APIKEY}&lat=${latitude}&lon=${longitude}`
    getUv(api);
}

function getUv(api) {
    const weather = {};

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.value<=2){
                weather.value = "Green: low";
            }
            else if (data.value<=5){
                weather.value = "Yellow: medium";
            }
            else if (data.value<=7){
                weather.value = "Orange: high";
            }
            else if (data.value<=10){
                weather.value = "Red: very high";
            }
            else {
                weather.value = "Violet: extreme";
            }

        })
        .then(function () {
            uvIndex.innerHTML = `${weather.value}`
        })
}

export {setPositionUv};