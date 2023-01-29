const clockTitle = document.querySelector("#timer");
clockTitle.innerHTML = "00:00:00";
let t = 3600;

function getClock() {
  let minutes = Math.floor(t / 60);

  let seconds = Math.floor(t % 60);
  console.log((t / 1000 / 60) % 24);
  console.log("s" + seconds);
  console.log("m" + minutes);
  clockTitle.innerText = "00" + ":" + minutes + ":" + seconds;
  t--;
}
getClock();
setInterval(getClock, 1000);
