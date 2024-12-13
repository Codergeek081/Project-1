// Create variables that select the form and input elements
const taskForm = document.getElementById('modalForm');
const taskTitleInput = document.getElementById('taskTitleInput');
const taskTimeOfDayInput = document.getElementsByClassName('timeOfDaySelect');
const timeOfDaySelect = document.getElementsByClassName('timeOfDaySelect');
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

submitFormButton.addEventListener('click', function (event) {
    event.preventDefault();

    //Check for empty fields, prevent submission if true

    if (!taskTitleInput.value.trim() || !taskTimeOfDayInput.value) {
        error.textContent = "Please make sure that a task has been entered and a time of day has been selected.";
        return;
    };

    createTaskObject();

});

// Create taskObject

function createTaskObject() {

    const taskObject = {

        taskTitle: taskTitleInput.value.trim(),
        taskTimeOfDay: document.querySelector('input[name="timeOfDay"]:checked').value, // timeOfDay buttion must be a radio button

    };

    //Save to local storage and console log what is saved

    localStorage.setItem('taskObject', JSON.stringify(taskObject));
    console.log('Saved Task Data:', taskObject);

    // Clear the form inputs and close the modal
    taskForm.reset(); // Reset the form fields
    modal.style.display = 'none'; // Close the modal
    errorText.textContent = ""; // Clear any error messages

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