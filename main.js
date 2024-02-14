const nameR = document.querySelector('.nameR');
const nameP = document.querySelector('.nameP');
const nameG = document.querySelector('.nameG');

const email = document.querySelector('.email');
const messageModal = document.getElementById('messageModal');
const messageText = document.getElementById('messageText');


const music = document.getElementById('music');
let song1 = new Audio('./music/saltillo-hollow.mp3');



// CAMBIAR FUENTE DE LETRA CLICK
// MODIFICAR TEXTO UNA VEZ CLICKADO


/*function for music */


music.addEventListener('click', function (e) {
    let changeStyle = e.target.classList;
    if (changeStyle.contains('fa-music')) {
        changeStyle.remove('fa-music');
        changeStyle.add('fa-pause');
        song1.play();
    } else {
        changeStyle.remove('fa-pause');
        changeStyle.add('fa-music');
        song1.pause();
    }




})

// copy email to clipboard
const userCopyTxt = (txt) => {
    navigator.clipboard.writeText(txt)
        .then(() => showMsg('Copied '))
        .catch(error => showMsg('Error copying text: ' + error));
}


// show a message when the user copy my email in his clipboard
const showMsg = (msg) => {
    messageText.textContent = msg;
    messageModal.style.display = 'block';

    setTimeout(() => {
        messageModal.style.display = 'none';
    }, 2000);

};



//function for change words

// change from R

/*NOTAS: HACER UN ÚNICO CONTENEDOR CON CAMBIO ÚNICO Y ANIMACIÓN EN LA PRIMERA LETRA */

function changeR() {

    if (nameR.innerHTML === '<span class="firstLetter">R</span>aquel') {
        nameR.innerHTML = '<span class="firstLetter">R</span>eliable'
    } else {
        nameR.innerHTML = '<span class="firstLetter">R</span>aquel'
    }

};
function changeP() {

    if (nameP.innerHTML === '<span class="firstLetter">P</span>eña') {
        nameP.innerHTML = '<span class="firstLetter">P</span>asionate'
    } else {
        nameP.innerHTML = '<span class="firstLetter">P</span>eña'
    }

};
function changeG() {

    if (nameG.innerHTML === '<span class="firstLetter">G</span>onzález') {
        nameG.innerHTML = '<span class="firstLetter">G</span>enuine'
    } else {
        nameG.innerHTML = '<span class="firstLetter">G</span>onzález'
    }

};

// Event listener to copy my mail to the clipboard
email.addEventListener('click', function () {
    userCopyTxt(email.innerText);

});

// listeners for change de words
nameR.addEventListener('click', changeR);
nameP.addEventListener('click', changeP)
nameG.addEventListener('click', changeG)


// code for hamburger 
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-mobile-toggle');
    const navList = document.querySelector('nav ul');

    navToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});

// Code for emoji game
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