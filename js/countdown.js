const clockTitle = document.querySelector("#timer");
clockTitle.innerHTML = "00:00:00";
let t = 3600;

function getClock() {
  let hours = String(Math.floor(t / 1000 / 60 / 60) % 24).padStart(2, "0");
  let minutes = String(Math.floor(t / 1000 / 60) % 60).padStart(2, "0");
  let seconds = String(Math.floor(t / 1000) % 60).padStart(2, "0");
  console.log(t);
  console.log("s" + seconds);
  console.log("m" + minutes);
  clockTitle.innerText = hours + ":" + minutes + ":" + seconds;
  t--;
}
getClock();
setInterval(getClock, 1000);
