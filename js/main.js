//EN PRUEBAS

const boton = document.getElementById("button2");
boton.addEventListener("click", function () {
    // Ocultar la primera página y mostrar la segunda
    let nuevaPagina = "pages/rules.html"
    window.location.href = "pages/rules.html";
  });


function generarFilasDeDivs() {
  const contenedor = document.getElementById('contenedorGame');

  for (let i = 0; i < 10; i++) {
      const fila = document.createElement('div');
      fila.classList.add('fila');

      for (let f = 0; f < 4; f++) {
          const div = document.createElement('div');
          div.classList.add('elemento');
          fila.appendChild(div);
      }

      contenedor.appendChild(fila);
  }
}
generarFilasDeDivs();