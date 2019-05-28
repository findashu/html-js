let img = document.querySelector('img');


function imageChanger () {

    if(img.getAttribute('src') == 'images/thruskills-mean-stack.jpg') {
        img.setAttribute('src', 'images/thruskills-node-js.jpg')
    }else {
        img.setAttribute('src', 'images/thruskills-mean-stack.jpg')
    }

}

img.addEventListener('click', imageChanger);