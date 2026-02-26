//itrating through each element of array

//using for loop

let number = [10,20,30];

for(let i=0; i<number.length; i++){
    console.log(number[i]);
}
console.log(" ");

//using for...of

let number2 = [10,20,30];

for(let number of number2){
    console.log(number);
}
console.log(" ");

//using forEach

let number3 = [10,30,70,50];

number3.forEach(function(num){
    console.log(num);
})