var c = document.getElementById("myCanvas");

c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");
var img = document.getElementById("rzut1");
ctx.drawImage(img, 900, 700);

function draw() {

}