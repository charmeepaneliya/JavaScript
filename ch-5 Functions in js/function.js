
function read(){
    console.log(" i am reading comics");
}

// function invocation

read();

//  now we why are using function in our code

console.log(total(10,20));

function total(a,b){
    return a+b;
}

// reusing same function logic with different arguments

console.log(total(150, 200));
console.log(total(30, 70));

// function expression

let run = function () {
  console.log("i am running right now");
};

run()