// 17. Calculate the factorial: Write a function that takes a number as input and 
// returns the factorial of that number (i.e., the product of all the numbers from 1 to that number).

function fact(n){
    if(n==0 || n==1) return 1;
    else{
        return n * fact(n-1);
    }
}

console.log(fact(5));

