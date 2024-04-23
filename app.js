document.addEventListener('DOMContentLoaded', function() {
    const taskNameInput = document.getElementById('task-name-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const todoTasks = document.getElementById('todo-tasks');
    const wipTasks = document.getElementById('wip-tasks');
    const droppedTasks = document.getElementById('dropped-tasks');
    const completedTasks = document.getElementById('completed-tasks');
 
    addTaskBtn.addEventListener('click', function() {
        const taskName = taskNameInput.value.trim();
        const now = new Date();
 
        const currentDateTime = now.toLocaleString();
        if (taskName) {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.textContent = taskName;
            var desc = prompt("Enter Description");
            var duedate = prompt("Enter Due Date MM/DD/YY");
 
 
            // Create Move to WIP Button
            const moveToWipButton = document.createElement('button');
            moveToWipButton.textContent = 'Move to WIP';
            moveToWipButton.className = 'btn-move-wip';
            moveToWipButton.onclick = function() {
                wipTasks.appendChild(taskItem);
                taskItem.removeChild(moveToWipButton);
                taskItem.removeChild(dropButtonTD);
                taskItem.removeChild(deleteItemTodo);
                taskItem.appendChild(moveToCompleteButton);
                taskItem.appendChild(dropButtonWD);
                taskItem.appendChild(deleteItemWIP);
            };
 
            // Create Dropped Button ToDo -> Drop
            const dropButtonTD = document.createElement('button');
            dropButtonTD.textContent = 'Drop';
            dropButtonTD.className = 'btn-drop';
            dropButtonTD.onclick = function() {
                droppedTasks.appendChild(taskItem);
                taskItem.removeChild(moveToWipButton);
                taskItem.removeChild(dropButtonTD);
                taskItem.removeChild(editDescription);
                taskItem.removeChild(deleteItemTodo);
                taskItem.appendChild(deleteItemDropped);
            };
 
            // Create Dropped Button WIP -> Drop
            const dropButtonWD = document.createElement('button');
            dropButtonWD.textContent = 'Drop';
            dropButtonWD.className = 'btn-drop';
            dropButtonWD.onclick = function() {
                droppedTasks.appendChild(taskItem);
                taskItem.removeChild(moveToCompleteButton);
                taskItem.removeChild(dropButtonWD);
                taskItem.removeChild(editDescription);
                taskItem.removeChild(editDueDate);
                taskItem.removeChild(deleteItemWIP);
                taskItem.appendChild(deleteItemDropped);
            };
 
            // Create Move to Completed Button
            const moveToCompleteButton = document.createElement('button');
            moveToCompleteButton.textContent = 'Move to Completed';
            moveToCompleteButton.className = 'btn-move-complete';
            moveToCompleteButton.onclick = function() {
                completedTasks.appendChild(taskItem);
                taskItem.removeChild(moveToCompleteButton);
                taskItem.removeChild(dropButtonWD);
                taskItem.removeChild(editDescription);
                taskItem.removeChild(editDueDate);
                taskItem.removeChild(deleteItemWIP);
                taskItem.appendChild(deleteItemComplete);
            };
 
            //Check description 
            const checkDescription = document.createElement('button');
            checkDescription.textContent = 'View Description';
            checkDescription.className = 'btn-move-complete';
            checkDescription.onclick = function() {
                if (desc)
                {window.confirm(desc);}
                else {
                window.confirm("No Description");
                }
            };
 
            //Edit description 
            const editDescription = document.createElement('button');
            editDescription.textContent = 'Edit Description';
            editDescription.className = 'btn-move-complete';
            editDescription.onclick = function() {
                desc = prompt("Edit description");
            };
 
            //Check time 
            const checkTime = document.createElement('button');
            checkTime.textContent = 'View Time';
            checkTime.className = 'btn-move-complete';
            checkTime.onclick = function() {
                window.confirm(currentDateTime);
            };
 
            //Check Due Date
            const checkDueDate = document.createElement('button');
            checkDueDate.textContent = 'View Due Date';
            checkDueDate.className = 'btn-move-complete';
            checkDueDate.onclick = function() {
                window.confirm(duedate);
            };
 
            //Edit Due Date
            const editDueDate = document.createElement('button');
            editDueDate.textContent = 'Edit Due Date';
            editDueDate.className = 'btn-move-complete';
            editDueDate.onclick = function() {
                duedate = prompt("Edit description");
            };
 
            //Delete Todo Task
            const deleteItemTodo = document.createElement('button');
            deleteItemTodo.textContent = 'Delete Task';
            deleteItemTodo.className = 'btn-move-complete';
            deleteItemTodo.onclick = function() {
                if (confirm("Would you like to delete task?") == true)
                { todoTasks.removeChild(taskItem);}
                else{
                }
            };
 
            //Delte WIP Task
            const deleteItemWIP = document.createElement('button');
            deleteItemWIP.textContent = 'Delete Task';
            deleteItemWIP.className = 'btn-move-complete';
            deleteItemWIP.onclick = function() {
                if (confirm("Would you like to delete task?") == true)
                { wipTasks.removeChild(taskItem);}
                else{
                }                
            };
 
            //Delete Complete Task
            const deleteItemComplete = document.createElement('button');
            deleteItemComplete.textContent = 'Delete Task';
            deleteItemComplete.className = 'btn-move-complete';
            deleteItemComplete.onclick = function() {
                if (confirm("Would you like to delete task?") == true)
                { completedTasks.removeChild(taskItem);}
                else{
                }            
                };
 
            //Delete Dropped Task
            const deleteItemDropped = document.createElement('button');
            deleteItemDropped.textContent = 'Delete Task';
            deleteItemDropped.className = 'btn-move-complete';
            deleteItemDropped.onclick = function() {
                if (confirm("Would you like to delete task?") == true)
                { droppedTasks.removeChild(taskItem);}
                else{
                    window.confirm("cancled");
                }
            };
 
            // Add buttons to the task item
            taskItem.appendChild(checkDescription);
            taskItem.appendChild(editDescription);
            taskItem.appendChild(moveToWipButton);
            taskItem.appendChild(dropButtonTD);
            taskItem.appendChild(checkTime)
            taskItem.appendChild(checkDueDate);
            taskItem.appendChild(editDueDate);
            taskItem.appendChild(deleteItemTodo);
 
            // Add the task to the 'To Do' column
            todoTasks.appendChild(taskItem);
 
            // Clear the input field
            taskNameInput.value = '';
            taskDescInput.value = '';
        } else {
            alert('Please enter a task name.');
        }
    });
 });
 