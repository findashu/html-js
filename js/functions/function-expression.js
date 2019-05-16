
//  function expression

// 1. Self Executing Functions
(function () {
    console.log('Hi I am anonymous');
})();


var add = function (a,b) {
    return a+b;
}

console.log(add(1,3))


// Uses of Anonymous Functions

// 1. Self Executing Functions
// 2. Callbacks


function square (n) {
    return n*n
}


var addition = add(1,3);

console.log(addition)

var finalResult = square(addition)

console.log(finalResult)


