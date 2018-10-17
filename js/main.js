document.addEventListener('DOMContentLoaded', () => {
    // Configs
    let myTitle = document.querySelector('h1 span');
    let myInput = document.querySelector('input');

    // Start
    myTitle.textContent = 'GitHub';

    // Get unput value to change title
    myInput.addEventListener('keyup', event => {
        myTitle.textContent = event.target.value
    })
})