// Create variables that select the form and input elements
const taskForm = document.getElementById('formModal');
const taskTitleInput = document.getElementById('taskTitleInput');
const taskTimeOfDayInput = document.getElementsByClassName('timeOfDaySelect');
const submitFormButton = document.getElementById('submitButton');
const errorText = document.getElementById('error');

//--------------------------------------------------------------------
//                CLEAR AND CLOSE THE MODAL ON FORM SUBMISSION
//--------------------------------------------------------------------

    // taskForm.reset();
    modal.style.display = 'none';



// Create logic for "Add a Task" modal submission that, on submission: creates an object and saves that object to local storage
//     Object name: taskFormObject
//     Object props: taskTitle, taskTimeOfDay, taskEstimatedTime
//          Event listener should seek id=submitButton

submitFormButton.addEventListener('click', function (event) {
    event.preventDefault();

    //Check for empty fields, prevent submission if true

    if (!taskTitleInput.value.trim() || !taskTimeOfDayInput.value) {
        error.textContent = "Please make sure that a task has been entered and a time of day has been selected.";
        return;
    };
});

// Create taskObject

function createTaskObject() {

    const taskFormObject = {

        taskTitle: taskTitleInput.value.trim(),
        taskTimeOfDay: document.querySelector('input[name="timeOfDay"]:checked').value, // timeOfDay buttion must be a radio button

    };

    //Save to local storage and console log what is saved

    localStorage.setItem('taskFormObject', JSON.stringify(taskFormObject));
    console.log('Saved Task Data:', taskFormObject)

};

    createTaskObject();