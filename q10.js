// Find the maximum value: Write a function that takes an array of integers as input and
//  returns the maximum value in the array.

let arr=[10,20,30,40,50,60,700,80,90];
let largest=0;

function maxValue(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}

console.log(maxValue(arr));

console.log(Math.max(...arr));

