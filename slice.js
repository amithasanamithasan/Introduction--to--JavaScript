const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

const partial = friends.slice(2, 5);
console.log(partial);
console.log(friends);

// OUT PUT 
// [ 32, 22, 44 ]
// main array no changes
// [
//   12, 45, 32, 22, 44,
//   62, 29, 69, 87     
// ]