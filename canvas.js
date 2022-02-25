var c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");
var img = document.getElementById("rzut1");
//ctx.drawImage(img, 900, 700);

rzptw = (c.width / 2) - (img.offsetWidth / 2);
rzpth = (c.height / 2) - (img.offsetHeight / 2);
onload:
    img.onload = function() {
        ctx.drawImage(img, rzptw, rzpth);
    }

//rysuje ale do przodu tylko i trzeba lepiej ustawić początkowe miejsce rysowania i zrobić tak żeby rzuf sie ruszał też plus obracanie

wspx = (c.width / 2) - (wspx.offsetWidth / 2);
wspy = rzpth; //tu sie ustawia początkową pozycje od której zaczyna sie rysować i powinno chyba być tam gdzie żółw tylko nie do końca jest celnie ustawione
alfa = 0; //to kąt zerowy do obracania żółwia/rysowania
function draw() { //funkcja gdzie jest w sumie wszystko do rysowania

    var word = document.querySelector("#text_area").value; //pobiera wartość z pola tekstowego
    var split = word.split(" "); //rozdziela na dwie części oddzielone spacją czyli [komenda]*spacja*[wartość]

    //a tu trzeba zrobic tak żeby wyłapywał więcej niż jedną komendę plus wartość do każdej
    var direction = split[0]; //komenda w tablicy 
    var value = Number(split[1]); //wartość liczbowa w tablicy
    console.log(split[0], split[1]); //wyrzuca wszystko pobrane do konsoli

    var rad = (alfa * Math.PI) / 180; // to ma coś robić z kątem żółwia/rysowania ale w js to jest w radianach a nie stopniach więc sie trzeba bawić
    var wy = direction * Math.cos(rad); //w liczenie tego wszystkiego
    var wx = direction * Math.sin(rad); //



    switch (direction) { //switch w którym każda komenda jest pod osobnym case'em
        case "fd": //rysuje do przodu, do góry, podajesz "fd *wartość liczbowa*"
            ctx.beginPath(); //idk co to robi
            ctx.moveTo(wspx, wspy); //chyba rusza punkt rysowania z początku na podane kordy
            ctx.lineTo(wspx, wspy - value); //rysuje linie po tej trasie
            ctx.stroke(); //idk co to robi
            img.moveTo(0, split[1]);
            wspy = wspy - value; //ustawia nowe położenie rysowania
            break;

        case "rt": //obracanie rzufia, podajesz "rt *stopnie obrotu"
            alfa = split[1]; //to ma zmienić kąt na podany
            break; //TODO: zrobić tak żeby nowy kąt się zapisywał bo na razie cały czas zmienia kąt względem początkowego
            //znaczy na razie to obracanie nawet nie działa i trzeba coś z tym zrobić
            //potem tak jak w "fd" zrobić ustawienie nowego kierunku 
    }


    document.querySelector("#text_area").value = null; //czyści pole tekstowe po uruchomieniu komendy
}