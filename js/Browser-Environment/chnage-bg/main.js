function random(n) {
    return Math.floor(Math.random() * n)
}

function chngeBG() {

    let paras = document.getElementsByTagName('p');

    for (var i = 0; i < paras.length; i++) {

        let randomColor = `rgb(${random(255)},${random(255)},${random(255)} )`
        paras[i].style.backgroundColor = randomColor;
    }
}

setInterval(chngeBG, 1000)