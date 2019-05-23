var str = new String('Hello World');

console.log(typeof str);

console.log(str.length);

var primitiveStr = 'Hi World';

console.log(primitiveStr.length);


// toLowerCase();

console.log(str.toLowerCase())

// toUpperCase();

console.log(str.toUpperCase());

// split();


var sentence = 'Hello I am learning Javascript';

console.log(sentence.split(' '));


// charAt();

let strr = 'Hello';

console.log(strr.charAt(0));

let ques = 'I am learnning javascript and its too confusing';

// Ialjaitc;

let cnvrtArr = ques.split(' '); //array

console.log(cnvrtArr);

var anArr = [];

for(var i = 0; i < cnvrtArr.length; i++) {
   anArr.push(cnvrtArr[i].charAt(0));
}

console.log(anArr);

let ans = anArr.join('');

console.log(ans);

let finalStr = ques.split(' ').map(e => e.charAt(0)).join('');

console.log('final',finalStr);

// substring

console.log(ques.substring(0,6));

console.log(ques.indexOf('a',3));



var nStr = new String('Hey there');

// extract the value from the object using valueOf() method

console.log(nStr.valueOf())

var name = 'java';

name = name.concat(' script');

// name = name + 'script'

console.log(name)

// reverse a string
// reverse characters of string
// count the occurance of a character
// remove duplicate string/words