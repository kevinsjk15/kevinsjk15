document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.className = "task-item";
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Eliminar</button>
                <button class="complete-btn">Entregar</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";

            const completeBtn = taskItem.querySelector(".complete-btn");
            completeBtn.addEventListener("click", function () {
                taskItem.style.backgroundColor = "#66bb6a"; // Cambiar color a verde
                completeBtn.disabled = true; // Deshabilitar el botón después de entregar
            });

            const deleteBtn = taskItem.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", function () {
                taskItem.remove();
            });
        }
    }
});
