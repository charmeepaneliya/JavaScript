//Rest operator collects remaining elements.
/*  Used mostly in:

destructuring

function parameters  */

let [a,...rest] = [1,2,3,4,5];

console.log(a);
console.log(rest);


//Create function that sums unlimited numbers.

function sum(...numbers){
    return numbers.reduce((a,b)=>{
        return a+b;
    },0);
}
console.log(sum(1,2,3,4,5));