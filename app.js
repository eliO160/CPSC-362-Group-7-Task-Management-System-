document.addEventListener('DOMContentLoaded', function () {
    const taskNameInput = document.getElementById('task-name-input');
    const addTaskBtn = document.getElementById('add-task-btn');

    addTaskBtn.addEventListener('click', function () {
        const taskName = taskNameInput.value.trim();
        if (taskName) {
            addTask(taskName);
        } else {
            alert('Please enter a task name.');
        }

        clearInput(taskNameInput);
    });
});

function addTask(taskName) {
    const taskItem = createTaskElement(taskName);
    appendToTodoColumn(taskItem);
}

function createTaskElement(taskName) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.textContent = taskName;

    const desc = prompt("Enter Description");
    const duedate = prompt("Enter Due Date MM/DD/YY");

    const moveToWipButton = createButton('Move to WIP', function () {
        moveToColumn(taskItem, 'wip-tasks');
    });

    const dropButtonTD = createButton('Drop', function () {
        dropTask(taskItem);
    });

    const deleteButton = createButton('Delete', function () {
        deleteTask(taskItem);
    });
    deleteButton.style.backgroundColor = '#9d1f2c'; // Red background

    const moveToCompleteButton = createButton('Move to Completed', function () {
        moveToColumn(taskItem, 'completed-tasks');
    });

    const updateButtons = createUpdateButtons(desc, duedate);

    taskItem.appendChild(moveToWipButton);
    taskItem.appendChild(dropButtonTD);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(moveToCompleteButton);
    taskItem.appendChild(updateButtons);

    return taskItem;
}

function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = 'btn-move-wip'; // Set appropriate class
    button.onclick = onClick;
    return button;
}

function createUpdateButtons(desc, duedate) {
    const container = document.createElement('div');

    const checkDescription = createButton('View Description', function () {
        if (desc) {
            window.confirm(desc);
        } else {
            window.confirm("No Description");
        }
    });

    const editDescription = createButton('Edit Description', function () {
        desc = prompt("Edit description", desc);
    });

    const checkDueDate = createButton('View Due Date', function () {
        window.confirm(duedate || "No Due Date");
    });

    const editDueDate = createButton('Edit Due Date', function () {
        duedate = prompt("Edit Due Date MM/DD/YY", duedate);
    });

    container.appendChild(checkDescription);
    container.appendChild(editDescription);
    container.appendChild(checkDueDate);
    container.appendChild(editDueDate);

    return container;
}

function appendToTodoColumn(taskItem) {
    const todoTasks = document.getElementById('todo-tasks');
    todoTasks.appendChild(taskItem);
}

function moveToColumn(taskItem, columnId) {
    const column = document.getElementById(columnId);
    column.appendChild(taskItem);
}

function dropTask(taskItem) {
    const droppedTasks = document.getElementById('dropped-tasks');
    droppedTasks.appendChild(taskItem);
}

function deleteTask(taskItem) {
    taskItem.remove();
}

function clearInput(inputElement) {
    inputElement.value = '';
}
