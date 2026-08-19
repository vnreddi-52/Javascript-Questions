// Palindrome checker: Write a function that takes a string as input and 
// returns true if the string is a palindrome (i.e., it reads the same forwards and backwards),
//  and false otherwise.

let s="madam";

function checkPalindrome(s){
    let s1=s.split('').reverse().join('');
    if(s1==s) return true;
    else{
        return false;
    }
}

console.log(checkPalindrome(s));

