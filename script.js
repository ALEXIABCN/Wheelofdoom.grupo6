$(document).ready(function () {

  
let coders=["Gràcia","Marisa","Alexia","Kristina","Alisa","Ana C.","Anna G.","Candy","Carmen","Desirée","Faby","Gabrielle","Hellen","Joana","Judith","Laura C.","Laura M.","Rosa","Sandra","Sara","Sonia","Tamara","Valentina","Yuliya"]
  
let winner=coders[Math.floor(Math.random()*coders.length)];

//la foto esta oculta
    $(".wonderwoman-img").hide();

//  ponemos el texto del botton. Html-escribe este texto
    $("#button").html('Elegir Coder');

//  Clickamos del botton 
    $("#button").click(function(){
// click ocultamos la lista de las coders
        $(".lista-coders").hide(); 
// click mostramos imagen
        $(".wonderwoman-img").show();
//   cambiamos el texto del botton 
      $("#button").html('Volver a la lista');
      $("#winner").text(winner);
      });

});




