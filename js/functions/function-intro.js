// 

function add (num1, num2) {
    
    console.log('Arguments passed ', arguments)
    var result = 0;

    console.log(typeof arguments)

    for(var i =0 ; i< arguments.length; i++) {

      
        // result += arguments[i];

        result = result + arguments[i]

    }

    return result

}


var sum = add(10,10,10,30,40);

console.log(sum)



// var sum2 = add (30,40,40);


// console.log(sum2)


// Function Declaration

function isEvenOrOdd (num) {

    if(num && typeof num == 'number') {
        if(num % 2 == 0) {
            return 'even'
        }else {
            return 'odd'
        }
    }else {
        return 'Pass a valid number'
    }
    
}

console.log(isEvenOrOdd(12))

