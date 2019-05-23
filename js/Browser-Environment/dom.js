
// access the doc
console.log(document.documentElement);

console.log(document.documentElement.nodeName);

// check it has any child

console.log(document.documentElement.hasChildNodes());

// check the child list

console.log(document.documentElement.children);


// select body child

console.log(document.documentElement.children[1])

// access body childs

console.log(document.documentElement.children[1].children)

// select first para
console.log(document.documentElement.children[1].children[1]);

// change the inner text

document.documentElement.children[1].children[1].innerText = 'Learning deep Javascript';

// change the color of para

document.documentElement.children[1].children[1].style.color = 'red';
 


