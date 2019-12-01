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
  var time = setTimeout(dateFormat, 500);
  haur.innerHTML = time;
}

export { getDate, getTime };
