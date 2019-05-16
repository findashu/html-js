var foo = 10;

var foo2 = 20;

var a ;

function printMyName (name) {

    var lastname = 'mishra';
    a = 10;
    console.log('outer foo',foo);

    console.log(name,lastname)
}

console.log(a)
printMyName('ashu') 

console.log('My Lastname is ', lastname)


console.log(foo)
console.log(foo2);
