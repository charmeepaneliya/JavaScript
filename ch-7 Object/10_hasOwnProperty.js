// const person ={
//     name:"charmee",
//     age:20,
// };

// console.log(person.hasOwnProperty("name"));
// console.log(person.hasOwnProperty("city"));



function Person(name){
    this.name = name;

}
Person.prototype.age = 20;

const user  = new Person("charmee");

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("city"));