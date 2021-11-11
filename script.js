$(document).ready(function () {

  
    let coders=["Gràcia","Marisa","Alexia","Kristina","Alisa","Ana C.","Anna G.","Candy","Carmen","Desirée","Faby","Gabrielle","Hellen","Joana","Judith","Laura C.","Laura M.","Rosa","Sandra","Sara","Sonia","Tamara","Valentina","Yuliya"]      
    let winner=coders[Math.floor(Math.random()*coders.length)];
    
    $(".wonderwinner").hide();//la foto esta oculta por decto

      function elegirCoder(){
        $(".lista-coders").hide(); // ocultamos la lista de las coders
        $(".wonderwinner").show();// mostramos imagen
        $("#button").text('Volver a la lista');// cambiamos el texto del botton 
        $("#winner").text(winner); // agregamos el nombre de la elegida al azar
      }

      function volverLista(){
        $(".wonderwinner").hide();//la foto esta oculta por decto
        $("#button").text('Elegir Coder'); //el texto por defecto
        $("#lista-coders").show();
      }

      


      

      function sol(coders) {
        return coders.sort().filter(function(item , pos, ary) {
            return !pos || item != ary[pos - 1];
        });
    }





      $("#button").click(function(){
          if($("#lista-coders").is(":visible")){
            elegirCoder();                                                      
          }
          else{
            volverLista();
          }



         

      })

});




