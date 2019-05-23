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



// 1. Give array of inventors ' first and last name '
// ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei'...];

// var fullNames = [];
// for(var i = 0; i< inventors.length; i++) {
//     let name = `${inventors[i].first} ${inventors[i].last}`
//     fullNames.push(name);
// }

// var fullNames = inventors.map(function (ele, index, arr) {
//    let names = `${ele.first} ${ele.last}`
//    return names;
// })

var fullNames = inventors.map( ele  => `${ele.first} ${ele.last}`)
console.log(fullNames)



//Q. Filter the list of inventors for those who were born in the 1500's??

let fifteens = inventors.filter(ele => ele.year>=1500 && ele.year < 1600 )

console.log(fifteens)

// Q. Sort the inventors by birthdate, oldest to youngest;

//  sort function optionally accepts a compare function.
// Comapare function sorts array depending upon 3 values 1,-1 ,0
let shortInventors = inventors.sort((a,b) => a.year > b.year ? -1 : 1) ;

// let shortInventors = inventors.sort((a,b) => {
//     if(a.year > b.year) {
//         return -1
//     }else {
//         return 1
//     }
// }) ;
console.log(shortInventors);

// Q. How many years did all the inventors live?

var totalYearLived = 0 ;

for (var i = 0; i < inventors.length; i++) {

    totalYearLived = totalYearLived + (inventors[i].passed - inventors[i].year)

}

var totalYear = inventors.reduce(function(total, ele) {
    total = total + ele.passed - ele.year 
    return total;
}, 0)

var total = inventors.reduce((total, ele) => total + (ele.passed - ele.year), 0) 



console.log(totalYearLived);

console.log(totalYear);


var results = [10,20,30,40,50,60];

let t = results.reduce((total, ele) => total + ele, 0)

console.log(t);