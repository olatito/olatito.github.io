const dayOfTheWeek = document.querySelector(
  '.day[data-testid="currentDayOfTheWeek"]'
);
const timeOfTheDay = document.querySelector(
  '.time[data-testid="currentUTCTime"]'
);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurdsay",
  "Friday",
  "Saturday",
];
const currentDate = new Date();
const currentDay = days[currentDate.getUTCDay()];
const currentUTCTime = currentDate.getTime();

const currentUTCTimeDate = new Date(currentUTCTime);

// Get hours and minutes in 12-hour format
let hours = currentUTCTimeDate.getUTCHours();
const minutes = currentUTCTimeDate.getUTCMinutes();

const currentTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

dayOfTheWeek.textContent = currentDay;
timeOfTheDay.textContent = currentTime;

// document.addEventListener('DOMContentLoaded', function () {
//   // Get the current day of the week
//   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   const currentDate = new Date();
//   const currentDay = daysOfWeek[currentDate.getUTCDay()];
//   const currentUTCTime = currentDate.getTime();

//   // Convert milliseconds to a Date object
//   const currentUTCTimeDate = new Date(currentUTCTime);

//   // Get hours and minutes in 24-hour format
//   const hours = currentUTCTimeDate.getUTCHours();
//   const minutes = currentUTCTimeDate.getUTCMinutes();

//   // Update the elements with dynamic data
//   document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
//   document.querySelector('[data-testid="currentUTCTime"]').textContent = `${hours}:${(minutes < 10 ? '0' : '')}${minutes}`;
// });
