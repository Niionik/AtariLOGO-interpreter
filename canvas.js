var canvas = document.querySelector('canvas');


const ctx = canvas.getContext("2d");


console.log(canvas);
ctx.beginPath();
ctx.moveTo(0, canvas.height / 2); //zaczniemy rysowanie od x: 0, y: polowaWysokosci
const step = 10; //krok co 10
const howMany = canvas.width / step; //ile kroków

for (let i = 1; i <= howMany; i++) {
    const y = canvas.height / 2 + rand(-50, 50);
    ctx.lineTo(i * step, y)
}
ctx.stroke();