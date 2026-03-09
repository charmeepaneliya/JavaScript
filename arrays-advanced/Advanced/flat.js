//flat() converts nested arrays into single array.
//Default depth = 1

let arr = [1,2,[3,4]];

console.log(arr.flat());

//Flatten deep nested array.

let arr1 = [1,[2,[3,[4]]]];
console.log(arr.flat(Infinity));
