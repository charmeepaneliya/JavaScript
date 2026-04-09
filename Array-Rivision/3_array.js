//splice() method : splice() is a method use to change an array by adding, removing, or replacing elements.
//splice() modifies the original array.

let animals = ["cat","dog","rabit","panda","tiger","lion","deer"];
            //   0     1      2       3       4      5      6

console.log("animal before",animals);

//add

animals.splice(1,0,"fox");
console.log("after adding",animals);

//remove

animals.splice(1,2);
console.log("after remove",animals);
animals.splice(2,1);
console.log("after remove",animals);
animals.splice(2,3);
console.log("after remove",animals);

//update/replace

animals.splice(1,2,"panda");
console.log("after replace",animals);


console.log("splice complete....................................");

//adding element to an array in last
//push()

animals.push("lion");
console.log(animals);

//adding element to an array from the starting
//unshift()

animals.unshift("tiger");
console.log(animals);

//remove last elelment of array
//pop()

animals.pop();
console.log(animals);

//remove first element of array
//shift()

animals.shift();
console.log(animals);