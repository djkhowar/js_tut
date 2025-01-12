// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));

// Function Expression
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 10));

// Arrow Function (ES6)
const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 10));