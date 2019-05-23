

// getElementByID

let para = document.getElementById('mypara');

para.innerText = 'Text Chnged'


// getElementByClassName

let getByClass = document.getElementsByClassName('myClass')

console.log(getByClass);


// querySelector


let para1 = document.querySelector('.myClass');

let paras = document.querySelectorAll('.myClass')

console.log(paras)

console.log('Query Selector by Class', para1);


let qWithId = document.querySelector('#mypara');

console.log(qWithId)


