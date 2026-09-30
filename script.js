function checkPassword() {

    const password =
        document.getElementById("password-input").value;

    const passwordPage =
        document.getElementById("password-page");

    const mainContent =
        document.getElementById("main-content");

    const wrongPassword =
        document.getElementById("wrong-password");

    if (password === "01oktober") {

        passwordPage.style.display = "none";

        mainContent.style.display = "block";

        window.scrollTo(0, 0);

        startHearts();

    } else {

        wrongPassword.textContent =
            "Hmm... bukan itu 😭 Coba ingat lagi.";

    }
}


/* ENTER UNTUK PASSWORD */

document
    .getElementById("password-input")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            checkPassword();
        }

    });


/* SCROLL */

function scrollToSection(id) {

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* MUSIC */

const music =
    document.getElementById("bg-music");

const musicButton =
    document.getElementById("music-button");

let playing = false;

function toggleMusic() {

    if (playing) {

        music.pause();

        musicButton.textContent =
            "🎵 Play Music";

        playing = false;

    } else {

        music.play();

        musicButton.textContent =
            "⏸ Pause Music";

        playing = true;

    }

}


/* FINAL SURPRISE */

function showSurprise() {

    const surprise =
        document.getElementById("surprise");

    surprise.style.display = "block";

    createConfetti();

}


/* HEART EFFECT */

function startHearts() {

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            Math.random() * 15 + 10 + "px";

        heart.style.opacity = "0.5";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "0";

        heart.style.transition =
            "transform 5s linear, opacity 5s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                "translateY(-110vh)";

            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {

            heart.remove();

        }, 5500);

    }, 900);

}


/* CONFETTI */

function createConfetti() {

    for (let i = 0; i < 35; i++) {

        const item =
            document.createElement("div");

        item.innerHTML =
            ["❤️", "💕", "💗", "✨", "🎉"][
                Math.floor(Math.random() * 5)
            ];

        item.style.position = "fixed";

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.top =
            Math.random() * 100 + "vh";

        item.style.fontSize =
            Math.random() * 20 + 15 + "px";

        item.style.zIndex = "1000";

        item.style.pointerEvents = "none";

        document.body.appendChild(item);

        setTimeout(() => {

            item.remove();

        }, 3000);

    }

}