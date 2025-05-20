// Converting Array to String
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.toString()); // Banana,Orange,Apple,Mango
console.log(fruits1.join(" * ")); // Banana * Orange * Apple * Mango
console.log(fruits1.push()); // undefined
console.log(fruits1.pop()); // Mango
console.log(fruits1); // ["Banana", "Orange", "Apple"]
console.log(fruits1.push("Kiwi")); // 4
console.log(fruits1); // ["Banana", "Orange", "Apple", "Kiwi
console.log(fruits1.shift()); // Banana
console.log(fruits1); // ["Orange", "Apple", "Kiwi"]
console.log(fruits1.unshift("Lemon")); // 4
console.log(fruits1); // ["Lemon", "Orange", "Apple", "Kiwi
console.log(fruits1.splice(2, 0, "Lemon", "Kiwi")); // []
console.log(fruits1); // ["Lemon", "Orange", "Lemon", "Kiwi", "Apple", "Kiwi"]
console.log(fruits1.splice(1, 3)); // ["Orange", "Lemon", "Kiwi"]
console.log(fruits1); // ["Lemon", "Orange", "Kiwi", "Apple", "Kiwi"]
