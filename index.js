const tasksBoard = document.getElementById("tasks");

function addTask() {
  const input = document.querySelector("#listBoard input");
  const text = " " + input.value;
  const newTask = document.createElement("li");
  newTask.classList.add("task");
  input.value = "";
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "removeTask";
  checkBox.placeholder = "Feito";
  checkBox.addEventListener("click", function () {
    tasksBoard.removeChild(newTask);
  });

  newTask.append(checkBox, text);
  tasksBoard.appendChild(newTask);
}

document.getElementById("addTask").addEventListener("click", addTask);

document.getElementById("clean").addEventListener("click", function () {
  const tasks = document.querySelectorAll("#tasks li");
  tasks.forEach(function (task) {
    task.remove();
  });
});
