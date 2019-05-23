var obj = {
    name : 'ashu',
    gender: 'male',
    married: false
};

let keys = Object.keys(obj);


for(var i = 0; i< keys.length; i++) {
    console.log(obj[keys[i]])
};



for(key in obj) {
    console.log(obj[key])
};


// for( var key of obj) {
//     console.log(obj[key])
// }


console.log(keys);


var obj2 = Object.assign(obj);

console.log(obj2);

obj2.age = 25;

console.log(obj.age);

console.log(obj2.age)