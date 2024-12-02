
// create audio in JavaScript
let mushroom = new Audio("assets/1-up.mp3");
let flower = new Audio("assets/power-up.mp3");
let coin = new Audio("assets/coin.mp3");

// images is a NodeList
let images = document.querySelectorAll("img");
console.log(images);

// mushroom -> image[0]
// flower -> image[1]
// coin -> image[2]

// Javscript Arrow Functions
// https://www.w3schools.com/js/js_arrow_function.asp

images[0].addEventListener("click", ()=> {
    mushroom.play(); 
});

images[1].addEventListener("click", ()=> {
    flower.play();
});

images[2].addEventListener("click", ()=> {
    coin.play();
});