//Combines array values into single value.

//Mostly used for sum.

//Question: Find sum of array.

let arr = [1,2,3,4,5];

let sum=arr.reduce((acc,curr)=>{
    return (acc+=curr);
},0);

console.log(sum);
