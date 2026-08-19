// Find the missing number: Write a function that takes an array of integers and returns the missing number
//  (i.e., the number that is not present in the array).

let n=6;
let arr = [1,2,3,4,6];

let sum=n*(n+1) / 2;

function checkMissing(a){
    let sum2=0;
    for(let i=0;i<arr.length;i++){
        sum2+=a[i];
    }
    return sum-sum2;
}

console.log(checkMissing(arr));
