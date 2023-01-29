const todoForm = document.querySelector(".todoForm");
const todoList = document.querySelector(".todoList");
const todoInput = document.querySelector("input");

const TODOS_KEY = "TODOS_KEY";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = " X ";

  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
}

function handleTodoSumit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleTodoSumit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
