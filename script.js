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

dayOfTheWeek.textContent = currentDay;
timeOfTheDay.textContent = currentUTCTime;
