
const num = [1,2,3,4,5,6,7,8,9];

let sum = 0;

for(let i=0; i<num.length;i++){
    sum+=num[i];
}

console.log("sum",sum);

let total=num.reduce((acc,curr)=>{
    return (acc+=curr);
},0);

console.log("total",total);

