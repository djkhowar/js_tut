//Selecting Elements

let heading = document.querySelector("h1");
console.log(heading.innerText);


//modifying the content
let heading = document.querySelector("h1");
heading.innerText = "Hello, JavaScript!";


//Event Handling

let button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Button was clicked!");
});


//Input Values and Changing Inner HTML

// Select the input field, button, and paragraph
let inputField = document.getElementById("userInput");
let changeTextButton = document.getElementById("changeTextButton");
let displayText = document.getElementById("displayText");

// Add an event listener to the button
changeTextButton.addEventListener("click", () => {
    // Get the value from the input field
    let userInput = inputField.value;
    
    // Change the inner HTML of the paragraph
    displayText.innerHTML = userInput;
});


