
document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();

    const result = document.getElementById("result");


    function read(...comics) {
       return comics;

    }

    const myComics = read( "Jujutsu Kaisen","Your Name","Suzume","Spy x Family");

    result.innerHTML=`comics:${myComics} <br>
     total comics:${myComics.length}`;
});



// function read(comics) {
//     console.log("i have comics books", ...comics);

// }
// const comics = ["jujustu kaisen", "your name", "suzume", "spy x family"];

// read(comics);