// 1. inline

function foo() {
    let p = document.querySelector('p');
    p.innerText = 'Submitted';
}

// 2 Element Property

let btn = document.querySelector('button');
btn.onclick = foo;


// DOM Method


// btn.addEventListener('click', foo);
