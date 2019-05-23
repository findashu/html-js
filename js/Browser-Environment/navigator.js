console.log(window.navigator);

console.log(navigator.userAgent);


let currentPosition = navigator.geolocation.getCurrentPosition(function (d) {
    console.log(d)
});


console.log(currentPosition)