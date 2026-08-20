// Fibonacci sequence: Write a function that generates the Fibonacci sequence (a series of numbers in which each number is the sum of the two preceding ones) up to a given number.
let n=8;
let a=0;
let b=1;

function fibonacci(n){
    if(n==0) return 0;
    if(n==1) return 1;
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(n));


