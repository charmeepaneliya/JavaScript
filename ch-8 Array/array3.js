
//splice() method is used to add, remove, or replace elements in an array.

//add

let fruits = ["apple", "banana", "lichi"];
fruits.splice(2, 0, "mango");

console.log("fruits:", fruits);

//remove

let Vegetable = ["Brinjal", "Potato", "Carrot", "Cabbage"];
Vegetable.splice(1, 1);

console.log("Vegetable:", Vegetable);

//replace

let fruits1 = ["apple", "banana", "lichi"];
fruits1.splice(1, 1, "mango");

console.log("fruits1:", fruits1);

//length

let numbers = [10, 20, 30, 40, 50];
numbers.splice(numbers.length);

console.log(numbers);

