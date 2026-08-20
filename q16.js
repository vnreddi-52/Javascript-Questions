// 16. Find the common elements: Write a function that takes two arrays as input and
//  returns an array containing the common elements of the two arrays.

let a1=[10,20,30,78,67];
let a2=[10,20,30,45,32];

let res=[];

function commonArray(a1,a2){
    for(let i=0; i<a1.length;i++
    ){
        for(let j=0;j<a2.length;j++){
            if (a1[i]===a2[j]){
                res.push(a1[i]);
                
            }
        }
     
    }
    console.log(res)
}

console.log(commonArray(a1,a2));
