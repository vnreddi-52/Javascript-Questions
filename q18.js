// Generate a random number: Write a function that generates a
// random number between a given range (e.g., 1 and 10).

let min = 1000;
let max = 100000;

// 0 ≤ Math.random() < 1

console.log(Math.floor(Math.random()*10));

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

