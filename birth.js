let btnclick = document.querySelector(".surpriseBtn");
const main = document.querySelector(".hero");
const main1 = document.querySelector(".surprise");
const song = document.querySelector("#birthdaySong");
const photo = document.querySelector("#photo");
const photos = [
    "images/1.jpeg",
    "images/2.jpeg",
    "images/3.jpeg",
    "images/4.jpeg",
    "images/5.jpeg"
];
const confettiContainer = document.querySelector(".confetti-container");
const balloons = document.querySelectorAll(".balloon");
const finalPage = document.querySelector(".finalSurprise");

let popped = 0;

btnclick.addEventListener('click', () => {
    song.play();
    song.volume = 0.5;
    main.style.display = "none";
    main1.style.display = "block";
    const ageCounter = document.querySelector("#ageCounter");

    const age = 13;   // <-- Ikkada mee brother age pettu

    let currentAge = 0;

    const counter = setInterval(() => {

        currentAge++;

        ageCounter.textContent = "🎂 " + currentAge + " Years";

        if (currentAge === age) {
            clearInterval(counter);
            ageCounter.textContent = "🎉 Today You Turned " + age + "! 🥳";
        }

    }, 100);
    main1.style.animation = "fadeZoom 1s ease forwards"
    const typing = document.querySelector("#typing")
    const message = "Happy birthday ra Mithunu♥️";
    let current = 0;
    setInterval(() => {
        photo.src = photos[current];
        current++;
        if (current == photos.length)
            current = 0;
    }, 3000)
    let i = 0;
    const interval = setInterval(() => {
        if (i < message.length) {
            typing.textContent += message[i];
            i++;
        }
        else {
            clearInterval(interval);
        }
    }, 100)
    for (let i = 0; i < 50; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        const colors = [
            "#ff4d9d",
            "#ffd54f",
            "#4fc3f7",
            "#7b2ff7",
            "#4caf50"
        ];

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.left = Math.random() * 100 + "%";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        confettiContainer.appendChild(piece);

    }

})

balloons.forEach(balloon => {

    balloon.addEventListener("click", () => {

        balloon.style.animation = "pop .4s forwards";

        setTimeout(() => {

            balloon.style.display = "none";

        }, 400);

        popped++;

        if (popped === balloons.length) {

            setTimeout(() => {

                main1.style.display = "none";

                finalPage.style.display = "block";

            }, 700);

        }

    });

});