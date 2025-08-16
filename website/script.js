// ================= AUDIO SETUP =================
const audio = new Audio('music/soft-music.mp3'); // Make sure path is correct
audio.loop = true; // Loop forever

const playBtn = document.getElementById('playAudioBtn');
playBtn.addEventListener('click', () => {
    audio.play()
        .then(() => {
            console.log('Audio is playing');
            playBtn.style.display = 'none'; // hide button after playing
        })
        .catch(err => {
            console.log('Audio play blocked:', err);
            alert("Click the play button to enable audio!");
        });
});

// ================= FLOATING HEARTS =================
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = 3 + Math.random() * 2 + 's';
    heart.style.width = 15 + Math.random() * 15 + 'px';
    heart.style.height = heart.style.width;
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// ================= LOVE NOTES POPUP =================
const noteBtn = document.querySelector('.note-btn');
const notePopup = document.getElementById('notePopup');
const closeNote = document.getElementById('closeNote');
const noteText = document.querySelector('#notePopup p');

const loveNotes = [
    "You make my heart skip a beat! 💖",
    "Every moment with you is magical ✨",
    "You are my sunshine ☀️",
    "I love you more every day ❤️",
    "Forever and always, my love 💕"
];

if (noteBtn) { // Check if button exists
    noteBtn.addEventListener('click', () => {
        const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
        noteText.textContent = randomNote;
        notePopup.style.display = 'block';
    });
}

if (closeNote) { // Check if close button exists
    closeNote.addEventListener('click', () => {
        notePopup.style.display = 'none';
    });
}
