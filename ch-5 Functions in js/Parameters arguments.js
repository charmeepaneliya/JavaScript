// function declaration
// parameter

function multiplication(x,y){
    console.log(x*y);

}

// passing arguments

multiplication(10,20);
multiplication(30,70);

function substraction(a = 10, b = 5){
    console.log(a - b);
}

// using default parameter
// subtraction(10);
// without arguments

substraction();

// with arguments and default parameter

substraction(10,20);