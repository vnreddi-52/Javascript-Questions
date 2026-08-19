// Sort an array: Write a function that takes an array of integers as input and
//  returns the array sorted in ascending order.

let arr=[20,40,90,10,45];

// ascending
function sortArrayAsc(arr){
    let sorted=arr.sort((a,b)=>{
        return a-b;
    })
    return sorted;
}

// descending
function sortArrayDesc(arr){
    let sorted=arr.sort((a,b)=>{
        return b-a;
    })
    return sorted;
}

console.log(sortArrayAsc(arr));
console.log(sortArrayDesc(arr));

