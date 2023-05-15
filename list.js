//시간 표시하기
function showTime() {
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();
    const time = `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`;
    document.querySelector('.todo-title').innerText = time;
    setTimeout(showTime, 1000);
  }
  showTime();
//
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  const enterButton = document.querySelector(".enter");
  const clearButton = document.querySelector(".clear-all-btn");
  
  enterButton.addEventListener("click", addTodo);
  todoInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      addTodo();
    }
  });

  clearButton.addEventListener("click", clearAll);
  
  function addTodo() {
    const todo = todoInput.value;
    if (todo) {
        const li = document.createElement("li");
        li.innerHTML = `<button class="checkbox">✔️</button>
                        <div class="content">${todo}</div>
                        <button class="delBtn">✕</button>`;
        
      todoList.appendChild(li);
      todoInput.value = "";
      countLeftItems();
      li.setAttribute("data-completed", false);
      li.classList.add("todo-item")
    }
  }
  
  todoList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("complete-btn")) {
      const todoItem = target.closest("li");
      todoItem.classList.toggle("completed");
      if (todoItem.classList.contains("completed")) {
        target.innerText = "✅";
      } else {
        target.innerText = "✔️";
      }
      
      countLeftItems();
    } else if (target.classList.contains("delete-btn")) {
      const todoItem = target.closest("li");
      todoList.removeChild(todoItem);
      countLeftItems();
    }
  });
  
  function countLeftItems() {
    const leftItems = document.querySelector(".left-items");
    const count = document.querySelectorAll(".todo-list li:not(.completed)").length;
    leftItems.innerText = `🥕 오늘 할 일이 ${count}개 남았습니다 🥕`;
  }

  function clearAll() {
    todoList.innerHTML = "";
    countLeftItems();
  }
  
