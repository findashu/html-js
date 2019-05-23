


// gives list of all elements present on document
var para = document.getElementsByTagName('p');

console.log(para);

para[0].innerText = 'HEllo JAvascript';
para[0].style.color = 'red';

// difference b/w innerText and innerHtml

// para[1].innerText = '<span>Hello There</span>'

para[1].innerHTML = '<span>Hello There</span>'


// para[1].hidden = true;

para[1].className = 'myPara'

var para2ChildNodes = para[1].childNodes;

console.log(para2ChildNodes);



// Select anchor tag

let anch = document.getElementsByTagName('a')[0];

anch.attributes[0].value = 'https://www.google.com'