//deep copy (primeative data type)

//passed by value

console.log("=====Deep Copy=====");

let a=10;

let b=a;

console.log("b",b);

b=20;

console.log("b",b);

console.log("a",a);



//shallo copy 

//non-primeative

//passed by reference

console.log("=====Shallo copy=====");

let student={name: "charmi", age:21,course:"Full Stack"}

let student2 = student;

console.log("student1",student);
console.log("student2");

console.log("aftr changes");

student2.name = "Tisha";

console.log("student2", student2);
console.log("student", student);