let userName = prompt('Please enter your good name');
let para = document.querySelector('p');
let myPara = document.querySelector('#myPara')

if(userName != '' && userName != null) {
    para.innerText = 'Welcome '+userName;
}

console.log(myPara.innerText)