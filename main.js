document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-mobile-toggle');
    const navList = document.querySelector('nav ul');

    navToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});


let emojiInterval;

function showRandomEmoji() {
    const emojiContainer = document.getElementById('emoji-container');
    const emojis = ["😊", "🚀", "🌟", "🎉", "💻", "🍕", "🎈", "❤️", "🌈", "👾"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const emojiElement = document.createElement('div');
    emojiElement.textContent = randomEmoji;
    emojiElement.style.position = 'absolute';
    emojiElement.style.left = Math.random() * (emojiContainer.offsetWidth - 30) + 'px';
    emojiElement.style.top = Math.random() * (emojiContainer.offsetHeight - 30) + 'px';

    emojiElement.addEventListener('click', function () {
        emojiContainer.removeChild(emojiElement);
    });

    emojiContainer.appendChild(emojiElement);
}

document.getElementById('start').addEventListener('click', function () {
    emojiInterval = setInterval(showRandomEmoji, 1000);
});

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(emojiInterval);
});

document.getElementById('open-modal').addEventListener('click', function () {
    document.getElementById('game-modal').style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', function () {
    clearInterval(emojiInterval);
    document.getElementById('game-modal').style.display = 'none';
});