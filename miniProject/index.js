// Get a reference to the button element
const myButton = document.getElementById('myButton');

// Define a function to be executed when the button is clicked
function handleClick() {
    // Change button color
    myButton.style.backgroundColor = '#28a745';
    myButton.style.color = '#FFFFFF';

    // Change background color
    document.body.style.backgroundColor = '#343a40';
}

// Add an event listener to the button
myButton.addEventListener('click', handleClick);