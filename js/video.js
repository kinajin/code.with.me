const fire = document.querySelector(".fire");
const rainy = document.querySelector(".rainy");
const wood = document.querySelector(".wood");
const typing = document.querySelector(".typing");
const beach = document.querySelector(".beach");
const grass = document.querySelector(".grass");

const backgroundVideo = document.querySelector(".backgroundVideo");
let audio = document.querySelector("audio");

function changeFireVideo() {
  backgroundVideo.src = "videos/fire.mp4";
  audio.src = "videos/fire_sound.mp3";
}

function changeRainyVideo() {
  backgroundVideo.src = "videos/rainy.mp4";
  console.log(backgroundVideo);
}

function changeWoodVideo() {
  backgroundVideo.src = "videos/wood.mp4";
  console.log(backgroundVideo);
}

function changeTypingVideo() {
  backgroundVideo.src = "videos/typing.mp4";
  console.log(backgroundVideo);
}

function changeBeachVideo() {
  backgroundVideo.src = "videos/beach.mp4";
  console.log(backgroundVideo);
}

function changeGrassVideo() {
  backgroundVideo.src = "videos/grass.mp4";
  console.log(backgroundVideo);
}

fire.addEventListener("click", changeFireVideo);
rainy.addEventListener("click", changeRainyVideo);
wood.addEventListener("click", changeWoodVideo);
typing.addEventListener("click", changeTypingVideo);
beach.addEventListener("click", changeBeachVideo);
grass.addEventListener("click", changeGrassVideo);

const soundIcon = document.querySelector(".soundIcon");

function changeAudioStatus() {
  audio.paused ? audio.play() : audio.pause();
}

soundIcon.addEventListener("click", changeAudioStatus);
