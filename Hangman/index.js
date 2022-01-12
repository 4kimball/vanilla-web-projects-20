const words = ['apple', 'banana', 'coconut', 'discord', 'electric', 'facebook',
'google', 'hippopotamus', 'instagram']

let canvas = document.querySelector(".hangman-canvas");
let ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 240;



function initHangman() {
    ctx.beginPath();
    ctx.moveTo(0, 230);
    ctx.lineTo(150, 230);
    ctx.moveTo(74, 230);
    ctx.lineTo(75, 30);
    ctx.moveTo(72.5, 30);
    ctx.lineTo(150, 30);
    ctx.moveTo(150, 27.5);
    ctx.lineTo(150, 60);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#fff";
    ctx.stroke();
}

initHangman();