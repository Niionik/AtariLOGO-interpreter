var c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");
var img = document.getElementById("rzut1");


var v = document.getElementById("youCanvas");
v.width = window.innerWidth;
v.height = window.innerHeight;
var ctv = v.getContext("2d");
ctv.clearRect(0, 0, v.width, v.height);
ctx.clearRect(0, 0, c.width, c.height);

rzptw = (c.width / 2) - (img.offsetWidth / 2);
rzpth = (c.height / 2) - (img.offsetWidth / 2);

class Turtle {
    pos_x = 0;
    pos_y = 0;

    last_pos_x = 0;
    last_pos_y = 0;

    angle = 0;
    ctx = null;
    ctv = null;
    turtleImg;

    penDown = true;

    constructor(post_x, post_y, ctx, ctv, turtleImg) {
        this.turtleImg = turtleImg;

        this.pos_x = post_x;
        this.pos_y = post_y;

        this.last_pos_x = this.pos_x;
        this.last_pos_y = this.pos_y;

        this.ctx = ctx;
        this.ctv = ctv;

        this.ctx.moveTo(this.pos_x, this.pos_y);
    }

    fd(pixels) {
        this.remove();
        var wx = pixels * Math.sin(this.getAngle())
        var wy = pixels * Math.cos(this.getAngle());

        this.last_pos_x = this.pos_x;
        this.last_pos_y = this.pos_y;

        this.pos_x -= wx;
        this.pos_y -= wy;
        this.draw();
    }

    bk(pixels) {
        pixels = pixels * (-1);
        this.remove();
        var wx = pixels * Math.sin(this.getAngle())
        var wy = pixels * Math.cos(this.getAngle());

        this.last_pos_x = this.pos_x;
        this.last_pos_y = this.pos_y;

        this.pos_x -= wx;
        this.pos_y -= wy;
        this.draw();
    }

    rt(pixels) {
        this.remove();
        this.angle -= pixels;
        this.draw();
    }

    lt(pixels) {
        this.remove();
        this.angle -= pixels * (-1);
        this.draw();
    }

    ht() {
        this.remove();
    }

    st() {
        this.draw();
    }

    cs() {
        this.start();
    }

    pu() {
        this.penDown = false;
    }

    pd() {
        this.penDown = true;
    }


    drawTurtle() {
        this.ctv.save()

        //Convert degrees to radian
        var rad = this.getAngle();

        //Set the origin to the center of the image
        this.ctv.translate(this.pos_x, this.pos_y);

        //Rotate the canvas around the origin
        this.ctv.rotate(rad * (-1));

        //draw the image
        this.ctv.drawImage(this.turtleImg, this.turtleImg.offsetWidth / 2 * (-1), this.turtleImg.offsetHeight / 2 * (-1), this.turtleImg.offsetWidth, this.turtleImg.offsetHeight);

        // Restore canvas state as saved from above
        this.ctv.restore();
    }

    getAngle() {
        return (this.angle * Math.PI) / 180;
    }

    draw() {

        if (this.penDown) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.last_pos_x, this.last_pos_y);
            this.ctx.lineTo(this.pos_x, this.pos_y);
            this.ctx.stroke();
        }

        this.drawTurtle();
    }

    remove() {
        ctv.clearRect(0, 0, ctv.canvas.width, ctv.canvas.height);
        ctv.stroke();
    }

    start() {
        this.ctx.stroke();
        ctx.moveTo(rzptw, rzpth);
        rzuf.remove();
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

}

let rzuf = new Turtle(rzptw, rzpth, ctx, ctv, img);

img.onload = function() {
    rzuf = new Turtle(rzptw, rzpth, ctx, ctv, img);
}

wspx = (c.width / 2);
wspy = (c.height / 2);
var alfa = 0;


function runCommands(commands) {
    for (var cmd of commands) {
        if (cmd[0] == 'repeat') {
            for (let j = 0; j < cmd[1]; j++) {
                runCommands(cmd[2]);
            }
        }
        if (cmd[0] == "cs" || cmd[0] == "pu" || cmd[0] == "pd" || cmd[0] == "st" || cmd[0] == "ht") {
            rzuf[cmd[0]](typeof cmd[1] !== "undefined" ? cmd[1] : null);
        } else if (!Number(cmd[1]) == true) {
            alert("Uwaga: parametr komendy " + cmd[0] + " musi być liczbą");
        } else {
            rzuf[cmd[0]](typeof cmd[1] !== "undefined" ? cmd[1] : null);
        }
    }
}

function draw() {

    fragment();

    runCommands(commands);

}

function fragment() {

    var word = document.querySelector("#text_area").value;

    var line = word.split("\n");

    var line2 = line.join(" ");
    var line2 = line2.toLowerCase();

    line3 = line2.split(" ");

    commands = [];

    for (i = 0; i < line3.length; i++) {

        if (line3[i] == "fd") {
            commands.push([line3[i], line3[++i]]);
        } else if (line3[i] == "bk") {
            commands.push([line3[i], line3[++i]]);
        } else if (line3[i] == "rt") {
            commands.push([line3[i], line3[++i]]);
        } else if (line3[i] == "lt") {
            commands.push([line3[i], line3[++i]]);
        } else if (line3[i] == "jp") {
            commands.push([line3[i], line3[++i]]);
        } else if (line3[i] == "ht") {
            commands.push([line3[i]]);
        } else if (line3[i] == "st") {
            commands.push([line3[i]]);
        } else if (line3[i] == "cs") {
            commands.push([line3[i]]);
        } else if (line3[i] == "pu") {
            commands.push([line3[i]]);
        } else if (line3[i] == "pd") {
            commands.push([line3[i]]);
        } else if (line3[i] == "repeat") {
            var repeat = [line3[i], line3[++i]];
            var nextCommands = line3.slice(i).join(" ");
            var lastCloser = nextCommands.lastIndexOf("]");
            var loopCommands = line3.slice(i, lastCloser).join(" ");
            var loopArray = fragment(loopCommands);

            commands.push((repeat[0], repeat[1], loopArray));

        } else {
            alert("Wpisz poprawnie kumplu :D  W razie problemów instrukcja jest tam <-----");
        }
    }
}