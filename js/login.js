const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginInput");
const greeting = document.querySelector(".hiUser");
const dashboard = document.querySelector(".dashboard");

const HIDDEN_CLASSNAME = "hidden";
const USENAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();

  const userName = loginInput.value;

  localStorage.setItem(USENAME_KEY, userName);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  dashboard.classList.remove(HIDDEN_CLASSNAME);

  greeting.innerText = "Hello " + userName;
}

const savedUsername = localStorage.getItem(USENAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  dashboard.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = "Hello " + userName;
}
