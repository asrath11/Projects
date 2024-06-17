function updateClock() {
  let now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth();
  let date = now.getDate();
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period = "A.M";

  if (hours >= 12) {
    period = "PM";
  }
  if (hours > 12) {
      hours = hours - 12;
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let Day = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wedday",
    "Thuday",
    "Friday",
    "Satday",
  ];

  let time = document.getElementById("time");
  let dayname = document.getElementById("dayname");
  let Period = document.getElementById("period");
  Period.innerHTML = period;
  dayname.innerHTML = Day[day] + ", " + Month[month] + " " + date + ", " + year;
  time.innerHTML = hours + " : " + minutes + " : " + seconds;
}

function init() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

init();
