$(document).ready(function () {

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

//  volvemos a inicio




      });


});




