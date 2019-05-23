// setTimeout();
console.log('Program Starts')


// asynchronised
setTimeout(function() {
    console.log('hello')
}, 2000);


var i = 0;

var interval = setInterval(function() {
    if(i == 5) {
        clearInterval(interval)
    }
    console.log('Every second, ',i)
    i++;
}, 2000)

console.log(interval)

console.log('Program Ends')