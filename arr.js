const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Q. Give array of inventors ' first and last name '
// ['Albert Einsteon', 'Isaac Newton' ];

// let fullNames = [];

// for(var i = 0; i< inventors.length; i++) {
//     let fN = `${inventors[i].first} ${inventors[i].last}`;
//     fullNames.push(fN);
// }
// console.log(fullNames);

// map()

// let fullNames = inventors.map(function(ele,index, arr) {
//     return `${ele.first} ${ele.last}`  
// })


let fullNames = inventors.map(ele => `${ele.first} ${ele.last}`)

console.log(fullNames);

// Q Filter the list of inventors for those who were born in the 1500's

let fifteen = inventors.filter(ele => ele.year >= 1500 && ele.year < 1600)
console.log(fifteen);