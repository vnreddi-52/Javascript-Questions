// Check if a number is prime: Write a function that takes a number as input and returns 
// true if it is a prime number, and false otherwise.

let n=20;

function isPrime(n){
    if(n==0 || n==1) return "false";
    
    for(let i=2; i<=n/2 ;i++){
        if(n%i==0){
            return "false";
        }
    }
    return "true";
}

console.log(isPrime(n));


