images=["product_01.jpeg","product_02.jpeg","product_03.jpeg","product_04.jpeg","product_05.jpeg"];
image = 0;
var slide ;
var fout ;
var gekozen ;

PlaatsFoto();

function Initialisatie() {
    slide = document.getElementById("slide");
    fout = document.getElementById("fout");
    gekozen = document.getElementById("gekozen");
}

function PlaatsFoto()
{
    slide.style.background= "url('images/" + images[image] + "')";
}

function ToonFout( foutmelding )
{
    fout.innerHTML = foutmelding;
}

function volgendeFoto(){
    //de volgende foto tonen
  if ( image < 4 ) image++; //bij foto 4 weer naar 0 gaan
  else image=0;

    RefreshFoto();
}

function kiesFoto(){
    //een met een cijfer gekozen foto tonen
    image = gekozen.value - 1;

    if ( ! ( image >= 0 && image < 5 ) ) ToonFout("Er zijn maar 5 afbeeldingen");
    else RefreshFoto();
}

function RefreshFoto()
{
    PlaatsFoto();       //afbeelding laden
    ToonFout("");     //leegmaken fouten
}