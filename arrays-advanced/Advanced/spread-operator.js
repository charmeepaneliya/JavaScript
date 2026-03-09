//Spread operator expands elements of an array.
/* 
Main uses:

Copy array

Merge arrays

Pass array values
*/

let arr1 = [1,2,3];
let arr2 = [4,5];

// merge arrays
let result = [...arr1,...arr2];

console.log(result);

//Copy an array without modifying original.

let arr3 = [1,2,3];

// copy array
let copy = [...arr3];

console.log(copy);