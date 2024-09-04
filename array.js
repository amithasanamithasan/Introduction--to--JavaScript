const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Agun'};

function add(num1, num2){
    return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);

// OUT PUT ==>string,number,boolean,object


let friends = [19, 22, 23, 19];
let add = 5; 
// Example variable for typeof check
console.log(Array.isArray(friends));// output // true
console.log(typeof add); // "number"

console.log(friends.includes(19));  // output // true
console.log(friends.includes(21));  // output // false


const friendss = [13, 14, 11, 17, 21, 16, 15, 20];
if(friendss.indexOf(252) !== -1 ){
    // Code to execute if 252 is found in the array
    console.log('252 is in the friends array');
} else {
    console.log('252 is not in the friends array');
}
// Out Put => 252 is not in the friends array