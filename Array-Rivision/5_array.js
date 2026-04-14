// join(): join is a js array method that converts all elements of an array into a single string by joining them with a specified separator.

//example:

let colors = ["green", "yellow", "blue"];

let result = colors.join();

console.log(result);

//flat() method: flat is a javaScript array method that converts a nested(multi-level) array into a single-level array.

//example:
console.log("example1....");

let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

let result1 = arr.flat();

console.log(result1);

console.log("example2....");

let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9,[10,11]]
];

console.log(arr1);
console.log(arr1.flat(2));

console.log("example3....");

let arr3 = [
    [1,2,3,[4,5,6,[7,8,9[10,11]]]],
    [4,5,6,[13,14,[15,16,[17]]]],
    [6,7,8,[18,19]]
];

console.log(arr3.flat(Infinity));

//slice() method: slice() copies part of an array into a new array without changing the original array.

//syntax: array.slice(start,end)

//example1:

let arr4 = [10,20,30,40,50];

let result2 = arr4.slice(1,3);

console.log(result2);//20,30


