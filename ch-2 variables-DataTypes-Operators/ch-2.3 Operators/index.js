//Arithmetic Operators

let a = 10;
let b = 20;

console.log("-----Arithmetic Operators-----");

console.log("Addition",a+b);
console.log("Subtraction",a-b);
console.log("Multiplication", a*b);
console.log("Division", a/b);
console.log("Modulus", a%b);

//Assignment Operators

let x = 5;

console.log("-----Assignment Operators-----");

x += 10; //x= x+10  x=5
console.log(x); // output:15

x -= 3; // x = x-3  x=15
console.log(x); // output:12

//Comparison Operators

let p = 10;
let q = 5;

console.log("-----Comparison Operators-----");

console.log(p=="q");  //output:false
console.log(p==="q"); //output:false
console.log(p!=q); //output:true
console.log(p>q); //output:true
console.log(p<q); //output:false

//Logical Operators

let age = 20;

console.log("-----Logical Operators-----");

console.log(age>18 && age< 25); //output:true
console.log(age< 18 || age > 18);//output:true
console.log( !(age >18));//output:false

//Type Operators

let name = "Charmee Paneliya";

let num = 10;

console.log("-----Type Operators-----");

console.log(typeof name); //output:string
console.log(typeof num); //output:number

//Increment / Decrement Operators

let i = 5;
i++;
console.log(i); //output:6

i--;
console.log(i); //output:5



