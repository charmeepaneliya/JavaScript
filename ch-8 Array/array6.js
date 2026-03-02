//join()
const fruit = ["apple", "gvava", "mango", "banana", "grapes"];
console.log("fruit",fruit);
console.log("fruit array to string",fruit.join(" "));

//flat()

let number = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log("number array",number);
console.log("flat array", number.flat());

number = [
    [1,2,3],
    [4,5,6 , [10,11,12]],
    [7,8,9]
];

console.log("flat array", number.flat(2));  

number = [
    [1,2,3,[13,3,[14,15,[10,12,[16,17]]]]],
    [4,5,6 , [10,11,12]],
    [7,8,9,[10,21,[22,23,[24,25,[25,26,[27,28]]]]]]
];

console.log(number);
console.log(number.flat(Infinity));

//slice()

console.log("fruit",fruit);
console.log(fruit.slice(2,4));

