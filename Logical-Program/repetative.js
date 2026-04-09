//using array method
let arr = [1,3,5,3,5,2,6,7,6,7];

let repeat = arr.filter(function(num){
    return arr.indexOf(num) !== arr.lastIndexOf(num);
});

console.log(repeat);

//using string

let string = "1323456475";

let uniqe1 = "";

for(let i=0;i<string.length;i++){
    if(string.indexOf(string[i]) !== string.lastIndexOf(string[i])){
        uniqe1 = uniqe1 + string[i];
    }
}
console.log(uniqe1);