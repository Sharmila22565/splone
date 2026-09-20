const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsContainer = document.querySelector(".hearts-container");


// --------------------------------
// YES BUTTON
// --------------------------------

yesBtn.addEventListener("click", () => {

    // Open surprise page
    window.location.href = "surprise.html";

});


// --------------------------------
// NO BUTTON ESCAPE
// --------------------------------

function moveNoButton() {

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.max(
        10,
        Math.random() * maxX
    );

    const randomY = Math.max(
        10,
        Math.random() * maxY
    );

    noBtn.style.position = "fixed";

    noBtn.style.left = randomX + "px";

    noBtn.style.top = randomY + "px";

    noBtn.style.transition = "all 0.25s ease";
}


// Desktop

noBtn.addEventListener("mouseenter", moveNoButton);


// Mobile

noBtn.addEventListener("touchstart", (event) => {

    event.preventDefault();

    moveNoButton();

});


// If somehow clicked

noBtn.addEventListener("click", (event) => {

    event.preventDefault();

    moveNoButton();

});


// --------------------------------
// FLOATING HEARTS
// --------------------------------

const heartSymbols = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💘",
    "💓"
];


function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML =
        heartSymbols[
            Math.floor(
                Math.random() * heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    const duration =
        5 + Math.random() * 5;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, duration * 1000);
}


// Create hearts continuously

setInterval(createHeart, 400);


// Initial hearts

for (let i = 0; i < 15; i++) {

    setTimeout(createHeart, i * 200);

}