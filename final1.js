
const unlockSection =
    document.getElementById("unlockSection");

const envelopeSection =
    document.getElementById("envelopeSection");

const letterSection =
    document.getElementById("letterSection");

const finalSection =
    document.getElementById("finalSection");

const heartGame =
    document.getElementById("heartGame");

const counter =
    document.getElementById("counter");

const lock =
    document.getElementById("lock");

const envelopeBtn =
    document.getElementById("envelopeBtn");

const letterText =
    document.getElementById("letterText");

const signature =
    document.getElementById("signature");

const lastSurpriseBtn =
    document.getElementById("lastSurpriseBtn");

const heartsContainer =
    document.getElementById("heartsContainer");

const backgroundMusic =
    document.getElementById("backgroundMusic");

function startBackgroundMusic() {
    backgroundMusic.play().catch(() => {
        // Some browsers require a fresh user interaction before playing audio.
    });
}

backgroundMusic.addEventListener("ended", () => {
    backgroundMusic.src = backgroundMusic.src.endsWith("audio1.mpeg")
        ? "audio2.mpeg"
        : "audio1.mpeg";
    backgroundMusic.load();
    startBackgroundMusic();
});

startBackgroundMusic();
document.addEventListener("pointerdown", startBackgroundMusic, { once: true });
document.addEventListener("keydown", startBackgroundMusic, { once: true });


let found = 0;


/* ---------------------------
   HIDDEN HEART GAME
--------------------------- */

function createGameHeart() {

    if (found >= 3) return;

    const heart =
        document.createElement("button");

    heart.type = "button";

    heart.className = "game-heart";

    heart.textContent = "❤️";

    const x =
        Math.random() * 85;

    const y =
        Math.random() * 75;

    heart.style.left = x + "%";

    heart.style.top = y + "%";

    heart.addEventListener("click", () => {

        found++;

        heart.remove();

        counter.textContent =
            `Hearts found: ${found} / 3`;

        createFloatingBurst(
            window.innerWidth / 2,
            window.innerHeight / 2,
            8
        );

        if (found === 3) {

            unlockSurprise();

        }

    });

    heartGame.appendChild(heart);
}


for (let i = 0; i < 3; i++) {

    setTimeout(
        createGameHeart,
        i * 300
    );

}


/* ---------------------------
   UNLOCK
--------------------------- */

function unlockSurprise() {

    lock.textContent = "🔓";

    counter.textContent =
        "You found all my hearts ❤️";

    setTimeout(() => {

        unlockSection.classList.add("hidden");

        envelopeSection.classList.remove("hidden");

    }, 1200);

}


/* ---------------------------
   ENVELOPE
--------------------------- */

envelopeBtn.addEventListener("click", () => {

    envelopeBtn.style.transform =
        "scale(1.3) rotate(8deg)";

    setTimeout(() => {

        envelopeSection.classList.add("hidden");

        letterSection.classList.remove("hidden");

        startLetter();

    }, 700);

});


/* ---------------------------
   TYPING LETTER
--------------------------- */

const paragraphs = [

    "Happy Birthday to the most special person in my life. ❤️",

    "En life la enaku kidacha best gift nu solalam avala poratathuku aproo enaku kidacha first best friend.expect ehh panatha alavuku enna nalla pathura paiyan",

    "enaku unna evala pudikum nu unake nalla therium ellara marium illama enaku real ahh enna theva nu paathu paathu panra paiyan summa love panunom nu love matum en carrier layum care edukura romba proud ahh irukum sometimes. 💕",

    "padikura visyama irunthalum enna vsiyama irunthaum romba practical ahh irupa atha apdiye keepup pannu thangoo,aproo oru chinna advise yarayum blind ahh nambatha unaku therium yaru yaru epdii nammata pesuranganu so atha carefu ahh handle pannu seriya chlooo",

    "en chloo thangooo en happiness en proud ellame neethan thangoo aproo ini onnu ennana enakaga onne onnu pannu yarukitaum yaru munadium enna vittukudukathama thangoo aproo enna sanda vanthalum enkuda aniku nightkulla pesu ma chloo ithuvaraikum apdii panathu illa enta pesama thoongunathu illa ipo iruka marii epdium iru ma 🫂",

    "evala thanks sonalum pathathu unaku enna avala nalla pathura unaku epomum inthe marii enna comment adichitu jollya enna adpiye kutitu po ma ",

    "No matter how many birthdays come and go, I hope I get to celebrate many more of them with you. ❤️"

];


