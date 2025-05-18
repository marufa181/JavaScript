const string = {
    name: 'John',
    districts: 64,
    slice: function(start, end){
        console.log("mnjenjjudu jncjdcdjnjdj");
    },

    subsstring: function(start, end){
        console.log("mnjenjjudu jncjdcdjnjdj");
    },

    substr: function(syart, length){
        console.log("mnjenjjudu jncjdcdjnjdj");
    },
};



let str = "Apple, Banana, Cherry, Date, Elderberry, Fig, Grape";
console.log(str.slice(7,13));

let str1 = "I love JavaScript";
let Marufa = str1.replace("JavaScript", "Jahan");
console.log(str1);
console.log(Marufa);

// call methods on the string object

string.slice(2,5); 
string .subsstring(3,8);
string.substr(2,5); 
console.log(string.name); // Access the name property of the string object
console.log(string["districts"]); // Access the districts property of the string object

let read = "Hello, World!";
console.log(read.toUpperCase()); // Convert to uppercase
console.log(read.toLowerCase()); // Convert to lowercase

let read1 = "Hello";
let read2 = "World";
console.log(read1.concat(" ", read2)); // Concatenate strings

let read3 = "   Hello, World!   ";
console.log(read3.trim()); // Remove leading and trailing whitespace
