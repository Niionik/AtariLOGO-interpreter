var c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");
var img = document.getElementById("rzut1");
//ctx.drawImage(img, 900, 700);

rzptw = (c.width / 2) - (img.offsetWidth / 2);
rzpth = (c.height / 2) - (img.offsetWidth / 4);

class turtle {
    constructor(post_x, post_y) {
        this.post_x = post_x;
        this.post_y = post_y;
        direction_angle = 0, 359;
    }
}
onload:
    img.onload = function() {
        ctx.drawImage(img, rzptw, rzpth);
    }

wspx = (c.width / 2);
wspy = (c.height / 2);
var alfa = 0;


function draw() { //funkcja gdzie jest w sumie wszystko do rysowania

    var word = document.querySelector("#text_area").value; //pobiera wartość z pola tekstowego
    var split = word.split(" "); //rozdziela na dwie części oddzielone spacją czyli [komenda]*spacja*[wartość]

    //a tu trzeba zrobic tak żeby wyłapywał więcej niż jedną komendę plus wartość do każdej
    var direction = split[0]; //komenda w tablicy 
    var value = Number(split[1]); //wartość liczbowa w tablicy
    console.log(split[0], split[1]); //wyrzuca wszystko pobrane do konsoli


    var rad = (alfa * Math.PI) / 180; // to ma coś robić z kątem żółwia/rysowania ale w js to jest w radianach a nie stopniach więc sie trzeba bawić
    var wy = value * Math.cos(rad); //w liczenie tego wszystkiego
    var wx = value * Math.sin(rad); //





    switch (direction) { //switch w którym każda komenda jest pod osobnym case'em
        case "fd":

            ctx.beginPath(); //idk co to robi 
            ctx.moveTo(wspx, wspy); //chyba rusza punkt rysowania z początku na podane kordy
            wspx = wx + wspx;
            wspy = wspy - wy;
            ctx.lineTo(wspx, wspy - value); //rysuje linie po tej trasie
            ctx.stroke(); //idk co to robi

            wspy = wspy - value;
            break;

        case "rt":
            alfa = split[1];
            break;
        case "jp": // tu przeskakujemy z rysowaniem ale tu też przeba coś poprawić
            wspx = wx + wspx;
            wspy = wspy - wy;
            ctx.moveTo(wspx, wspy);
            ctx.stroke();
            break;
        default:
            alert("Wpisz poprawnie kumplu :D  W razie problemów instrukcja jest tam <-----");
            break;
    }


    document.querySelector("#text_area").value = null; //czyści pole tekstowe po uruchomieniu komendy
}