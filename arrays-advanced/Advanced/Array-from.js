/* Array.from() creates an array from:

string

iterable

array-like object */

let arr = Array.from("hello");

console.log(arr);

//Convert string "12345" to array of numbers.

let arr1 = Array.from("12345",num => Number(num));

console.log(arr1);