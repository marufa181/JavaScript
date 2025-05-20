let m = 123;
let newNum = m.toString(); // Convert number to string
console.log(newNum); // "123"
console.log(typeof newNum);

let m1 = 123.456;
console.log(m1.toExponential(2)); // "1.23e+2"
console.log(m1.toFixed(2)); // "123.46"
console.log(m1.toPrecision(4)); // "123.5"

let m2 = 123.456;
let m3 = new Number(123.456);
console.log(m3.typeof); //object
console.log(m3.valueOf()); // 123.456

// There are 3 JavaScript methods theat can be used to convert a variables to a number:
// 1. Number() - converts a variable to a number
// 2. parseInt() - converts a variable to an integer
// 3. parseFloat() - converts a variable to a floating point number
/*
Number(true);   // 1
Number(false); // 0
Number("10"); // 10
Number("  10"); // 10
Number("10  "); // 10
Number(" 10  "); // 10
Number("10.33"); // 10.33
Number("10,33"); // NaN
Number("10 33") // NaN
Number("John"); // NaN
Number("10 + 20"); // NaN
 */

/*
parseInt("10"); // 10
parseInt("10.33"); // 10
parseInt("10 20"); // 10
parseInt("10 + 20"); // 10
parseInt("10,20"); // 10
parseInt("John"); // NaN
parseInt("10 jone"); // 10
parseInt("10.33 jone"); // 10
parseInt("10.33 20"); // 10
*/

/*
parseFloat("10"); // 10
parseFloat("10.33"); // 10.33
parseFloat("10 20"); // 10
parseFloat("10 + 20"); // 10
parseFloat("10,20"); // 10
parseFloat("John"); // NaN
parseFloat("10 jone"); // 10
parseFloat("10.33 jone"); // 10.33
parseFloat("10.33 20"); // 10.33
*/

/*
These object methods belong to the Number object:

Method:	                    Description:
Number.isInteger()	        Returns true if the argument is an integer
Number.isSafeInteger()	    Returns true if the argument is a safe integer
Number.parseFloat()	        Converts a string to a number
Number.parseInt()	        Converts a string to a whole number
*/

/*
Property:	        Description:
EPSILON	            The difference between 1 and the smallest number > 1.
MAX_VALUE	        The largest number possible in JavaScript
MIN_VALUE	        The smallest number possible in JavaScript
MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
MIN_SAFE_INTEGER	The minimum safe integer -(253 - 1)
POSITIVE_INFINITY	Infinity (returned on overflow)
NEGATIVE_INFINITY	Negative infinity (returned on overflow)
NaN	                A "Not-a-Number" value
*/