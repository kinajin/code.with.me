const todoForm = document.querySelector(".todoForm");
const todoList = document.querySelector(".todoList");
const todoInput = document.querySelector("input");

function paintTodo(newTodo) {
  console.log(newTodo);
}

function handleTodoSumit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSumit);
