function CheckNames( el_name )
{
  var lengte = document.getElementById( el_name ).value.length;

    if ( lengte<2 ) {
        var bevesting= document.getElementById("bevestiging");
        bevesting.innerHTML="Element " + el_name + " is te kort"
        bevesting.classList.add("red");
    }
}

function Validatie(){
    
  var naam= document.getElementById('per_voornaam').value;
  var voornaam= document.getElementById('per_naam').value;
  var inschrijvingen= document.getElementById('inschrijvingen').value;
  
  inschrijvingen= parseFloat(inschrijvingen)+1;
  var bevesting= document.getElementById("bevestiging");

  if ( naam.length < 3 || voornaam.length < 3 ) {
    bevesting.innerHTML="Uw naam/voornaam is te kort"
    bevesting.classList.add("red");
  }
  else if ( ! ( Number.isInteger(inschrijvingen) ) ) {
    bevesting.innerHTML="Het aantal is geen cijfer"
    bevesting.classList.add("red");
  }
  else {
    bevesting.innerHTML="U schreef zich in voor "+inschrijvingen+" personen!";
    bevesting.classList.add("green");
    bevesting.classList.remove("red");
  }
  
}
