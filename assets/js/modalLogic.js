// Create variables that select the form and input elements
const taskForm = document.getElementById(''); // NEEDS ID
const taskTitleInput = document.getElementById(''); // NEEDS ID
const taskTimeOfDayInput = document.getElementById(''); // NEEDS ID
const taskEstimatedTimeInput = document.getElementById(''); // NEEDS ID
const submitFormButton = document.getElementById('submitButton');
const errorText = document.getElementById('error'); // NEEDS ID

//--------------------------------------------------------------------
//                CLEAR AND CLOSE THE MODAL ON FORM SUBMISSION
//--------------------------------------------------------------------

    taskForm.reset();
    modal.style.display = 'none'; // Assuming 'modal' is the ID of your modal
});



// Create logic for "Add a Task" modal submission that, on submission: creates an object and saves that object to local storage
//     Object name: taskFormObject
//     Object props: taskTitle, taskTimeOfDay, taskEstimatedTime
//          Event listener should seek id=submitButton

taskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //Check for empty fields, prevent submission if true

    if (!taskTitleInput.value.trim() || !taskTimeOfDayInput.value.trim() || !taskEstimatedTimeInput.value.trim()) {
        error.textContent = "Please make sure Title, Time of Day, and Estimated Time have been entered before submitting.";
        return;
    };
});

// Create taskObject

function createTaskObject() {

    const taskFormObject = {

        taskTitle: taskTitleInput.value.trim(),
        taskTimeOfDay: document.querySelector('input[name="timeOfDay"]:checked').value, // timeOfDay buttion must be a radio button
        taskEstimatedTime: taskEstimatedTimeInput.value.trim(),

    };

    //Save to local storage and console log what is saved

    localStorage.setItem('taskFormObject', JSON.stringify(taskFormObject));
    console.log('Saved Task Data:', taskFormObject)

};

    createTaskObject();