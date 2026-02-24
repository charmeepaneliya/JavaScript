
const student ={
    marks: 0,

    set updateMarks(value){
        this.marks = value;
    }
};

student.updateMarks = 95;

console.log(student.marks);