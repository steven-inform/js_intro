function myFunction(){
    
  var naam= document.getElementById('per_voornaam').value;
  var voornaam= document.getElementById('per_naam').value;
  var inschrijvingen= document.getElementById('inschrijvingen').value;
  
  inschrijvingen= parseFloat(inschrijvingen)+1;
  var button= document.getElementById("bevestiging");
  
  if (naam.length<3||voornaam.length<3) {
    button.innerHTML="Uw naam/voornaam is te kort"
    button.classList.add("red");
  }
  else if (inschrijvingen === 'NaN') {
    button.innerHTML="Gelieve het aantal deelnemers juist in te vullen!"
    button.classList.add("red");
  }
  else {
    button.innerHTML="U schreef zich in voor "+inschrijvingen+" personen!";
    button.classList.add("green");
    button.classList.remove("red");
  }
  
}
