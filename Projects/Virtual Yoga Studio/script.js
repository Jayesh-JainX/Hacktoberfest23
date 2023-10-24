// JavaScript code for the Virtual Yoga Studio web page

// You can add your custom JavaScript functions and interactions here

// Example: Toggle a class on click to create a simple interaction
const yogaClassButton = document.querySelector('#yoga-class-button');
const classDescription = document.querySelector('.class-description');

yogaClassButton.addEventListener('click', () => {
    classDescription.classList.toggle('show-description');
});
