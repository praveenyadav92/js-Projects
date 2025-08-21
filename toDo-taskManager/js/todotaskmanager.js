let tasks = JSON.parse(localStorage.getItem("task")) || [];

const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("selectPriority");
const addTaskBtn = document.getElementById("addTaskBtn");
const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");

function saveTasks() {
    localStorage.setItem("task", JSON.stringify(tasks));
}

function renderTasks(filter = "") {
    taskList.innerHTML = "";
    tasks
        .filter(task => task.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach((task, index) => {
            const taskItem = document.createElement("div");
            taskItem.className = `sectionWrapper__tasklist--result ${task.priority.toLowerCase()}`;

            taskItem.innerHTML = `
                <div class="value">${task.name}</div>
                <div class="btnWrapper">
                    <button class="editBtn" onclick="editTask(${index})">
                        <img src="assets/images/icon/editIcon.png" class="img-fluid u-image">
                    </button>
                    <button class="delBtn" onclick="deleteTask(${index})">
                        <img src="assets/images/icon/deleteIcon.png" class="img-fluid u-image">
                    </button>
                </div>
            `;
            taskList.appendChild(taskItem);
        });
}

addTaskBtn.addEventListener("click", () => {
    const name = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (!name) {
        alert("Please enter task name.");
        return;
    }

    if (!priority) {
        alert("Please select priority.");
        return;
    }

    tasks.push({ name, priority });
    saveTasks();
    renderTasks();
    taskInput.value = "";
    prioritySelect.value = "";
});

function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }
}

function editTask(index) {
    const newName = prompt("Edit task name:", tasks[index].name);
    const newPriority = prompt("Edit priority (Low, Medium, High):", tasks[index].priority);

    if (newName && ["Low", "Medium", "High"].includes(newPriority)) {
        tasks[index].name = newName.trim();
        tasks[index].priority = newPriority;
        saveTasks();
        renderTasks();
    } else {
        alert("Invalid input!");
    }
}

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value;
    renderTasks(searchText);
});

window.addEventListener("DOMContentLoaded", () => {
    renderTasks();
});
