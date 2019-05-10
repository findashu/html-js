var joe = {};

console.log(joe);
console.log(typeof joe);

var john = {
    "Math" : 50,
    "Science" : 70,
    "English" : 60,
    "Social" : 50
}

console.log(john)

// Dot Notation to access values

console.log(john.Science);

// update value of social
john.Social = 70;
console.log(john.Social);

// add a new key pair
john.Economics = 80;
console.log(john);

delete john.Economics;

console.log(john);


var bhamini = {
    "name" :"Bhamini",
    "gender" : "Female",
    "married" : true,
    "age" : 25,
    "hobbies" : ['reading book', 'cooking', 'movies'],
    "education" : {
        'highSchool' : 'Passed',
        "graduate" : true
    },

    "friends" : [
        {
            "name" : "Tanuja",
            "married" : false
        },
        {
            "name":"Asha",
            "married" : false
        }
    ]
}

console.log(bhamini.education.graduate);

console.log(bhamini.friends[1].name);

var someKeyRules = {
    name : 'Rule 1',
    "first name" : 12,
    "var" : 12
}

console.log(someKeyRules);


// Access the properties using bracket notation

console.log(bhamini["education"]["graduate"]);

var input = "age";

console.log(bhamini[input]);

var newProp = "height";

bhamini[newProp] = 5.6;

console.log(bhamini)