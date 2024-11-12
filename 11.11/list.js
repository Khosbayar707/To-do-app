let STATUS = "TODO" || "DONE";

let todos = [];

// add new to do task
function addTodo() {
  let modal = document.querySelector("#modal");
  modal.style.display = "block";

  render();
}

// save tasks by submit button

function saveTask() {
  let inputValue = document.getElementById("task-name").value;
  let statusValue = document.getElementById("task-status").value;
  todos.push({ name: inputValue, status: statusValue });

  let modal = document.querySelector("#modal");
  modal.style.display = "none";

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
  document.getElementById("Todo").innerHTML = "";
  document.getElementById("In-progress").innerHTML = "";
  document.getElementById("Done").innerHTML = "";
  document.getElementById("Blocked").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let containerName = todos[i].status;
    let todoList = document.getElementById(containerName);
    let taskList = todoList.querySelector(".tasks");

    let item = todos[i];
    // Create new task
    let element = document.createElement("div");
    element.classList.add("list-item");

    // Create task name
    let titleEl = document.createElement("p");
    element.classList.add("todo-name");
    titleEl.innerText = item.name;
    let buttons = document.createElement("div");

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
      '<span class="material-symbols-outlined icon-trash">' +
      "delete" +
      "</span>";
    deleteBtn.onclick = function () {
      index = i;
      // let deletelist = prompt("Delete from list:");
      deleteOneAgain(index);
      render();
    };

    buttons.appendChild(edBtnEl);
    buttons.appendChild(deleteBtn);

    element.appendChild(titleEl);
    element.appendChild(buttons);

    taskList.appendChild(element);
  }
}
