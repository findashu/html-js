function Gadget(name, color) {
    this.name = name;
    this.color = color;
  }
  
  
  Gadget.prototype.price = 350;
  
  let marker = new Gadget('Marker', 'blue');
  
  
  let mobile = new Gadget('Apple', 'silver');
  
  
  
  Gadget.prototype.description = function() {
    console.log(`Name :${this.name}, Price: ${this.price}`)
  }
  
  console.log(mobile)
  console.log(mobile.name);
  console.log(mobile.color);
  
  
  console.log(mobile.price);

  mobile.description();

  marker.description();


console.log(marker.toString());


console.log(marker.hasOwnProperty('name'))
console.log(marker.hasOwnProperty('price'))

console.log(marker.constructor === Gadget);

console.log(marker.constructor.prototype.hasOwnProperty('price'));


console.log(marker.hasOwnProperty('toString'));
console.log(marker.constructor.hasOwnProperty('toString'));
console.log(marker.constructor.prototype.hasOwnProperty('toString'));


console.log(marker.constructor.prototype.constructor)


console.log(Object.hasOwnProperty('toString'))
console.log(Object.prototype.hasOwnProperty('toString'))


console.log(marker instanceof Gadget);

var a = [1,2,3];

console.log(a instanceof Array)
