// ===== MUSIC CONTROL =====
const playBtn = document.getElementById("playAudioBtn");
const bgMusic = document.getElementById("bgMusic");

if (playBtn && bgMusic) {
    playBtn.addEventListener("click", () => {
        bgMusic.play()
            .then(() => {
                console.log("Music is playing 🎶");
                playBtn.textContent = "🎶 Music Playing...";
                playBtn.disabled = true;
            })
            .catch(err => {
                console.error("Error playing music:", err);
                alert("Click again to allow music!");
            });
    });
}

// ===== LOVE NOTES POPUP =====
const noteBtn = document.querySelector(".note-btn");
const notePopup = document.getElementById("notePopup");
const closeNote = document.getElementById("closeNote");
const noteText = document.querySelector("#notePopup p");

const loveNotes = [
    "You make my heart skip a beat! 💖",
    "Every moment with you is magical ✨",
    "You are my sunshine ☀️",
    "I love you more every day ❤️",
    "Forever and always, my love 💕"
];

if (noteBtn) {
    noteBtn.addEventListener("click", () => {
        const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
        noteText.textContent = randomNote;
        notePopup.style.display = "block";
    });
}

if (closeNote) {
    closeNote.addEventListener("click", () => {
        notePopup.style.display = "none";
    });
}
