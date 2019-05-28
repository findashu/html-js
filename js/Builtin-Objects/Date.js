// Today Date

let today = new Date();

console.log(today);


console.log(today.getDay());

console.log(today.getDate());

console.log(today.getMonth());

console.log(today.getTime());

let td = new Date().getTime();

let t = new Date(0);

console.log(t)

let anDate = new Date('12/24/2019');

console.log(anDate.getMonth());
// dt.getMonth();


let strtTime = new Date().getTime()

for(var i =0; i< 1000000; i++) {
    // console.log(i)
}
let endTime = new Date().getTime();


console.log(endTime - strtTime);