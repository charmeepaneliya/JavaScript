
//block scope variable
let age = 24;
{
    let age = 18; //block scope
    console.log(age);
}

//let age =22;// variable cannot be re-declared but can be updated.

age = 21; //updating the value of age variable.

age = 20;

console.log(age);

// let a;
// console.log(a);  //output:undefined
 
// let a;
// a=10;
// console.log(a);  //output:10