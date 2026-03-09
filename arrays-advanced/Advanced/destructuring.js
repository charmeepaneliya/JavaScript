//Destructuring means extracting values from an array and storing them into variables.

let arr = [10,20,30];

let [a,b,c]= arr;

console.log(a);//10
console.log(b);//20
console.log(c);//30

//Swap two numbers using destructuring.

let a1 = 5;
let b1 = 10;

[a1,b1] = [b1,a1];

console.log(a1,b1);
