var a = [1,2,3];

var arr = new Array(5,6,7);

var arr2 = new Array(10);

console.log(arr);

console.log(arr2);


// Properties and methods

// length property;

console.log(arr2.length);

arr2[0] = 23;

console.log(arr2);

// method push();

arr2.push(34);
console.log(arr2);

// unshift();
arr2.unshift(12)
console.log(arr2)

// pop()
arr2.pop();
console.log(arr2)

// shift();
arr2.shift();
console.log(arr2)

// reverse()
var rev = [23,34,45,56,67,78];
rev.reverse();
console.log(rev);

// sort();

// let unsorted = [2,6,3,5,1];
let unsorted = [5,23,18,11,9,4];
unsorted.sort();
console.log(unsorted);

// slice()
let sl = [2,3,4,5,6];
// start index included end index not included
let sliced = sl.slice(1,3);
console.log(sliced);


// splice();

let sp = [9,6,4,3,6,2];
sp.splice(1,3,23,24,25,26,27);
console.log(sp);
 
// join();

let j = ['a','s','h','u'];
let joined = j.join('');
console.log(joined);

// isArray()

console.log(Array.isArray(j));