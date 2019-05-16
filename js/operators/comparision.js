/**
1. Equality ==
2. Greter than >
3 Greater than equalto >=
4. Less than <
5. Less than equal to <=
6. Not equal to !=
7. Strict Equality ===
8. Strict Not Equalto !==
*/

var a = "hello";

var b = "hello";

console.log(a == b);


var c = 20;
var d = 20;

console.log(c <= d);

console.log(c != d);


// Strict Check
// Strict checks both value and the type of the variable.

var num = 10;
var str = '10';
console.log(num == str)

var str2 = 'Hello'; // primitive type String
var strObj = new String('Hello'); // string object


console.log(str2 === strObj);


// Strict Not Equal to

console.log(str2 !== strObj);


