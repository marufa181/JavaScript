const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2);
console.log(fruits2.sort()); // ["Apple", "Banana", "Mango", "Orange"]
console.log(fruits2.reverse()); // ["Orange", "Mango", "Banana", "Apple"]

console.log(fruits2.concat(["Kiwi", "Lemon"])); // ["Orange", "Mango", "Banana", "Apple", "Kiwi", "Lemon"]
console.log(fruits2); // ["Orange", "Mango", "Banana", "Apple"]

const numbers1 = [4, 2, 5, 1, 3];
console.log(numbers1.sort()); // [1, 2, 3, 4, 5]
numbers1.sort(function(a, b){
    return a - b;
}); // [1, 2, 3, 4, 5]
console.log(numbers1); // [1, 2, 3, 4, 5]

numbers1.sort(function(a, b){
    return 0.5 - Math.random();
}); // [3, 1, 4, 2, 5]
console.log(numbers1); // [3, 1, 4, 2, 5