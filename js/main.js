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
//Aquí se almacena los valores de las 10 filas con sus respectivos colores

let selectColors = [];

document.addEventListener("DOMContentLoaded", function () {
  const arraysFilaHex = []; // Array para almacenar los arrays de valores de color en hexadecimal

  // Escuchar el clic en el botón con la clase "check"
  const checkButton = document.querySelector(".check");
  checkButton.addEventListener("click", function () {
    arraysFilaHex.length = 0; // Vaciar el array para evitar duplicados
    for (let i = 0; i < 10; i++) {
      // Seleccionar la fila cuyo ID es "fila_X" donde X es el número de fila
      const fila = document.getElementById("fila_" + i);
      // Seleccionar los elementos por sus IDs y capturar sus valores de color
      const elementos = [];
      for (let j = 0; j < 4; j++) {
        const elemento = getComputedStyle(
          fila.querySelector("#elemento_" + j)
        ).backgroundColor;
        elementos.push(elemento);
      }
      const rgbToHex = (rgb) => {
        const [r, g, b] = rgb.match(/\d+/g);
        const hexR = Number(r).toString(16).padStart(2, "0");
        const hexG = Number(g).toString(16).padStart(2, "0");
        const hexB = Number(b).toString(16).padStart(2, "0");
        return `#${hexR}${hexG}${hexB}`;
      };

      // Convierte los colores RGB a hexadecimal y almacénalos en un nuevo array
      const filaHex = elementos.map((rgb) => rgbToHex(rgb));
      arraysFilaHex.push(filaHex);
    }
    // Comparar cada posición de los arrays
    for (let i = 0; i < 4; i++) {
      if (arraysFilaHex[0][i] === selectedColor[i]) {
        console.log("Posición " + i + " igual");
      } else {
        console.log("Posición " + i + " distinta");
      }
    }
    console.log(arraysFilaHex, "Arrays hexadecimales de las 10 filas");
  });
});

//Comprobación colores

const compararYActualizarEstilos = (selectedColors, arraysFilaHex) => {
  const filas = document.querySelectorAll(".fila");

  for (let i = 0; i < selectedColors.length; i++) {
    // Obtiene el color en formato hexadecimal desde el arrayFilaHex
    const colorHex = arraysFilaHex[0][i];
    const colorSeleccionado = selectedColors[i];

    if (colorHex === colorSeleccionado) {
      // Si los colores coinciden, cambia el borde del div en verde
      for (let j = 0; j < filas.length; j++) {
        const elemento = filas[j].querySelector("#elemento_" + i);
        elemento.style.border = "2px solid green";
      }
    } else {
      // Si los colores no coinciden, cambia el borde del div en rojo
      for (let j = 0; j < filas.length; j++) {
        const elemento = filas[j].querySelector("#elemento_" + i);
        elemento.style.border = "2px solid red";
      }
    }
  }}
  const checkButton = document.querySelector(".check");
  checkButton.addEventListener("click", function () {
    compararYActualizarEstilos(selectedColors, arraysFilaHex);
  })