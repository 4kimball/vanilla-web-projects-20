const words = ['apple', 'google', 'samsung', 'facebook', 'tesla', 'adidas', 'amazon', 'microsoft', 'nvidia', 'intel'];
const wordsLen = words.length;
const index = Math.floor(Math.random() * wordsLen);
const word = words[index].split('');
const inputLog = [];
let chance = 0;
const canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let isSuccess = false;



window.addEventListener('keydown', e => handleKeydown(e.key))

function checkPass() {
    let letters = Array.from(document.querySelectorAll('.letter'));
    for(let i=0; i<word.length; i++) {
        if (letters[i].innerText === '') return false;
        if (letters[i].innerText !== word[i]) return false;
    }

    handleToast('축하합니다! 성공입니다.')
    return true
}

function handleToast(message) {
    const toast = document.querySelector('.toast');
    const toastMessage = document.querySelector('.toast .toast-msg');
    const againBtn = document.querySelector('.toast button');
    toastMessage.innerText = message;
    toast.style.top = '150px';
    
    againBtn.addEventListener('click', () => {
        window.location.reload();
    })
}

function handleKeydown(letter) {
    const reg = /[a-zA-Z]/g;
    if(!reg.test(letter) || chance >= 6) return false;
    
    
    if(inputLog.includes(letter)) return false;
    inputLog.push(letter);
    let flag = false;
    let letters = Array.from(document.querySelectorAll('.letter'));
    for(let i=0; i<word.length; i++) {
        if (word[i] === letter) {
            flag = true;
            letters[i].innerText = letter;
        }
    }

    isSuccess = checkPass();
    if (isSuccess) return;
    if(!flag) {
        const wrongs = document.querySelector('.wrong-letters');
        const p = document.createElement('p')
        p.innerText = letter;
        wrongs.appendChild(p);
        ++chance;
        handleInputWrong(chance);
    }
    if(chance >= 6) {
        handleToast('실패했습니다.');
        return false;
    }
}
function setLetterBar(size) {
    const container = document.querySelector('.words');
    for(let i=0; i<size; i++) {
        let letter = document.createElement('div');
        letter.className = 'letter';
        container.appendChild(letter);
    }
}
function initHangman() {
    canvas.width = 320;
    canvas.height = 240;
    

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(20, 220);
    ctx.lineTo(120, 220);
    ctx.moveTo(70, 220);
    ctx.lineTo(70, 10);
    ctx.moveTo(68.5, 10);
    ctx.lineTo(140, 10);
    ctx.moveTo(140, 8.5);
    ctx.lineTo(140, 30);
    ctx.stroke();
}

function handleInputWrong(chance) {
    switch(chance) {
        case 1:
            drawFace();
            break;
        case 2:
            drawBody();
            break;
        case 3:
            drawLeftArm();
            break;
        case 4:
            drawRightArm();
            break;
        case 5:
            drawLeftLeg();
            break;
        case 6:
            drawRightLeg();
            break;
        default:
            return null;
    }
}

function drawFace() {
    ctx.beginPath();
    ctx.arc(140, 55, 25, 0, 360 * Math.PI / 180, false);
    ctx.stroke();
}

function drawBody() {
    ctx.beginPath();
    ctx.moveTo(140, 80);
    ctx.lineTo(140, 140);
    ctx.stroke();
}

function drawLeftArm() {
    ctx.beginPath();
    ctx.moveTo(140, 100);
    ctx.lineTo(105, 80);
    ctx.stroke();
}

function drawRightArm() {
    ctx.beginPath();
    ctx.moveTo(140, 100);
    ctx.lineTo(175, 80);
    ctx.stroke();
}

function drawLeftLeg() {
    ctx.beginPath();
    ctx.moveTo(140, 140);
    ctx.lineTo(105, 170);
    ctx.stroke();
}

function drawRightLeg() {
    ctx.beginPath();
    ctx.moveTo(140, 140);
    ctx.lineTo(175, 170);
    ctx.stroke();
}
initHangman();

setLetterBar(word.length);