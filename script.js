function remove(){
    document.querySelector("#text_area").value = null;
    }

    function wpisz(){
        document.querySelector("#text_area").value = a;

    }


    function kolo(){
        document.querySelector("#text_area").value = document.write="fd 100 rt 144 fd 100 rt 144 fd 100 rt 144 fd 100 rt 144 fd 100 rt 144";
        }
    function kwadrat(){
         document.querySelector("#text_area").value = document.write="fd 100 rt 90 fd 100 rt 90 fd 100 rt 90 fd 100 rt 90";
        }
    function trojkat(){
        document.querySelector("#text_area").value = document.write="rt 45 fd 100 rt 90 fd 100 rt 135 fd 150 rt 90";
        }
    function pro(){
        document.querySelector("#text_area").value = document.write="fd 100 rt 90 fd 300 rt 90 fd 100 rt 90 fd 300 rt 90";
        }      
    function trapez(){
        document.querySelector("#text_area").value = document.write="rt 30 fd 100 rt 60 fd 100 rt 60 fd 100 rt 120 fd 200 rt 90";
        }                  
    function replace(){
        document.getElementById("inf").interHTML="";
        }

    function inst(){
        document.getElementById("inf").innerHTML="<centre><p>Poniżej znajduje się opis działania każdej z komend: </p>FD - Żółw idzie do przodu<br>BK - Żółw idzie do tyłu<br>RT - Obrót o *kąt* w prawo<br>LT - Obrót o *kąt* w lewo<br>HT - Żółw się chowa<br>ST - Żółw się pojawia<br>CS - Czyści ekran<br>PU - Żółw nie zostawia śladu<br>PD - Żółw zostawia ślad<br>Repeat - Powtarza komendę daną ilość razy (WIP)</p></centre>";
        }

    function base(){
        document.getElementById("inf").innerHTML="<p>To nasz mały przyjaciel - Żółwik, będzie on nam towarzyszył w interpreterze jako przewodnik ;) możesz go nazywać jak chcesz np.Marcin :D. Wpisz komendę aby żółw pojawił się na planszy. Jeśli nie wiesz jakich komend możesz użyć, znajdują się ona w zakładce 'Instrukcja' powyżej.</p>"
    }