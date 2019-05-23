var PI = Math.PI;

console.log(PI);

// log10
var log10 = Math.log10(10);
console.log(log10)

// power
var power = Math.pow(2,3);

console.log(power);


var sqrt = Math.sqrt(9);
console.log(sqrt);

var max = Math.max(10,20,400,30);

console.log(max)


var min = Math.min(5,10,1,20);
console.log(min);


console.log(Math.sin(45));


// random

var rand = Math.random() *100  ;


function genrateRandom(min,max) {
    return Math.floor(Math.random() * (max - min) +min)
}

console.log('random',genrateRandom(15,20));

// console.log(rand);


var num = 1.5;

console.log(Math.floor(num));
console.log(Math.ceil(num));

console.log(Math.round(num))