// Create variables that select the form and input elements
const taskForm = document.getElementById('');
const taskTitleInput = document.getElementById('');
const taskTimeOfDayInput = document.getElementById('');
const taskEstimatedTimeInput = document.getElementById('');
const errorText = document.getElementById('error');


// Create logic for "Add a Task" modal submission that creates an object and saves that object to local storage.
//     Object name: newTask
//     Object props: taskTitle, taskTimeOfDay, taskEstimatedTime
//          Event listener should seek id=submitButton

taskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //Check for empty fields, prevent submission if true.

    if (!taskTitleInput.value.trim() || !taskTimeOfDayInput.value.trim() || !taskEstimatedTimeInput.value.trim()) {
        error.textContent = "Please make sure Title, Time of Day, and Estimated Time have been entered before submitting";
        return;
    };
});

// Create taskObject

function createTaskObject() {

    const taskFormData = {

        taskTitle: taskTitleInput.value.trim(),
        taskTimeOfDay: taskTimeOfDayInput.value.trim(),
        taskEstimatedTime: taskEstimatedTimeInput.value.trim(),

    };

    //Save to local storage and console log what is saved

    localStorage.setItem('taskFormData', JSON.stringify(taskFormData));
    console.log('Saved Task Data:', taskFormData)

};

    createTaskObject();