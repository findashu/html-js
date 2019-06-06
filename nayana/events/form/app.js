let frm = document.querySelector('form');
let p = document.querySelector('p')

function handleSubmit(e) {
    e.preventDefault();

    // let name = frm[0].value;

    let name = document.querySelector('input[name=name]').value;
    let password = document.querySelector('input[name=password]').value;
    let email = document.querySelector('input[name=email]').value;
    
    if(name == '') {
        p.innerText = 'Name field is required';
        p.style.color = 'red';
    }
}


let inptName = document.querySelector('input[name=name]');


inptName.onfocus = function() {
    p.innerText = 'Name field is required';
    p.style.color = 'red';
}

inptName.onblur = function() {
    inptName.style.border = '1px solid red';
}


frm.onsubmit = handleSubmit;