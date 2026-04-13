//Iterating Through Array Elements

//using for loop

let arr = [10,20,30,40,50];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//manually
console.log("maually....................")
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

//using for...of

//use to go through each value of an array one by one.

console.log("for...of");
for(let element of arr){
    console.log(element);
}

//using forEach

//the method that runs function on every elements of array.

console.log("forEach......");

arr.forEach(function(element){
    console.log(element);
});

console.log(".......................................");
let multiplication = [1,2,3,4,5,6,7,8,9,10];

multiplication.forEach((value)=>{
    console.log(value * 5);
});

//concat() : used to join one or more array into one array.

let fruits = ["apple","mango","banana"];
let veg = ["potato","chili","onion","tomato"];

let result = fruits.concat(veg);

console.log("reult",result);

console.log(result.toString());