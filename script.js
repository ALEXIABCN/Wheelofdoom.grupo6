$(document).ready(function () {

  
    let coders=["Gràcia","Marisa","Alexia","Kristina","Alisa","Ana C.","Anna G.","Candy","Carmen","Desirée","Faby","Gabrielle","Hellen","Joana","Judith","Laura C.","Laura M.","Rosa","Sandra","Sara","Sonia","Tamara","Valentina","Yuliya"]
      
    let winner=coders[Math.floor(Math.random()*coders.length)];

    $(".wonderwoman-img").hide();//la foto esta oculta por decto
    $("#button").text('Elegir Coder'); //el texto por defecto

    //  Clickamos del botton
    if($("#buttom"))
    $("#button").click(function(){
        $(".lista-coders").hide(); // ocultamos la lista de las coders
        $(".wonderwoman-img").show();// mostramos imagen
        $("#button").html('Volver a la lista');// cambiamos el texto del botton 
        $("#winner").text(winner); // agregamos el nombre de la elegida al azar
      });

});




