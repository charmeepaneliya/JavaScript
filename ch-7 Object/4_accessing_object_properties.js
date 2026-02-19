
const person={
    name:"charmee",
    lastName:"Paneliya",
    city:"BVN",
    age:21,

    //name:"tisha",
};

console.log(person);

// accessing

// now accessing the values of personDetails object using . notation

console.log(person.name);

// now accessing the values of personDetails object using []

console.log(person["city"]);

// now destructing

const{name,lastName}=person;

console.log(name);
console.log(lastName);
