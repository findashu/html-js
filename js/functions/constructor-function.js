function Person(name, age, gender) {
    
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.description = function () {
        console.log('My Name is ',this.name)
    }
}


var js = new Person('js',22, 'M');


js.description()

console.log(js)

console.log(js.name);

var java = new Person ('Java', 25, 'F');

console.log(java);


console.log(java instanceof Person)