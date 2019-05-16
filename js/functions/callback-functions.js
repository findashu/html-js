

function add (num1, num2, cb) {
    var result = num1 + num2;

    var sq = cb(result);
    return sq;
}



console.log(add (2,3, function (n) {
    return n*n;
}))
