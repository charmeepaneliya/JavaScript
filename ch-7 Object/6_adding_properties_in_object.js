
const person={
    name:"charmee",
    lastName:"Paneliya",
    city:"BVN",
    age:21,

};

// using .notion

person.designation = "Full Stack Developer";

console.log(person);

// using []

person["bloodGroup"] = "A+";
console.log(person);

function Hotel(rating, room, staff){
     ((this.rating = rating), (this.room = room), (this.staff = staff));
}

Hotel.prototype.library = true;

const hotel1 = new Hotel(10, 15, 20);

console.log("hotel 1 detail", hotel1.library);

