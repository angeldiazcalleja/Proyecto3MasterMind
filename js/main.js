const createRows = () => {
  const container = document.getElementById("contenedorGame");
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList.add("fila");
    row.id = `fila_${i}`;
    for (let j = 0; j < 4; j++) {
      const div = document.createElement("div");
      div.classList.add("elemento");
      div.id = `elemento_${j}`;
      row.appendChild(div);
    }
    container.appendChild(row);
  }
};
createRows();

const createColorsDivs = () => {
  const contenedorColor = document.getElementById("colorDiv");
  for (let i = 0; i < 1; i++) {
    const row = document.createElement("div");
    row.classList.add("filaColor");
    for (let j = 0; j < 4; j++) {
      const div = document.createElement("div");
      div.classList.add("elementoColor");
      div.id = `color_${j}`;
      row.appendChild(div);
    }
    contenedorColor.appendChild(row);
  }
};
createColorsDivs();

//1.Paint
document.addEventListener("DOMContentLoaded", () => {
  let filas = document.querySelectorAll(".fila");
  let elementoActivoIndex = 0;

  document.querySelectorAll(".elementoColor").forEach((element) => {
    element.addEventListener("click", function () {
      let color = this.style.backgroundColor;
      // Change the background color of the active element and move to the next element in the same row
      let filaActual = filas[Math.floor(elementoActivoIndex / 4)];
      filaActual.querySelectorAll(".elemento")[
        elementoActivoIndex % 4
      ].style.backgroundColor = color;
      // Move to the next element in the same row
      elementoActivoIndex = (elementoActivoIndex + 1) % (filas.length * 4);
      if (elementoActivoIndex === 0) {
        elementoActivoIndex = 0;
      }
    });
  });

  //2.Delete
  const deleteLastItem = () => {
    elementoActivoIndex =
      (elementoActivoIndex - 1 + filas.length * 4) % (filas.length * 4);
    let filaIndex = Math.floor(elementoActivoIndex / 4);
    let elementoIndex = elementoActivoIndex % 4;
    let elemento =
      filas[filaIndex].querySelectorAll(".elemento")[elementoIndex];
    elemento.style.backgroundColor = "";
  };
  //Assign the delete function to the button with ID 'delete
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteLastItem);
  });
});

//3.Generate Array.
let arraysFilaHex = [];
document.addEventListener("DOMContentLoaded", () => {
  const checkButton = document.querySelector(".check");
  checkButton.addEventListener("click", () => {
    arraysFilaHex.length = [];
    for (let i = 0; i < 10; i++) {
      // Select the row with the ID 'row_X' where X is the row number
      const fila = document.getElementById("fila_" + i);
      // Select the elements by their IDs and capture their color values
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
      //Convert the RGB colors to hexadecimal and store them in a new array
      const filaHex = elementos.map((rgb) => rgbToHex(rgb));
      arraysFilaHex.push(filaHex);
    }
    return arraysFilaHex;
  });
});
