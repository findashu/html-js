// const - Constant;

const PI = 3.14;

// PI = 2.14;

const myObj = {
    name : 'ashu',
    lastName: 'mishra'
}


var b= {result: 30}

// you cannot change the reference
// myObj = b

console.log(myObj);

//  but you can change the value
myObj.name = 'JS'

console.log(myObj)

console.log(PI);


// let keyword

if(true) {
    let a = 10;
}


let a = 10;


function foo () {
    console.log(a)
}
foo()
console.log(a)

function myFun() {
    console.log(a);
    let a = 20;
    console.log(a)
}

myFun()