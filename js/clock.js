const clock = document.querySelector("h3#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  const fullClock = hour + ":" + minute + ":" + second;
  clock.innerHTML = fullClock;

  console.log(fullClock);
}

setInterval(getClock, 1000);
