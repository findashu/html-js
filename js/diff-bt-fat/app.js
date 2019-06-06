
let btn = document.querySelector('button');


// function handler(e) {
//     console.log(e);
//     this.innerText = 'submit';
// }


let handler = (e) => {
    console.log(e);
    console.log(this);
}

btn.addEventListener('click', handler);