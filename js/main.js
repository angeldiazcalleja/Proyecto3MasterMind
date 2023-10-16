const boton = document.getElementById("button2");


boton.addEventListener("click", function () {
    // Ocultar la primera página y mostrar la segunda
    let nuevaPagina = "pages/rules.html"
    window.location.href = nuevaPagina;
  });

