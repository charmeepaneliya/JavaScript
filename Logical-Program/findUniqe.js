
let arr = [1,3,5,3,5,2,6,7,6,7];

let uniqe = arr.filter(function(num){
    return arr.indexOf(num) === arr.lastIndexOf(num);
});

console.log(uniqe);


//filter() check every element of the array one by one

// 1,3,5,3,5,2,6,7,6,7 

//num = 1  -> value

//check:
//indexOf(1) -> 0
//lastIndexOf(1) -> 0  it is a equal index so, add new array [1]

//next num -> 3
//indexOf(3) -> 1 index
//lastIndexOf(3) -> 3 index  it is index diffrent so,skip array


//using string

let string = "1323456475";

let uniqe1 = "";

for(let i=0;i<string.length;i++){
    if(string.indexOf(string[i]) === string.lastIndexOf(string[i])){
        uniqe1 = uniqe1 + string[i];
    }
}
console.log(uniqe1);