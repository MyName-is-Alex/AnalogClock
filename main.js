setInterval(setTime, 1000);

const hoursHand = document.querySelector('[data-hours-hand]');
const minutesHand = document.querySelector('[data-minutes-hand]');
const secondsHand = document.querySelector('[data-seconds-hand]');

function setTime() {
  const currentTime = new Date();
  const secondsRatio = currentTime.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentTime.getHours()) / 12;

  setRotation(hoursHand, hoursRatio);
  setRotation(minutesHand, minutesRatio);
  setRotation(secondsHand, secondsRatio);

  console.log(secondsRatio);
}
setTime();

function setRotation(element, timeRatio) {
  element.style.setProperty('--rotation', timeRatio * 360);
}
