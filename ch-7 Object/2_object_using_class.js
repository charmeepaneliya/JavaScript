
function hotel(rating,room,staff){
    ((this.rating=rating),(this.room=room),(this.staff=staff));

}

const hotel1 = new hotel(10.20,30);

console.log(typeof hotel1);

console.log("hotel 1 detail",hotel1);

const hotel2 = new hotel(20,30,40);

console.log("hotel 2 detail",hotel2);