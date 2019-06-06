// setTimeout


setTimeout(function() {
    console.log('hello timer executed')
}, 3000);




// setInterval
let strt = 0

let timerID = setInterval(function () {
    if(strt == 5) {
        clearInterval(timerID)
    }

    console.log('Executing every given time')
    strt++;
}, 2000)