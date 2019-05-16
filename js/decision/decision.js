var js = 'unmarried';

// if statement
if(js == 'married') {
    // if block
    console.log('You got 20% discount')
}


// if else chain

if (js == 'married') {
    console.log('You got 20% discount')
} else {
    console.log('You got 50% discount')
}


var result = 85 ;

 // chain if and else if
if (result >= 80) {
    console.log('You got A+');
}else if (result >=65 && result < 80) {
    console.log('You got A')
} else if (result >= 60 && result < 65) {
    console.log('You got B')
} else {
    console.log('Failed')
}


// ternary operator

var num = 10;

var result = (num%2 == 0) ? 'even' : 'odd';

console.log(result);


console.log('Executing rest of the program');