function ToonBericht()
{
    var p_bericht = document.getElementById("bericht");
    var aantal = document.getElementById("aantal");
    var newaantal = parseInt(aantal.value) + 1

    var bericht = "U schreef in voor " + newaantal + " personen"
    p_bericht.innerHTML = bericht;
}