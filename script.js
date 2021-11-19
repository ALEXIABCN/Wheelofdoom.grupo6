$(document).ready(function () {
  
  let coders = ["Gràcia", "Marisa", "Alexia", "Kristina", "Alisa", "Ana C.", "Anna G.", "Candy", "Carmen", "Desirée", "Faby", "Gabrielle", "Hellen", "Joana", "Judith", "Laura C.", "Laura M.", "Rosa", "Sandra", "Sara", "Sonia", "Tamara", "Valentina", "Yuliya"];
  
  function addLi(elemento) {
    $("#lista-coders ul").append("<li>" + elemento + "</li>");
  }
  coders.forEach(addLi);//invocación de la funcion addLi


  $(".wonderwinner").hide();//la foto esta oculta por defecto


  function elegirCoder() {

    let winner = coders[Math.floor(Math.random() * coders.length)];
    coders = coders.filter(coder => coder !== winner);
    $("#lista-coders ul").empty();
    coders.forEach(addLi);

    
    $(".lista-coders").hide(); // ocultamos la lista de las coders
    $(".wonderwinner").show();// mostramos imagen
    $("#button").text('Volver a la lista');// cambiamos el texto del botton
    $("#winner").text(winner); // agregamos el nombre de la elegida al azar
    $(".crearGrupos").show();
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "Sonido/Wonderaudio.mp3")
    etiquetaAudio.play()
    $(".crearGrupos").hide();
  }

  function volverLista() {
    $(".wonderwinner").hide();//la foto esta oculta por decto
    $("#button").text('Elegir Coder'); //el texto por defecto
    $("#lista-coders").show();
    $(".crearGrupos").show();
    

    if(coders.length === 0){
      coders = ["Gràcia", "Marisa", "Alexia", "Kristina", "Alisa", "Ana C.", "Anna G.", "Candy", "Carmen", "Desirée", "Faby", "Gabrielle", "Hellen", "Joana", "Judith", "Laura C.", "Laura M.", "Rosa", "Sandra", "Sara", "Sonia", "Tamara", "Valentina", "Yuliya"];
      coders.forEach(addLi);
    }


  }

// ----------------------    crear grupos    -------------------------------------- 

function crearGrupos(){
  let numberOfGroups = $("#input-text").val();
  let N = Math.ceil(coders.length / numberOfGroups);
  coders = coders.sort ( () => Math.random() - 0.5 );
  
  let groups = [];

  while ( coders.length > 0) {
    let pieces = coders.splice(0, N);
    let formatted = pieces.map((piece) =>  piece + "<br>" );
    groups.push("Grupo"+ groups.indexOf(pieces) +"<br>"+ formatted.join(''));
  }

   $("#lista-coders ul").empty();
    groups.forEach(addLi);
    $("#button").text('Volver a la lista');
  }

$("#btn-groups").click(function () {
  if(coders.length != 24){
    coders = ["Gràcia", "Marisa", "Alexia", "Kristina", "Alisa", "Ana C.", "Anna G.", "Candy", "Carmen", "Desirée", "Faby", "Gabrielle", "Hellen", "Joana", "Judith", "Laura C.", "Laura M.", "Rosa", "Sandra", "Sara", "Sonia", "Tamara", "Valentina", "Yuliya"];
    coders.forEach(addLi);
  }
    crearGrupos();
    $(".crearGrupos").hide();
    
});


  $("#button").click(function () {
    let t = $("#button");
    if($("#lista-coders ul").is(":visible")){
       $("#lista-coders ul").empty();
     }
   
    if (t.text() == "Elegir Coder"){
      elegirCoder();
    }

    else if(t.text() == "Volver a la lista"){
      volverLista();
    }
  })
});



