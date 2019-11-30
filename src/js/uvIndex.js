
let uvIndex = document.getElementById("uv");


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

export {getUv};