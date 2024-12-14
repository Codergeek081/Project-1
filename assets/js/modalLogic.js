// Create variables that select the form and input elements
const taskForm = document.getElementById('modalForm');
const taskTitleInput = document.getElementById('taskTitleInput');
const submitFormButton = document.getElementById('submitButton');
const errorText = document.getElementById('error');


//--------------------------------------------------------------------
//                CLEAR AND CLOSE THE MODAL ON FORM SUBMISSION
//--------------------------------------------------------------------

    // taskForm.reset(); -- RE-ENABLING THIS LINE SEEMS TO BREAK THE ERROR HANDLING
    modal.style.display = 'none';



// Create logic for "Add a Task" modal submission that, on submission: creates an object and saves that object to local storage
//     Object name: taskObject
//     Object keys: taskTitle and taskTimeOfDay
//          Event listener should seek id=submitButton

// Event listener for the submit button
submitFormButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check for empty fields, prevent submission if true
    if (!taskTitleInput.value.trim() || !document.querySelector('input[name="Time of Day"]:checked')) {
        errorText.textContent = "Please make sure that a task has been entered and a time of day has been selected.";
        return; // Exit the function if validation fails
    }

    // If validation passes, create the task object
    createTaskObject();

    // **RENDERING THE TASKS HERE IS CAUSING DUPLICATION ON FORM SUBMISSION**
    renderTasks();

});

// Create taskObject

// Create taskObject
function createTaskObject() {
    const taskObject = {
        taskTitle: taskTitleInput.value.trim(),
        taskTimeOfDay: document.querySelector('input[name="Time of Day"]:checked').value // Get the selected radio button value
    };

    // Retrieve existing tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Initialize as empty array if no tasks exist

    // Add the new task object to the tasks array
    tasks.push(taskObject);

    // Save the updated tasks array back to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Saved Task Data:', taskObject);

    // Clear the form inputs and close the modal
    taskForm.reset(); // Reset the form fields
    errorText.textContent = ""; // Clear any error messages

    // Hide the Bootstrap Modal
    const modal = document.getElementById('formModal');
    const bootstrapModal = bootstrap.Modal.getInstance(modal); // Get the Bootstrap modal instance
    bootstrapModal.hide(); // Hide the modal




};

//--------------------------------------------------------------------
// COLLAPSE THE NAVBAR WHEN "ADD A TASK" IS SELECTED - CURRENTLY BORKED
//--------------------------------------------------------------------

// document.getElementById('addTaskLink').addEventListener('click', function() {
//     // Collapse the navbar
//     var navbarCollapse = document.getElementById('navbarSupportedContent');
//     var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
//       toggle: false
//     });
//     bsCollapse.hide(); // Hide the navbar
//   });