const createRows = () => {
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
createRows();

const createColorsDivs = () => {
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
createColorsDivs();

//JUEGO
//1.Pintar
document.addEventListener("DOMContentLoaded",() => {
  let filas = document.querySelectorAll(".fila");
  let elementoActivoIndex = 0;

  document.querySelectorAll(".elementoColor").forEach((element) => {
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
  //2.Borrar
  // Función para borrar el último elemento pintado
  const deleteLastItem = () => {
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
  deleteButtons.forEach( (button) => {
    button.addEventListener("click", deleteLastItem);
  });
});

//3.Array 10filas-conversión a hex.
let arraysFilaHex = []  // Array para almacenar los arrays de valores de color en hexadecimal

document.addEventListener("DOMContentLoaded", () => {

  // Escuchar el clic en el botón con la clase "check"
  const checkButton = document.querySelector(".check");
  checkButton.addEventListener("click", () => {
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
    // console.log(arraysFilaHex, "Arrays hexadecimales de las 10 filas");
    // console.log(arraysFilaHex[0])
    // sessionStorage.setItem("arrayElegido", JSON.stringify(arraysFilaHex)); 
    return arraysFilaHex
  })
})





