// getElementById

let paraEle = document.getElementById('myPara');
paraEle.innerText = 'Change Something'
console.log(paraEle);

//acccess element list using tag name
let elemnts = document.getElementsByTagName('h1');
console.log(elemnts[0])

// acccess element list using class name
let ele = document.getElementsByClassName('myClass');
console.log(ele);

let head = document.getElementsByName('para')
console.log(head);


// querySelectors

let h1 = document.querySelector('h1')
let headings = document.querySelectorAll('h1')

console.log(h1) 

console.log(headings);

let usingClassName = document.querySelector('.myClass');
console.log(usingClassName);

let usingID = document.querySelector('#myPara');
console.log(usingID)