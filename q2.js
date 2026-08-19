// Reverse a string: Write a function that takes a string as input and returns the string reversed.

let s="Vaish";

function reverseString(s){
    s=s.split("").reverse().join("");
    return s;
}
console.log(reverseString(s));



