// Get the input field, button, and the task list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim(); // Get the task from input field

  if (taskText !== '') {
    // Create a new list item for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    
    // Add event listener to remove button
    removeBtn.addEventListener('click', () => {
      taskList.removeChild(li); // Remove the task from the list
    });

    // Append the remove button to the task item
    li.appendChild(removeBtn);

    // Add the new task item to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }
}

// Optional: Allow pressing Enter to add task
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
