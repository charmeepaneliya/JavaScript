 let images = [
    "https://images.pexels.com/photos/31629024/pexels-photo-31629024.jpeg",
    "https://images.pexels.com/photos/32028725/pexels-photo-32028725.jpeg",
    "https://images.pexels.com/photos/31658699/pexels-photo-31658699.jpeg",
    "https://images.pexels.com/photos/15592844/pexels-photo-15592844.jpeg",
    "https://images.pexels.com/photos/14978029/pexels-photo-14978029.jpeg",
    "https://images.pexels.com/photos/34459124/pexels-photo-34459124.jpeg",
    "https://images.pexels.com/photos/34189504/pexels-photo-34189504.jpeg",
    "https://images.pexels.com/photos/35626158/pexels-photo-35626158.jpeg",
    "https://images.pexels.com/photos/32278433/pexels-photo-32278433.jpeg"
];

let index = 0;

function showSlide(){
   let img = document.getElementById("slide");
    img.src = images[index];
}

function nextSlide(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    showSlide();
}
function prevSlide(){
    index--;
    if(index < 0){
        index = images.length-1;
    }
    showSlide();
}

setInterval(nextSlide,3000);