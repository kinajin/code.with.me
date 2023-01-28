const API_KEY = "41fa676e482b55163f30215392a30043";

const temp = document.querySelector("#temp");
const area = document.querySelector("#area");
const weather = document.querySelector("#weather");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log("You Live in", lat, lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const areaData = data.name;
      const weatherData = data.weather[0].main;
      const tempData = data.main.temp;

      console.log(areaData);
      console.log("-----");
      console.log(weatherData);
      console.log("-----");
      console.log(tempData);

      area.innerHTML = areaData;
      weather.innerHTML = weatherData;
      temp.innerHTML = tempData;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
