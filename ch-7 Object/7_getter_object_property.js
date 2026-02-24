
const person = {
    firstName:"Charmee",
    lastName:"Paneliya",

    get fullName(){
        return this.firstName+" "+this.lastName;
    }
};

console.log(person.fullName);