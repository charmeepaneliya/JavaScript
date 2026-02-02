//priitive data types

//1. number

let age = 25;
console.log(typeof age); //output: number

let temperature = 36.5;
console.log(typeof temperature); //output: number

let price = 99.99;
console.log(typeof price); //output: number

//2. string

let string = "abcd";
console.log(typeof string); //output: string

let city = 'india';
console.log(typeof city); //output: string

let word = 'hello world';
console.log(typeof word); //output: string

//3. boolean

let isStudent = true;
console.log(typeof isStudent);//output: boolean

let hasLicense = false;
console.log(typeof hasLicense);//output: boolean

let isRaining = true;
console.log(typeof isRaining);//output: boolean

//4. undefined

let score;
console.log(typeof score); //output: undefined

let result;
console.log(typeof result); //output: undefined

let num;
console.log(typeof num);

//5. Null

let no = null;
console.log(no); //output: null
console.log(typeof no);//output: undefined

let data = null;
console.log(data); //output: null
console.log(typeof data); //output: object

let reset = null;
console.log(reset); //output: null
console.log(typeof reset); //output: object

//6. Symbol

let symbol = Symbol(10);
console.log(symbol); //output: Symbol(10)
console.log(typeof symbol); //output: symbol

let sym2 = Symbol("abcd");
console.log(sym2); //output: Symbol(abcd)
console.log(typeof sym2); //output: symbol    

let sym3 = Symbol("id");
console.log(sym3); //output: Symbol(id)
console.log(typeof sym3); //output: symbol

//7. BigInt

let number = BigInt(9007199254741991);
console.log(number);
console.log(typeof number); //output: bigint

let value = BigInt(12345678901234567890);
console.log(value);
console.log(typeof value); //output: bigint

let id = BigInt(98765432109876543210);
console.log(id);
console.log(typeof id); //output: bigint

//non-priitive data types

//1. Object

let person = {
    name:"charmi"
};
console.log(person);
console.log(typeof person); //output: object

let car = {
    brand:"KIA"
};
console.log(car);
console.log(typeof car); //output: object

let student ={
    sub1:"Javascript"
};
console.log(student.sub1);
console.log(typeof student.sub1); //output: object

//array

let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(typeof numbers); //output: object

let fruits = ["apple","banana","mango"];
console.log(fruits);
console.log(typeof fruits); //output: object

let colors = ["orange","white","green"];
console.log(colors);
console.log(typeof colors); //output: object









