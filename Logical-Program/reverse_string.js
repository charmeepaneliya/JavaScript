
//using array inbuilt method

const word = "Hello world";

const rev = word.split("").reverse().join("");

console.log("before:",word);
console.log("after:",rev);

//split() : convert string into array

//reverse() : reverser array

//join() : convert array into string



//using loop

const num = "1 2 3 4 5 6 7";
let reverse = "";

for(let i=num.length-1;i>=0;i--){
    reverse += num[i];
}

console.log("number", reverse);

