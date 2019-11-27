
//funkcja pobierająca dane o prognozie na 5dni na podstawie danych geograficznych
function dailyPrognoseByLocation(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=0599898336f8892a2625cd0151ec957c`).then(result => {
        return result.json();
    }).then(result => {
        thisWeek(result)
    })
}

//funckja zamieniająca kelwiny na stopnie celsjusza w przyblizeniu
function celsius(fahrenheit) {
    return `${Math.round(fahrenheit-273.15)}°C`
}

//funkcja pokazująca prognozę na 5 dni
function thisWeek(resultFromServer) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    let now = new Date();
    let daysSume = now.getDate()
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
    day1Temp.innerHTML = celsius(resultFromServer.list[7].main.temp);
    now.setDate(daysSume + 1);
    daysSume = now.getDate();
    day1Date.innerHTML = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    day1Icon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.list[7].weather[0].icon + '.png';

    day2.innerHTML = `${days[now.getDay()+1]}`;
    day2Temp.innerHTML = celsius(resultFromServer.list[15].main.temp)
    now.setDate(daysSume + 1);
    daysSume = now.getDate();
    day2Date.innerHTML = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    day2Icon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.list[15].weather[0].icon + '.png';

    day3.innerHTML = `${days[now.getDay()+1]}`;
    day3Temp.innerHTML = celsius(resultFromServer.list[23].main.temp);
    now.setDate(daysSume + 1);
    daysSume = now.getDate();
    day3Date.innerHTML = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    day3Icon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.list[23].weather[0].icon + '.png';

    day4.innerHTML = `${days[now.getDay()+1]}`;
    day4Temp.innerHTML = celsius(resultFromServer.list[31].main.temp);
    now.setDate(daysSume + 1);
    daysSume = now.getDate();
    day4Date.innerHTML = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    day4Icon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.list[31].weather[0].icon + '.png';

    day5.innerHTML = `${days[now.getDay()+1]}`;
    day5Temp.innerHTML = celsius(resultFromServer.list[39].main.temp);
    now.setDate(daysSume + 1);
    day5Date.innerHTML = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
    day5Icon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.list[39].weather[0].icon + '.png';

};

export {dailyPrognoseByLocation, thisWeek};