let STATUS = "TODO" || "DONE";

let todos = [];

// change status

function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}

// change name:

function editName(index, name) {
  let item = todos[index];
  item.name = name;
}

// delete from list:

function deleteOne(number, newItem) {
  todos.splice(number, 0, newItem);
}

// delete item form list 2nd
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
}

const todoCount = countTodo();

// RUNNING APPLICATION-11/11
function render() {
  let todoList = document.querySelector("#tasks");
  todoList.innerHTML = "";

  console.log(todoList);

  for (let i = 0; i < todos.length; i++) {
    let item = todos[i];
    // Create new task

    let element = document.createElement("div");
    element.classList.add("todo-item");

    // Create task name

    let titleEl = document.createElement("p");
    titleEl.innerText = item.name;

    // Create edit button

    let edBtnEl = document.createElement("button");
    edBtnEl.innerText = "Edit";
    edBtnEl.onclick = function () {
      let newName = prompt("Enter new name:");
      editName(i, newName);
      render();
    };
    // Delete to do

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
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

function addTodo() {
  let input = prompt("Enter todo name");
  todos.push({ name: input, status: "TODO" });
  render();
}
