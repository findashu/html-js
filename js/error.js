try {
    var b = a;

    try {
        throw new SyntaxError('Something went wrong')
    } catch(err) {
        console.log(err)
    }
   
} catch (error) {
    console.log(error.message);
    console.log(error.stack)
} finally {
    let a = 10;
    b = 10;
    console.log(b)
}

console.log('Hello JS');


// ReferenceError
// SyntaxError
// RangeError
// TypeError
// EvalError
