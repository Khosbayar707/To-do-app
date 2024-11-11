let STATUS = "TODO" || "DONE";

let todos = [{ name: "Geree tseverleh", status: "TODO" }];

// add new list to Todo

function addNew(newTodo) {
  todos.push(newTodo);
}
addNew({ name: "Hool hiih", status: "TODO" });
addNew({ name: "Huwtsas ugaah", status: "TODO" });
addNew({ name: "Untah", status: "TODO" });

// change status

function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}
editStatus(1, "DONE");

// change name:

function editName(index, name) {
  let item = todos[index];
  item.name = name;
}
editName(1, "Usand oroh");

// delete from list:

// function deleteOne(number, newItem) {
//   todos.splice(number, 0, newItem);
// }

// deleteOne(1, { name: "aygaa ugaah", status: "TODO" });
// console.log(todos);

// delete item form list 2nd
function deleteOneAgain(index) {
  let arr = [];
  for (i = 0; i < todos.length; i++) {
    if (i !== index) {
      arr.push(todos[i]);
    }
    todos = arr;
  }
}
deleteOneAgain(1);
// // delete all tasks

// function deleteAll() {
//   todos = [];
// }

// // Count to do tasks

// function countTodo() {
//   let count = 0;
//   for (let i = 0; i < todos.length; i++) {
//     let item = todos[i];
//     if (item.status === "TODO") {
//       count++;
//     }
//   }
//   return count;
// }

// const todoCount = countTodo();
// console.log(todoCount);
