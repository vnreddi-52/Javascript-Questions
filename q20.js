// 20. Check if a number is a palindrome:
//  Write a function that takes a number as input and returns true if the number is a palindrome, 
// and false otherwise.

let num=121;
let res=num.toString();

function checkPalindrome(n){
    while(n!=0){
        let digit = n%10;
        res=digit;
        n=n/10;
    }
    console.log(res);
    
}

console.log(checkPalindrome(num));


