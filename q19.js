// 19. Find the average: Write a function that takes an array of numbers as input 
// and returns the average of those numbers.

let arr=[10,3,20,12,43,30];

let total = arr.reduce( (a,b) => a+b) / arr.length;

console.log(total);


