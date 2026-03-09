//Create array of 10 ones.

/* Used for:

matrices

tables

grids */

let matrix =[
    [1,2],
    [3,4]
];

console.log(matrix[0][1]);
console.log(" ");

//Print all elements of 2D array.

let matrix1 =[
    [1,2],
    [3,4]
];

for(let i=0;i<matrix1.length;i++){
    for(let j=0;j<matrix1[i].length;j++){
        console.log(matrix1[i][j]);
    }
}