

// Factory method
function Person (name, age) {
    return {
        name: name,
        age: age
    }
}

var ashu = Person('ashu', 26);

var obei = Person('Obei', 25);

console.log(ashu)

console.log(obei)