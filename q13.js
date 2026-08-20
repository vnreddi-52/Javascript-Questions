// 13. Merge two sorted arrays: Write a function that takes two sorted arrays as input and 
// returns a new array that is the merged
//  and sorted version of the two input arrays.

let a1=[20,40,10,50];
let a2=[13,67,43,90];

function mergeArrays(arr1,arr2){
    let merged = [...arr1,...arr2];
    return merged.sort();  
}

console.log(mergeArrays(a1,a2));
