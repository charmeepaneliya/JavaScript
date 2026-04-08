//this method is used to get values from array.

//example

const number = [10,20,30,40,50,60,70];

//access first element : access the first value of the array using index 0.

console.log(number[0]); //10

//random element : access any value from the array using index.

console.log(number[3]);

//last element : accsss the last value of array using (length-1).

console.log(number[number.length-1]);

//modification : access a value then change it using its index.

console.log("before",number[3]);

number[3]= 90;

console.log("after",number[3]);

