const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let todos = [];

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = todoInput.value;

  const newTodo = {
    id: Date.now().toString() + "-" + Math.random().toString(36).slice(2, 8), //현재 시간 알려줌
    text: text,
    completed: false,
  };
  todos.push(newTodo);
  todoInput.value = "";
  console.log(todos);

  localStorage.setItem("daily-note", JSON.stringify(todos));
});
// preventDefault는 새로고침 하지 않고 이벤트를 실행시켜라 라는 함수
// const item = document.createElement("li");
// item.textContent = text;
// todoList.append(item);
// JSON.stringify 제이슨 형식으로 문자열 형태로 직렬화 하겠다.
