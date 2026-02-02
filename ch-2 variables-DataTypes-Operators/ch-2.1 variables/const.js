
//block scope constant variable
const age = 21;
{
    const age = 18; //block scope
    console.log(age);
}

//age = 22; // cannot update the value of constant variable.

//const age = 23; // cannot re-declare the constant variable.

console.log(age);

//const a;
//console.log(a);  //output:SyntaxError: Missing initializer in const declaration
//const a; --- IGNORE ---

