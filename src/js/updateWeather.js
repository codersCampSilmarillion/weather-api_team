let city = document.getElementById("city");
let temp = document.getElementById("temp");
let desc = document.getElementById("description");
let icon = document.getElementById("icon");
let cloud = document.getElementById("cloud");
let cloudDesc = document.getElementById("cloudDesc");
let detailetDesc = document.getElementById("detailedDesc");


function updateWeather(weather) {
    city.innerHTML = `${weather.city} ${weather.country}`;
    temp.innerHTML = `${weather.temp} C&deg`;
    desc.innerHTML = `${weather.description}`;
    detailetDesc.innerHTML = `${weather.main}`;
    icon.innerHTML = `${weather.icon}`;
    cloud.innerHTML = `${weather.cloud}`;
    cloudDesc.innerHTML = `${weather.cloudDesc}`;

}

export {updateWeather};