images=["product_01.jpeg","product_02.jpeg","product_03.jpeg","product_04.jpeg","product_05.jpeg"];
image= 0;
document.getElementById("slide").style.background= "url('images/" + images[image] + "')";

function volgendeFoto(){
  if (image<4) {
    image++;
  }
  else{image=0}
  document.getElementById("slide").style.background= "url('images/" + images[image] + "')";
  document.getElementById("fout").innerHTML= "";
}

function kiesFoto(){
  image = document.getElementById("gekozen").value - 1;
  if (image<5) {
    document.getElementById("slide").style.background= "url('images/" + images[image] + "')";
    document.getElementById("fout").innerHTML= "";
  }
  else{document.getElementById("fout").innerHTML= "Er zijn maar 5 afbeeldingen"}
}
