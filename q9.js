// Count the vowels: Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.

let str="vaishnavi"

function isVowel(ch){
    return ch=='a' || ch=='e' || ch=='i' || ch=='o' 
    || ch=='u' || ch=='A' || ch=='E' || ch=='I' || ch=='O'
    || ch=='U';
}

let count=0;

function countVowels(s){
    let word=str.split("");
    for(let i=0; i<word.length; i++){
        if(isVowel(word[i])){
            count++;
        }
    }
    return count;
}

console.log(countVowels(str));
