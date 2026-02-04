
//continue statement

//example 1

console.log("Example 1");

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}


//example 2

console.log("Example 2");

let i = 0;
while (i < 5) {
  i++;
  if (i === 2) continue;
  console.log(i);
}
