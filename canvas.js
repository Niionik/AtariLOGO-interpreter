var c = document.getElementById("myCanvas");


c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");
var img = document.getElementById("rzut1");
//ctx.drawImage(img, 900, 700);


onload:
    img.onload = function() {
        ctx.drawImage(img, (c.width / 2) - (img.offsetWidth / 2), (c.height / 2) - (img.offsetHeight / 2));
    }

            //rysuje ale do przodu tylko i trzeba lepiej ustawić początkowe miejsce rysowania i zrobić tak żeby rzuf sie ruszał też plus obracanie
    wspx = (c.width / 2);
    wspy = (c.height / 2);
    function draw(){

        var word = document.querySelector("#text_area").value;
        var split = word.split(" ");
    
        //a tu trzeba zrobic tak żeby wyłapywał więcej niż jedną komendę plus wartość do każdej
        var direction = split[0]; 
        var value = Number(split[1]);
        console.log(split[0],split[1]);
    

        switch(direction){
            case "fd":
            ctx.beginPath();
            ctx.moveTo(wspx, wspy);
            ctx.lineTo(wspx, wspy-value);
            ctx.stroke();
            wspy=wspy-value;

            break;
        }
    
    
        document.querySelector("#text_area").value = null;
    }


    
