// Anagram checker: Write a function that takes two strings as input and returns true if they are anagrams 
// (i.e., they contain the same letters in a different order), and false otherwise.

let s1="cat";
let s2="act";

function isAnagram(a1, a2){
    let sorted1=a1.split("").sort().join("");
    let sorted2=a2.split("").sort().join("");

    if(sorted1===sorted2){
        return "true";
    }
    else{
        return "false";
    }
}

console.log(isAnagram(s1,s2));
