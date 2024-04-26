document.addEventListener('DOMContentLoaded', function () {
    const kanbanBoard = new KanbanBoard();

    const taskNameInput = document.getElementById('task-name-input');
    const addTaskBtn = document.getElementById('add-task-btn');

    addTaskBtn.addEventListener('click', async function () {
        const taskName = taskNameInput.value.trim();
        if (taskName) {
            kanbanBoard.addTask(taskName);
        } else {
            alert('Please enter a task name.');
        }

        clearInput(taskNameInput);

        try {
            // Make a POST request to create a new task
            const newTask = await createTask(taskName);
            console.log('Task created:', newTask);
            // Add logic to update UI if needed
        } catch (error) {
            // Handle errors
        }
    });
});

class Task {
    constructor(name) {
        this.name = name;
        this.description = prompt("Enter Description");
        this.dueDate = prompt("Enter Due Date MM/DD/YY");
        this.element = this.createTaskElement();
    }

    createTaskElement() {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.textContent = this.name;

        const moveToWipButton = this.createButton('Move to WIP', () => {
            this.moveToColumn('wip-tasks');
        });

        const dropButtonTD = this.createButton('Drop', () => {
            this.dropTask();
        });

        const deleteButton = this.createButton('Delete', () => {
            this.deleteTask();
        });
        deleteButton.style.backgroundColor = '#9d1f2c';

        const moveToCompleteButton = this.createButton('Move to Completed', () => {
            this.moveToColumn('completed-tasks');
        });

        const updateButtons = this.createUpdateButtons();

        taskItem.appendChild(moveToWipButton);
        taskItem.appendChild(dropButtonTD);
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(moveToCompleteButton);
        taskItem.appendChild(updateButtons);

        return taskItem;
    }

    createButton(text, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = 'btn-move-wip';
        button.onclick = onClick.bind(this);
        return button;
    }

    createUpdateButtons() {
        const container = document.createElement('div');

        const checkDescription = this.createButton('View Description', () => {
            window.confirm(this.description || "No Description");
        });

        const editDescription = this.createButton('Edit Description', () => {
            this.description = prompt("Edit description", this.description);
        });

        const checkDueDate = this.createButton('View Due Date', () => {
            window.confirm(this.dueDate || "No Due Date");
        });

        const editDueDate = this.createButton('Edit Due Date', () => {
            this.dueDate = prompt("Edit Due Date MM/DD/YY", this.dueDate);
        });

        container.appendChild(checkDescription);
        container.appendChild(editDescription);
        container.appendChild(checkDueDate);
        container.appendChild(editDueDate);

        return container;
    }

    moveToColumn(columnId) {
        const column = document.getElementById(columnId);
        column.appendChild(this.element);
    }

    dropTask() {
        const droppedTasks = document.getElementById('dropped-tasks');
        droppedTasks.appendChild(this.element);
    }

    deleteTask() {
        this.element.remove();
    }
}

class KanbanBoard {
    constructor() {
        this.todoColumn = document.getElementById('todo-tasks');
    }

    addTask(taskName) {
        const task = new Task(taskName);
        this.todoColumn.appendChild(task.element);
    }
}

function clearInput(inputElement) {
    inputElement.value = '';
}


// Function to make a POST request to create a new task
async function createTask(taskName) {
    try {
        const response = await fetch('http://localhost:5500/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: taskName,
                // Add other properties like description, dueDate, status if needed
            })
        });

        if (!response.ok) {
            throw new Error('Failed to create task');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}

// Function to make a GET request to fetch tasks
async function fetchTasks() {
    try {
        const response = await fetch('http://localhost:5500/tasks');

        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}
