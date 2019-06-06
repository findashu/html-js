let bd = document.querySelector('body');
console.log(bd);
function randomNum (max) {
    return Math.floor(Math.random()*max)
}

console.log(randomNum(255))


bd.style.backgroundColor = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;


// setInterval(function() {
//     bd.style.backgroundColor = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
// }, 1000);