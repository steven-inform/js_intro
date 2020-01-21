var old_text;
$(function(){

    //alert("jQuery werkt!")

    $("button").click(function(){

        $("p").each( function( i ) {
            alert( $(this).text() )
        });

    });

    /*
    $("#speelveld")
        .mouseenter(function(){
            old_text = $("p.green").html();
            $("p.green").html("MouseEnter");
    })
        .mouseleave(function(){
            $("p.green").html(old_text);
        });
    */

    /*
    $("#speelveld").hover(
        function(){ //mouseenter
            old_text = $("p.green").html();
            $("p.green").html("MouseEnter");
        },
        function(){ //mouseleave
            $("p.green").html(old_text);
        });
        */

    //werkt bij elementen die bestaan vlak na het laden van de pagina
    /*
    $("div").on("click", function(){
        alert("hello");
    });
    */

    //werkt altijd, ook bij dynamisch geladen elementen
    jQuery("body").on("click", "div", function(){
        alert("hello");
    });


    /*
    $("#speelveld").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        }
    });
    */
});