
const heartsContainer =
    document.querySelector(".floating-hearts");

const heartSymbols = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💘"
];


function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() * heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    const duration =
        5 + Math.random() * 5;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}


setInterval(createHeart, 500);


for (let i = 0; i < 10; i++) {

    setTimeout(createHeart, i * 300);

}


function nextPage() {

    window.location.href = "final1.html";

}

