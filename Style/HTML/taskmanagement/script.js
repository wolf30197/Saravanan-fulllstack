document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const teamInput = document.getElementById('team-input');
    const taskList = document.getElementById('tasks');
    const completedList = document.getElementById('completed-tasks');
})
    // Load tasks from localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            if (window.location.pathname.includes('completed.html') && task.completed) {
                addTaskToDOM(task, completedList);
            } else if (window.location.pathname.includes('tasks.html') && !task.completed) {
                addTaskToDOM(task, taskList);
            }
        });
    }

    // Add a task to the DOM
    function addTaskToDOM(task, container) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <div class="task-name">${task.text} <span>(Team: ${task.team})</span></div>
            <div class="task-actions">
                ${!task.completed ? '<button class="btn-complete">Complete</button>' : ''}
                <button class="btn-delete">Delete</button>
            </div>
        `;

        container.appendChild(taskItem);

        // Add event listeners
        const completeButton = taskItem.querySelector('.btn-complete');
        if (completeButton) {
            completeButton.addEventListener('click', function() {
                task.completed = true;
                saveTasks();
                taskItem.classList.add('completed');
                completeButton.remove();
                addTaskToDOM(task, completedList);
                taskItem.remove();
            });
        }

        const deleteButton = taskItem.querySelector('.btn-delete');
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const updatedTasks = tasks.filter(t => t !== task);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        });
    }

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task-item').forEach(taskItem => {
            const task = {
                text: taskItem.querySelector('.task-name').textContent.split(' (Team: ')[0],
                team: taskItem.querySelector('.task-name').textContent.split(' (Team: ')[1].replace(')', ''),
                completed: taskItem.classList.contains('completed')
            };
            tasks.push(task);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Handle task form submission
    if (taskForm) {
        taskForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const taskText = taskInput.value.trim();
            const teamText = teamInput.value.trim();

            if (taskText === '' || teamText === '') {
                alert('Please fill out both fields');
                return;
            }

            const task = {
                text: taskText,
                team: teamText,
                completed: false
            };

        })
    }
    
