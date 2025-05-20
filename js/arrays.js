const cars = ["Ford", "Chevy", "Toyota", "Honda"];
const numbers = [1, 2, 3, 4, 5];
console.log(cars.length); // 4
console.log(cars[0]); // Ford
console.log(cars[1]); // Chevy
console.log(cars[2]); // Toyota
console.log(cars[3]); // Honda
console.log(cars[4]); // undefined
console.log(cars[cars.length - 1]); // Honda
console.log(cars[cars.length - 2]); // Toyota
console.log(cars[cars.length - 3]); // Chevy
console.log(cars[cars.length - 4]); // Ford
console.log(cars[cars.length - 5]); // undefined


const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for ( i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

function myFunction(value){
    console.log(value);
}

fruits.forEach(myFunction); // Banana Orange Apple Mango

console.log("Finished")

