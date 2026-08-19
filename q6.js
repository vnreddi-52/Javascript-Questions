// Find the longest word: Write a function that takes a string as input and 
// returns the longest word in the string.

let str="I love Acuvate";

let longest="";

function longestWord(s){
    let words = str.split(" ");

    for(let i=0; i<words.length ;i++){
        let len = words[i].length;
        if(words[i].length>longest.length){
            longest=words[i];
        }
    }
    return longest;
}

console.log(longestWord(str));
;