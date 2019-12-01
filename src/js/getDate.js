//date
function getDate() {
  const dateFormat = require("dateformat");
  let today = new Date();
  let date = document.getElementById("date");
  date.innerHTML = dateFormat(today, "mmmm dS, yyyy");
}

function getTime() {
  const dateFormat = require("dateformat");
  let today = new Date();
  let haur = document.getElementById("haur");
  dateFormat(today, "h:MM:ss TT");
  var time = setTimeout(getDate, 500);
  haur.innerHTML = time;
  var t = setTimeout(startTime, 500);
}

export { getDate, getTime };
