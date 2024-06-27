// Using var
var name = "Alice";
console.log(name);

// Using let
let age = 25;
console.log(age);

// Using const
const pi = 3.14;
console.log(pi);


//variable scope

// local (variable inside function var/let/const)
// global (variable inside function var/let/const)

//Automatically Global

myFunction();

function myFunction() {
  username = "test";
}

// let vs var 
//The variables that are defined with let statement have block scope.

function testFun(){
    if(true){
      let testVar = "xyz" 
  } 		
      
  alert(testVar)
}	

