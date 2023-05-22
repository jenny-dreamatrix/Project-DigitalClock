

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const datumOutput = document.querySelector(".datum-output");
const hourOutput = document.querySelector(".hour-output");
const minutesOutput = document.querySelector(".minutes-output");
const secondsOutput = document.querySelector(".seconds-output");
const periodOutput = document.querySelector(".period-output");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let monthName = monate[month];
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();
let weekday = date.toLocaleString("default", {weekday: "long"});
let weekdayShort = date.toLocaleString("default", {weekday: "short"});
let period = hour < 12 ? "AM" : "PM";

if(hour < 10){
    hour = hour.toString();
    hour = `0${hour}`
}
if(minute < 10){
    minute = minute.toString();
    minute = `0${minute}`
}
if(seconds < 10){
    seconds = seconds.toString();
    seconds = `0${seconds}`
}

datumOutput.innerHTML = `${weekday}, der ${day}. ${monthName} ${year}`;
hourOutput.innerHTML = hour;
minutesOutput.innerHTML = minute;

