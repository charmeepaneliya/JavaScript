//indexdof()

const fruit = ["apple", "gvava", "mango", "banana", "grapes"];

console.log("index of", fruit.indexOf("gvava"));

//includes()

console.log("includes", fruit.includes("apple"));
console.log("includes", fruit.includes("lichi"));

//sort()
let letter = ["c", "a", "d", "b"];
console.log("letter", letter);

console.log("shorted letter", letter.sort());

let number = [7, 3, 5, 4, 2, 1, 6];

console.log("letter", number);

console.log("shorted letter", number.sort());

//descending order

console.log(
  "descending",
  number.sort((a, b) => {
    return b - a;
  }),
);
