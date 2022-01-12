const words = ['apple', 'banana', 'coconut', 'discord', 'electric', 'facebook',
'google', 'hippopotamus', 'instagram', 'tesla']

let canvas = document.querySelector(".hangman-canvas");
let ctx = canvas.getContext("2d");

const wordsLength = words.length;
const wordsIndex = Math.floor(Math.random() * 10);
const word = words[wordsIndex];
const wordSize = word.length;

makeLetterBox(wordSize);
window.addEventListener('keydown', e => checkLetter(e.key));

function checkLetter(letter) {
    const reg = /[a-zA-Z]/g;
    if (!reg.test(letter)) return false;
    
    let flag = false;
    const letters = Array.from(document.querySelectorAll('.letter'));
    for(let i=0; i<wordSize; i++) {
        if (word[i] === letter) {
            flag = true;
            letters[i].innerText = letter;
        }
    }

    if (!flag) {
        const wrongLetters = document.querySelector('.wrong-letters');
        const wrongLetter = document.createElement('p');
        wrongLetter.innerText = letter;
        wrongLetters.appendChild(wrongLetter);``
    }
}
function initHangman() {
    canvas.width = 320;
    canvas.height = 240;
    ctx.beginPath();
    ctx.moveTo(0, 230);
    ctx.lineTo(100, 230);
    ctx.moveTo(49, 230);
    ctx.lineTo(49, 30);
    ctx.moveTo(47.5, 30);
    ctx.lineTo(150, 30);
    ctx.moveTo(150, 27.5);
    ctx.lineTo(150, 60);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#fff";
    ctx.stroke();
}

function strokeFace() {
    ctx.beginPath();
    ctx.arc(150, 85, 25, 0, 360 * Math.PI / 180, false);
    ctx.stroke();
}

function storkeBody() {
    ctx.beginPath();
    ctx.moveTo(150, 110);
    ctx.lineTo(150, 180);
    ctx.stroke();
}

function strokeLeftArm() {
    ctx.beginPath();
    ctx.moveTo(150, 130);
    ctx.lineTo(115, 115);
    ctx.stroke();
}

function strokeRightArm() {
    ctx.beginPath();
    ctx.moveTo(150, 130);
    ctx.lineTo(185, 115);
    ctx.stroke();
}

function strokeLeftLeg() {
    ctx.beginPath();
    ctx.moveTo(150, 178);
    ctx.lineTo(115, 205);
    ctx.stroke();
}

function strokeRightLeg() {
    ctx.beginPath();
    ctx.moveTo(150, 178);
    ctx.lineTo(185, 205);
    ctx.stroke();
}

function makeLetterBox(size) { 
    const letters = document.querySelector('.letters');
    for(let i=0; i < size; i++) {
        let letter = document.createElement('div');
        letter.className = 'letter';
        letters.appendChild(letter);
    }
}
initHangman();
strokeFace();
storkeBody();
strokeLeftArm();
strokeRightArm();
strokeLeftLeg();
strokeRightLeg();