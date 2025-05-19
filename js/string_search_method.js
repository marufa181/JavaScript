/* String.indexOf() 
String.lastIndexOf()
String.startsWith()
String.endsWith() */

let maru = "Hello, world! I am a string.";
console.log(maru.indexOf("world")); // 7
console.log(maru.lastIndexOf("am")); // 7
console.log(maru.startsWith("I")); // true
console.log(maru.endsWith("!")); // true
console.log(maru.search("a string")); // 18
console.log(maru.includes("Hello")); // true
console.log(maru.match(/string/)); // [ 'string', index: 18, input: 'Hello, world! I am a string.' ]
console.log(maru.replace("Hello", "Hi")); // Hi, world! I am a string.

