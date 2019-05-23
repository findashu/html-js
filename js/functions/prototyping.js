function Gadget (name, color) {
    this.name = name;
    this.color = color;
}

Gadget.myProp = 'hello'
// Functions also have some properties attached to them

// length

console.log(Gadget.length)

// name
console.log(Gadget.name);

// prototype

console.log(Gadget.prototype);

console.log(typeof Gadget.prototype);

Gadget.prototype.price = 300;

var toy = new Gadget('car','black');

console.log(toy);

console.log(toy.name);
console.log(toy.color);

console.log(toy.price);

var laptop = new Gadget('Mac', 'silver')

console.log(laptop)

console.log(laptop.name);
console.log(laptop.color);
console.log(laptop.price);

console.log(laptop.hasOwnProperty('price'))

console.log(typeof laptop.price.toString());

console.log(laptop.hasOwnProperty('toString'))
console.log(laptop.constructor.hasOwnProperty('toString'));

console.log(Gadget.prototype.hasOwnProperty('toString'));


console.log(Object.hasOwnProperty('toString'));

console.log(Object.prototype.hasOwnProperty('toString'))