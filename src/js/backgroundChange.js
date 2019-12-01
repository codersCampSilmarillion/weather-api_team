let first1 = [document.querySelector('#date'), document.querySelector('#haur')];
let first2 = document.querySelectorAll('.detailed-info__title');
let first3 = document.querySelectorAll('.this-week__day');
let first4 = document.querySelectorAll('.this-week__date');
let first = [...first1, ...first2, ...first3, ...first4];

let second1 = [document.querySelector('#city'), document.querySelector('#temp'), document.querySelector("#description"), document.querySelector("#alerts")];
let second2 = document.querySelectorAll('.detailed-info__value');
let second3 = document.querySelectorAll('.this-week__temp');
let second = [...second1, ...second2, ...second3]


//funkcja zmieniająca tło
function backgroundChange(resultFromServer) {
    if (resultFromServer.id <= 232) { //thunderstorm
        document.body.style.background = 'linear-gradient(#424242, white)';
        first.forEach(el => el.style.color = '#4C4C4C');
        second.forEach(el => el.style.color = '#191919');
    } else if (resultFromServer.id <= 531) { //rain and drizzle
        document.body.style.background = 'linear-gradient(#0D47A1, white)';
        first.forEach(el => el.style.color = '#9999FF');
        second.forEach(el => el.style.color = '#000033');
    } else if (resultFromServer.id <= 622) { //snow
        document.body.style.background = 'linear-gradient(#CDCDCD, white)';
        first.forEach(el => el.style.color = '#A1A1A1');
        second.forEach(el => el.style.color = '#434343');
    } else if (resultFromServer.id <= 781) { //atmosphere
        document.body.style.background = 'linear-gradient(#FFEE58, white)';
        first.forEach(el => el.style.color = '#FFCA28');
        second.forEach(el => el.style.color = '#F57F17');
    } else if (resultFromServer.id <= 801) { //clear sky and few clouds
        document.body.style.background = 'linear-gradient(#79CED2, white)';
        first.forEach(el => el.style.color = '#3366FF');
        second.forEach(el => el.style.color = '#003366');
    } else { //clouds
        document.body.style.background = 'linear-gradient(#757575 ,white)';
        first.forEach(el => el.style.color = '#9E9E9E');
        second.forEach(el => el.style.color = '#191919');
    }
}


export { backgroundChange }
