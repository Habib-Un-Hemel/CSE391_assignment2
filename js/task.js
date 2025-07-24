//arrary -> object     // {text: "Buy milk", completed: false}

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task-button");
  const taskList = document.getElementById("task-list");

  // Load tasks from localStorage|If there’s no data, it starts with an empty array.
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Function to save tasks to localStorage
  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  // key=tasks***

  // Function to render tasks
  const renderTasks = () => {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
      const taskItem = document.createElement("li");
      taskItem.className = `task-item ${task.completed ? "completed" : ""}`;
      taskItem.innerHTML = `
                <input type="checkbox" ${
                  task.completed ? "checked" : ""
                } data-index="${index}">
                <span>${task.text}</span>
                <button data-index="${index}">Delete</button>
            `;
      taskList.appendChild(taskItem);
    });
  };

  // Function to add a new task
  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      tasks.push({ text: taskText, completed: false });
      taskInput.value = "";
      saveTasks();
      renderTasks();
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
  };

  // Event listeners

  // add id instead of type
  addTaskButton.addEventListener("click", addTask);
  // whole task list (<ul id="task-list">).



  taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      deleteTask(e.target.dataset.index);
    } else if (e.target.tagName === "INPUT") {
      toggleTaskCompletion(e.target.dataset.index);
    }
  });

  // Initial render
  renderTasks();
});


// // "[{\"text\":\"Buy milk\",\"completed\":false},{\"text\":\"Learn JavaScript\",\"completed\":true}]"
// const fruits = ["apple", "banana", "mango"];

// fruits.forEach((fruit, index) => {
//   console.log("Fruit:", fruit, "at index:", index);
// });
// Fruit: apple at index: 0
// Fruit: banana at index: 1
// Fruit: mango at index: 2
  //  event delegation.
  // You don't add listeners to each button/input directly.
  // Instead, you handle all clicks in one place by checking e.target.
  //data-indexIt fetches the data-index from that button
  // e.target; // refers to this <button> e is the event object — it contains info about what was clicked
  // <button data-index="1">Delete</button>;
//  e is the event object, which JavaScript automatically provides when an event (like a click) happens.
//e.target refers to the actual HTML element that was clicked.