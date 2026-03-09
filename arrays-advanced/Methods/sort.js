//Sorts array elements.
//sort() compares two elements at a time.

//negative → a comes first
//positive → b comes first

//Question: Sort numbers.

let arr = [5,2,8,1];
arr.sort((a,b)=>{
    return a-b;
},0);

console.log(arr);