//find()

let num = [1,2,3,4,5,6,7,8,9];
console.log(num.find((num)=>num>5));

//findIndex()

console.log(num.findIndex((num)=>num>5));

const index = num.findIndex((num) => num>5);

//some

console.log(num.some((a) => a > 9));

//every

console.log(num.every((b) => b > 0));
console.log(num.every((b) => b > 1));
console.log(num.every((b) => b > 2));
console.log(num.every((b) => b > 3));