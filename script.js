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

let hours = currentUTCTimeDate.getUTCHours();
const minutes = currentUTCTimeDate.getUTCMinutes();

const currentTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${amOrPm}`;

dayOfTheWeek.textContent = currentDay;
timeOfTheDay.textContent = currentTime;
