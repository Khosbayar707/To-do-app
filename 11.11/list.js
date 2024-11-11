let STATUS = "TODO" || "DONE";

let todos = [];

// add new to do task
function addTodo() {
  let input = prompt("Enter task name");
  todos.push({ name: input, status: "TODO" });
  render();
}

// change status

function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
  render();
}

// change name:

function editName(index, name) {
  let item = todos[index];
  item.name = name;
  render();
}

// delete from list:

// function deleteOne(number, newItem) {
//   todos.splice(number, 0, newItem);
// }

// delete item form list:
function deleteOneAgain(index) {
  let arr = [];
  for (i = 0; i < todos.length; i++) {
    if (i !== index) {
      arr.push(todos[i]);
    }
  }
  todos = arr;
  render();
}

// delete all tasks

function deleteAll() {
  todos = [];
  render();
}

// Count to do tasks

function countTodo() {
  let count = 0;
  for (let i = 0; i < todos.length; i++) {
    let item = todos[i];
    if (item.status === "TODO") {
      count++;
    }
  }
  return count;
  render();
}
const todoCount = countTodo();

// RUNNING APPLICATION-11/11
function render() {
  let todoList = document.querySelector("#tasks");
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let item = todos[i];

    // Create new task
    let element = document.createElement("div");
    element.classList.add("list-item");

    // Create task name
    let titleEl = document.createElement("p");
    element.classList.add("todo-name");
    titleEl.innerText = item.name;

    // Create edit button
    let edBtnEl = document.createElement("span");
    edBtnEl.innerHTML =
      '<span class="material-symbols-outlined">' + "edit" + "</span>";
    edBtnEl.onclick = function () {
      let newName = prompt("Enter new name:");
      editName(i, newName);
      render();
    };
    // Delete to do task
    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML =
      '<span class="material-symbols-outlined">' + "delete" + "</span>";
    deleteBtn.onclick = function () {
      index = i;
      // let deletelist = prompt("Delete from list:");
      deleteOneAgain(index);
      render();
    };

    element.appendChild(titleEl);
    element.appendChild(edBtnEl);
    element.appendChild(deleteBtn);
    todoList.appendChild(element);
  }
}
