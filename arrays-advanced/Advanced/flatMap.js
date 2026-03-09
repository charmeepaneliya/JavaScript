//flatMap() is combination of:
//map() + flat()

//It maps values and flattens result.

let arr = [1,2,3];

let result = arr.flatMap((x)=>[x,x*2]);

console.log(result);

//Duplicate every element using flatMap.

let arr1 = [1,2,3];
let result1 = arr.flatMap((x)=>[x,x]);

console.log(result1);