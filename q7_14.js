// Check if a number is a power of 3: Write a function that takes a number as input and returns
//  true if it is a power of 3 (e.g., 3, 9, 27, 81),
//  and false otherwise.

let num=81;
function checkPower(n){
    let n1=n;

    while(n>=1){
        if(n==1){
            return true;
        }
        if(n%3==0){
           n=n/3;
        }
        else{
            return false;
        }
    }
    return false;
}

console.log(checkPower(num));
