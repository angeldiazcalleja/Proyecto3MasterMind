// const boton = document.getElementById("button2");
// boton.addEventListener("click", function () {
//     // Ocultar la primera página y mostrar la segunda
//     let nuevaPagina = "pages/rules.html"
//     window.location.href = "pages/rules.html";
//   });

const generarFilasDeDivs = () => {
  const contenedor = document.getElementById("contenedorGame");
  for (let i = 0; i < 10; i++) {
    const fila = document.createElement("div");
    fila.classList.add("fila");
    for (let j = 0; j < 4; j++) {
      const div = document.createElement("div");
      div.classList.add("elemento");
      fila.appendChild(div);
    }
    contenedor.appendChild(fila);
  }
};
generarFilasDeDivs();

const generarDivColores = () => {
  const contenedorColor = document.getElementById("colorDiv");
  for (let i = 0; i < 1; i++) {
    const fila = document.createElement("div");
    fila.classList.add("filaColor");
    for (let j = 0; j < 4; j++) {
      const div = document.createElement("div");
      div.classList.add("elementoColor");
      fila.appendChild(div);
    }
    contenedorColor.appendChild(fila);
  }
};
generarDivColores();
