// AND &&
// OR ||

// AND => When all expressions returns true then whole result will be true
console.log((10 == 10) && (20 == 21))

// OR
// Lazy Evaluation
console.log((10 == 10) || (20 == 21) )


// NOT 

// Falsy Values 

/**
 * undefined
 * null
 * Number 0
 * Empty String ''
 * Boolean false
 * NaN
 */


var a = 12;

console.log(!a)

var arr = [10,10];

console.log(arr instanceof Array);