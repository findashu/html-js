// var arr = [10,20]


Array.prototype.join = function() {
    return 'hello'
}


var arr = new Array(12,13,15);

console.log(arr);

var anotherArray = new Array(12);

console.log(anotherArray);



// Array Functions


// push method add a element to array at last

let results = [10,12]
results.push(45);
console.log('push',results);

// pop method removes a element from last
results.pop();

console.log('pop',results);

// unshift add element to start

var a = [10,20,30];
a.unshift(8);
console.log('unshift', a)

// shift removes an elemnt from start
var b = [10,12,13];
b.shift();
console.log('shift', b)

// reverse modifies your original array and gives reversed array

 var rev = [1,2,3];
 rev.reverse();
 console.log('reversed', rev)

// sort modifies your original array and gives sorted array

var unsorted = [3,2,5,1];
unsorted.sort();
console.log('sorted array', unsorted);

var un = [11,5,21,3,18,81];
un.sort();
console.log(un);


// join

let name = ['a','s','h','u'];

var n = name.join('');

console.log(n)

// 
var addArray = [1,2,3];
Array.prototype.add = function () {
   
    var res = 0
    for(var i = 0; i< this.length; i++) {
        res += this[i]
    }
    return res;
}

var addition = addArray.add()

var prices = [10,20,30,40];

console.log(addition)

console.log(prices.add());

// slice

var sl = [2,5,7,9,6,10,45,67,56];

let slicedValue = sl.slice(1,4);

console.log(slicedValue);

console.log(sl);

// splice

var sp = [2,5,7,9,6,10,45,67,56];

let spliced = sp.splice(1,4,55);

// splice(startIndex, endIndex, args to be filled)

console.log(sp)
console.log(spliced)