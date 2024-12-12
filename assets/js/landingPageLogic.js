// Create variables for modal, openModalButton, and closeModalButton

const modal = document.getElementById('formModal');
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');

// Add "onclick" to openModalButton that changes the style of the modal to "block"

openModalButton.onclick = function () {

    modal.style.display = "block";

};

// Add "onclick" to closeModalButton that hides the modal

closeModalButton.onclick = function () {

    modal.style.display = "none"

};

// Add "onclick" to the area outside of the modal to close when clicked

window.onclick = function(event) {

    if (event.target == modal) {
        modal.style.display = "none";

    };
};