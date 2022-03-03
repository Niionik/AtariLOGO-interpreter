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
        // direction_angle = 0, 359;
        this.draw = function() {

           // ctx.clearRect((wspx - wx),(wspy+wy));
            ctx.drawImage(img, post_x, post_y);
        }
        this.remove = function(){
            ctx.clearRect(wspx-(img.offsetWidth / 2),wspy-(img.offsetWidth / 2),70,70);
            
            ctx.stroke();

        }

        this.move = function() {
            
            post_x = wspx - (img.offsetWidth / 2);
            post_y = wspy - (img.offsetWidth / 2);
           // ctx.translate(post_x, post_y);
            //ctx.rotate(alfa);
           // ctx.clearRect(post_x,post_y,40,40);

            ctx.drawImage(img, post_x, post_y);
            ctx.rotate(alfa);
            
        }


        
    }
}

let rzuf = new turtle(rzptw, rzpth);

onload: rzuf.draw();
/*img.onload = function() {
    ctx.drawImage(img, rzptw, rzpth);
}*/

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
    console.log(wy)
    var wx = value * Math.sin(rad); //
    console.log(wx)




    if (direction == "fd") { //switch w którym każda komenda jest pod osobnym case'em
            rzuf.remove();
            ctx.beginPath(); //idk co to robi 
            ctx.moveTo(wspx, wspy); //chyba rusza punkt rysowania z początku na podane kordy
            wspx = wx + wspx;
            wspy = wspy - wy;
            ctx.lineTo(wspx, wspy); //rysuje linie po tej trasie
            ctx.stroke(); //idk co to robi


            rzuf.move();

    } else if (direction == "rt") {
            //alfa = split[1];
            alfa = Number(alfa)+value;
            
    } else if (direction == "jp") {
            wspx = wx + wspx;
            wspy = wspy - wy;
            ctx.moveTo(wspx, wspy);
            ctx.stroke();
    }else if (direction == "ht"){
  

    } else {   
            alert("Wpisz poprawnie kumplu :D  W razie problemów instrukcja jest tam <-----");

    }
    console.log("rad = " + rad);
    console.log("alfa = " + alfa);
    document.querySelector("#text_area").value = null; //czyści pole tekstowe po uruchomieniu komendy
}


//fd - rzuf idzie
//rt - obrót o *kąt* w prawo
//jp = rzuf skacze
//ht - chowa rzufia
