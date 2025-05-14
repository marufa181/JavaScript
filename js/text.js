console.log("Hello, World!");

// define a function 
function sleep(name,time) {
    console.log(name + " Sleeping my home for " + time + " hours");
}
sleep("Marufa", "10 PM"); // call the function
sleep("Jahan", "8 PM"); 
sleep("Ms.jahan", "9 PM"); 

// define a function
function myFunction(a,b){
    return a * b;
}
let x = myFunction(5, 6);
console.log(x); // print the value of x

let carName = "BMW"; // global variable
function myFunction(){
    let carName = "Volvo"; // local variable
    console.log(carName);
}
myFunction(); // call the function

console.log(carName); // print the value of carName


