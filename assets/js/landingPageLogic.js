// Create variables for modal, openModalButton, closeModalButton, and EACH tasklist

const modal = document.getElementById('formModal');
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementsByClassName('closeModalButton');
const morningTasklist = document.getElementById('morningTasks');
const midDayTasklist = document.getElementById('midDayTasks');
const afternoonTasklist = document.getElementById('afternoonTasks');
const endDayButton = document.querySelector('.remove-all-tasks-link');

// Ensure all tasklists are of the datatype OBJECT (Key/value pair: taskTitle, taskTimeOfDay)

let morningTasks = {};
let midDayTasks = {};
let afternoonTasks = {};

//--------------------------------------------------------------------
//                   MODAL OPEN/CLOSE FUNCTIONS
//--------------------------------------------------------------------

// Add "onclick" to openModalButton that changes the style of the modal to "block"

openModalButton.onclick = function () {
    modal.style.display = "block";
};

// Add "onclick" to closeModalButton that hides the modal

closeModalButton.onclick = function () {
    modal.style.display = "none";
};


//--------------------------------------------------------------------
//                RENDER/WRITE TASKLIST FUNCTIONS
//--------------------------------------------------------------------

// Render the MORNING tasklist
function renderMorningTasks() {
    morningTasklist.innerHTML = '';

// Write morningTasks to the DOM (Append list items to morningTasks container)
    for (let i = 0; i < morningTasks.length; i++) {
        const morningTask = morningTasks[i];
        const li = document.createElement('li');
        li.textContent = morningTask;
        li.setAttribute('data-index', i);
        morningTasklist.appendChild(li);
    }
};

// Render the MIDDAY tasklist
function renderMidDayTasks() {
    midDayTasklist.innerHTML = '';

// Write midDayTasks to the DOM (Append list items to midDayTasks container)
    for (let i = 0; i < midDayTasks.length; i++) {
        const midDayTask = midDayTasks[i];
        const li = document.createElement('li');
        li.textContent = midDayTask;
        li.setAttribute('data-index', i);
        midDayTasklist.appendChild(li);
    }
};

// Render the AFTERNOON tasklist
function renderAfternoonTasks() {
    afternoonTasklist.innerHTML = '';

// Write afternoonTasks to the DOM (Append list items to afternoonTasks container)
    for (let i = 0; i < afternoonTasks.length; i++) {
        const afternoonTask = afternoonTasks[i];
        const li = document.createElement('li');
        li.textContent = afternoonTask;
        li.setAttribute('data-index', i);
        afternoonTasklist.appendChild(li);
    }
};

//--------------------------------------------------------------------
// TASKLISTS AND RENDERTASKS() FUNCTION (Functions executed on page load)
//--------------------------------------------------------------------

function renderTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    

    // Iterate through each task and append to the appropriate list
    tasks.forEach(task => {

        // DO NOT append existing tasks to existing taskObject
        const previouslyRenderedTasks = document.getElementById(tasks.indexOf(task));

        if (previouslyRenderedTasks) {
            previouslyRenderedTasks.remove();
        }

        const li = document.createElement('li');
        li.textContent = task.taskTitle; // Set the text content to the task title
        li.setAttribute('data-index', tasks.indexOf(task)); // Set index if needed
        li.setAttribute('id', tasks.indexOf(task));


        // Append to the appropriate tasklist based on taskTimeOfDay
        if (task.taskTimeOfDay === 'morningTask') {
            document.getElementById('morningTasks').appendChild(li);
        } else if (task.taskTimeOfDay === 'midDayTask') {
            document.getElementById('midDayTasks').appendChild(li);
        } else if (task.taskTimeOfDay === 'afternoonTask') {
            document.getElementById('afternoonTasks').appendChild(li);
        }
    });
};


    // Add an event listener for the End the Day button
        endDayButton.addEventListener('click', function() {
        // Clear tasks from local storage
        localStorage.removeItem('tasks'); // This will clear all tasks

            renderMorningTasks();
            renderMidDayTasks();
            renderAfternoonTasks();

        });

    // Add current date/time to navbar displayed text

    function updateDateTime() {
        const now = new Date(); // Get the current date and time
        const options = { 
            weekday: 'short', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true 
        };
        
        const formattedDateTime = now.toLocaleString('en-US', options); // Format the date and time
        document.getElementById('currentTime').textContent = `${formattedDateTime}`; // Update the navbar
    };
    
    // Call the function to set the initial date and time
    updateDateTime();
    
    // Optionally, update the time every second
    setInterval(updateDateTime, 1000);



//--------------------------------------------------------------------
//             RUN RENDERTASKS FUNCTION ON PAGE LOAD
//--------------------------------------------------------------------

// Call this function on page load
function initialize() {
    renderTasks(); // Render tasks from local storage
}

// Execute initialize function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);