let paragraphIndex = 0;


function startLetter() {

    typeParagraph();

}


function typeParagraph() {

    if (paragraphIndex >= paragraphs.length) {

        signature.classList.remove("hidden");

        setTimeout(() => {

            lastSurpriseBtn.classList.remove("hidden");

        }, 1000);

        return;
    }


    const p =
        document.createElement("p");

    letterText.appendChild(p);


    const text =
        paragraphs[paragraphIndex];

    let character = 0;


    const typing =
        setInterval(() => {

            p.textContent +=
                text[character];

            character++;


            if (character >= text.length) {

                clearInterval(typing);

                paragraphIndex++;

                setTimeout(
                    typeParagraph,
                    400
                );

            }

        }, 25);

}


/* ---------------------------
   FINAL SURPRISE
--------------------------- */

lastSurpriseBtn.addEventListener(
    "click",
    () => {

        letterSection.classList.add("hidden");

        finalSection.classList.remove("hidden");

        createHeartExplosion();

        setTimeout(
            createHeartExplosion,
            700
        );

        setTimeout(
            createHeartExplosion,
            1400
        );

    }
);


/* ---------------------------
   HEART EXPLOSION
--------------------------- */

function createHeartExplosion() {

    const centerX =
        window.innerWidth / 2;

    const centerY =
        window.innerHeight / 2;


    for (let i = 0; i < 45; i++) {

        const heart =
            document.createElement("div");

        heart.textContent =
            Math.random() > .5
                ? "❤️"
                : "🫂";

        heart.style.position =
            "fixed";

        heart.style.left =
            centerX + "px";

        heart.style.top =
            centerY + "px";

        heart.style.fontSize =
            (18 + Math.random() * 25) + "px";

        heart.style.zIndex = "100";

        heart.style.pointerEvents =
            "none";


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            120 + Math.random() * 350;

        const endX =
            Math.cos(angle) * distance;

        const endY =
            Math.sin(angle) * distance;


        heart.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0.3)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${endX}px),
                            calc(-50% + ${endY}px)
                        )
                        scale(1.2)
                        rotate(360deg)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    1500 + Math.random() * 800,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }

        );


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 2500);

    }

}


/* ---------------------------
   CONTINUOUS FLOATING HEARTS
--------------------------- */

const floatingItems = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "🫂",
    "💞",
    "✨"
];


function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.textContent =
        floatingItems[
            Math.floor(
                Math.random() *
                floatingItems.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 25) + "px";


    const duration =
        5 + Math.random() * 6;

    heart.style.animationDuration =
        duration + "s";


    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}


setInterval(
    createFloatingHeart,
    400
);


/* ---------------------------
   SMALL BURST
--------------------------- */

function createFloatingBurst(
    x,
    y,
    count
) {

    for (let i = 0; i < count; i++) {

        const heart =
            document.createElement("div");

        heart.textContent = "💕";

        heart.style.position =
            "fixed";

        heart.style.left = x + "px";

        heart.style.top = y + "px";

        heart.style.fontSize = "22px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex = "100";


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            50 + Math.random() * 80;


        heart.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(.5)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${Math.cos(angle) * distance}px),
                            calc(-50% + ${Math.sin(angle) * distance}px)
                        )
                        scale(1.2)`,

                    opacity: 0
                }
            ],

            {
                duration: 700
            }

        );


        document.body.appendChild(heart);


        setTimeout(
            () => heart.remove(),
            800
        );

    }

}

