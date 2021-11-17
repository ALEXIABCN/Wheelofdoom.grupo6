$(document).ready(function () {
  
  let coders = ["Gràcia", "Marisa", "Alexia", "Kristina", "Alisa", "Ana C.", "Anna G.", "Candy", "Carmen", "Desirée", "Faby", "Gabrielle", "Hellen", "Joana", "Judith", "Laura C.", "Laura M.", "Rosa", "Sandra", "Sara", "Sonia", "Tamara", "Valentina", "Yuliya"];
  
  function addLi(elemento) {
    $("#lista-coders ul").append("<li>" + elemento + "</li>");
  }
  coders.forEach(addLi);//invocación de la funcion addLi


  $(".wonderwinner").hide();//la foto esta oculta por defecto



  function elegirCoder() {
    let winner = coders[Math.floor(Math.random() * coders.length)];
    coders = coders.filter(coder => coder !== winner)
    $("#lista-coders ul").empty()
    coders.forEach(addLi);

    
    $(".lista-coders").hide(); // ocultamos la lista de las coders
    $(".wonderwinner").show();// mostramos imagen
    $("#button").text('Volver a la lista');// cambiamos el texto del botton
    $("#winner").text(winner); // agregamos el nombre de la elegida al azar


    let boton = document.querySelector("#button")

    
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "Sonido/Wonderaudio.mp3")
      etiquetaAudio.play()
    

  }



  // /*-------------------------------------------FUNCTION----CREAR-GRUPOS---------------------------------------*/
  // function crearGrupos() {
  //   let coders = ["Gràcia", "Marisa", "Alexia", "Kristina", "Alisa", "Ana C.", "Anna G.", "Candy", "Carmen", "Desirée", "Faby", "Gabrielle", "Hellen", "Joana", "Judith", "Laura C.", "Laura M.", "Rosa", "Sandra", "Sara", "Sonia", "Tamara", "Valentina", "Yuliya"];
  //   //codersActive = ['Sara', 'Judith', 'Helen', 'Tamara', 'Candy', 'Laura Contreras', 'Gabrielle', 'Carmen', 'Yuliya', 'Anna Girona', 'Desirée', 'Sonia', 'Joana', 'Ana Casas', 'Alisa', 'Faby', 'Valentina', 'Laura Mayas', 'Rosa', 'Sandra', 'Kristina', 'Gràcia', 'Alexia', 'Marisa',];
  //   $("#winner").remove();  //winner
  //   $(".grupo").remove();   // igual
  //   $(".coders").show();   //coders
  //   coders = coders.map(i => [Math.random(), i]).sort().map(i => i[1]);
  //   let parts = $('.select option:selected').text();
  //   let result = [];
  //   for (let i = parts; i > 0; i--) {
  //     result.push(codersActive.splice(0, Math.ceil(codersActive.length / i)).join(', '));
  //   }
  //   $('.answer').append(`<p class="grupo">Grupo 1: ${result[0]}</p>`);
  //   $('.answer').append(`<p class="grupo">Grupo 2: ${result[1]}</p>`);
  //   $('.answer').append(`<p class="grupo">Grupo 3: ${result[2]}</p>`);
  //   $('.answer').append(`<p class="grupo">Grupo 4: ${result[3]}</p>`);
  //   $('.answer').append(`<p class="grupo">Grupo 5: ${result[4]}</p>`);
  //   $('.answer').append(`<p class="grupo">Grupo 6: ${result[5]}</p>`);
  //   $('.answer').append(`<p class="grupo">Grupo 7: ${result[6]}</p>`);
  //   $('.answer').append(`<p class="grupo">Grupo 8: ${result[7]}</p>`);
  //   $('.answer').append(`<p class="grupo">Grupo 9: ${result[8]}</p>`);
  //   $('.answer').append(`<p class="grupo">Grupo 10: ${result[9]}</p>`);
  //   $('.answer').append(`<p class="grupo">Grupo 11: ${result[10]}</p>`)
  //   $('.answer').append(`<p class="grupo">Grupo 12: ${result[11]}</p>`);
  //   $(".grupo:contains('" + undefined + "')").hide();
  // };



  function volverLista() {
    $(".wonderwinner").hide();//la foto esta oculta por decto
    $("#button").text('Elegir Coder'); //el texto por defecto
    $("#lista-coders").show();

    if(coders.length === 0){
      coders = ["Gràcia", "Marisa", "Alexia", "Kristina", "Alisa", "Ana C.", "Anna G.", "Candy", "Carmen", "Desirée", "Faby", "Gabrielle", "Hellen", "Joana", "Judith", "Laura C.", "Laura M.", "Rosa", "Sandra", "Sara", "Sonia", "Tamara", "Valentina", "Yuliya"];
      coders.forEach(addLi);
    }

  }

  $("#button").click(function () {
    if ($("#lista-coders").is(":visible")) {
      elegirCoder();
    }
    else {
      volverLista();
    }
  })
});



