

function add (a, b) {
    var addition = a+b;

    function square () {
        return addition * addition;
    }

    return square;

}

var outerSquare = add (10,12);

var anotherSquare = add(2,2)

console.log(outerSquare())

console.log(anotherSquare())