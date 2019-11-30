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
  haur.innerHTML = dateFormat(today, "h:MM:ss TT");
}

export { getDate, getTime };
