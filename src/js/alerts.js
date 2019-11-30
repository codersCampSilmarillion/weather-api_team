let alerts_container = document.getElementById("alerts");

function alerts(weather) {
    if (weather.temp <= 0) {
        alerts_container.innerHTML = "It is really cold outside! Dress warmly!❄";
    } else if (weather.temp >= 30) {
        alerts_container.innerHTML = "It is really hot outsie! Take a cap and remember to drink a lot of water!🔥";
    } else { alerts_container.innerHTML = "Currently no alerts"; }
    if (weather.rain === "Rain" || weather.rain === "Drizzle") {
        alerts_container.innerHTML = "It is raining outside! Take an umbrella with you! ☔";
    } else if (weather.rain === "Thunderstorm") {
        alerts_container.innerHTML = "There is THUNDERSTORM! Better stay home today!⚡";
    }
    if (weather.wind > 10) {
        alerts_container.innerHTML = "It is windy ouside today. Stay safe!💨";
    }
}

export { alerts }