document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskColor = document.getElementById('taskColor');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
  
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  
    taskList.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('delete')) {
        removeTask(e.target.parentElement);
      }
    });
  
    function addTask() {
      const taskText = taskInput.value;
      if (taskText) {
        const selectedColor = taskColor.value;
        const taskItem = createTaskElement(taskText, selectedColor);
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }
    }
  
    function createTaskElement(taskText, selectedColor) {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <span>${new Date().toLocaleString()}</span>
        <button class="delete">Delete</button>
      `;
      taskItem.classList.add(selectedColor);
      return taskItem;
    }
  
    function removeTask(taskItem) {
      taskList.removeChild(taskItem);
    }
  });
  