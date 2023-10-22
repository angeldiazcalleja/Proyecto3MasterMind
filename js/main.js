const generarFilasDeDivs = () => {
  const contenedor = document.getElementById("contenedorGame");
  for (let i = 0; i < 10; i++) {
    const fila = document.createElement("div");
    fila.classList.add("fila");
    fila.id = `fila_${i}`;

    for (let j = 0; j < 4; j++) {
      const div = document.createElement("div");
      div.classList.add("elemento");
      div.id = `elemento_${j}`;
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
      div.id = `color_${j}`;
      fila.appendChild(div);
    }
    contenedorColor.appendChild(fila);
  }
};
generarDivColores();

//JUEGO

document.addEventListener("DOMContentLoaded", function () {
  let filas = document.querySelectorAll(".fila");
  let elementoActivoIndex = 0;

  document.querySelectorAll(".elementoColor").forEach(function (element) {
    element.addEventListener("click", function () {
      let color = this.style.backgroundColor;

      // Cambia el color de fondo del elemento activo y avanza al siguiente elemento en la misma fila
      let filaActual = filas[Math.floor(elementoActivoIndex / 4)];
      filaActual.querySelectorAll(".elemento")[
        elementoActivoIndex % 4
      ].style.backgroundColor = color;

      // Avanzar al siguiente elemento en la misma fila
      elementoActivoIndex = (elementoActivoIndex + 1) % (filas.length * 4);

      //Cuando se llegue al final de la última fila, reinicia al principio
      if (elementoActivoIndex === 0) {
        elementoActivoIndex = 0;
      }
    });
  });

  // Función para borrar el último elemento pintado
  const borrarUltimoElementoPintado = () => {
    elementoActivoIndex =
      (elementoActivoIndex - 1 + filas.length * 4) % (filas.length * 4);
    let filaIndex = Math.floor(elementoActivoIndex / 4);
    let elementoIndex = elementoActivoIndex % 4;

    // Elimina el color de fondo
    let elemento =
      filas[filaIndex].querySelectorAll(".elemento")[elementoIndex];
    elemento.style.backgroundColor = "";
  };

  // Asigna la función de borrar al botón con ID "delete"
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", borrarUltimoElementoPintado);
  });
});







