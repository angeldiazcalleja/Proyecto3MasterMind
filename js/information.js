document.addEventListener("DOMContentLoaded", () => {
  const saveNameBtn = document.getElementById("guardarNombre");
  let nameInput;

  // Al hacer clic en el botón "Guardar Nombre", validar y redirigir a playGame.html con el nombre y colores como parámetro de consulta
  saveNameBtn.addEventListener("click", () => {
    nameInput = document.getElementById("nameInput").value;
    if (nameInput.trim() === "") {
      document.getElementById("mensajeNombreVacio").style.display = "block";
      return; // Evita avanzar si el nombre está vacío
    }
    localStorage.setItem("Name", nameInput);

    // Obtener y guardar los 4 colores en el array
    for (let i = 1; i <= 4; i++) {
      selectedColors.push(document.getElementById("color_picker_" + i).value);
    }
    // Almacenar el array de colores en el almacenamiento local
    localStorage.setItem("SelectedColors", JSON.stringify(selectedColors));
    const url = `playGame.html?nombre=${encodeURIComponent(nameInput)}`;
    window.location.href = url;
  });
});

//Mostrar nombre, colores y generación de array random con los colores elegidos por usuario/a

let selectedColors = [];

document.addEventListener("DOMContentLoaded", () => {
  let name = localStorage.getItem("Name");
  document.getElementById("nombreMostrado").innerHTML = name;

  if (name) {
    // Recuperar el array de colores del almacenamiento local
    selectedColors = JSON.parse(localStorage.getItem("SelectedColors"));
    let originalColors = [...selectedColors];
    console.log(originalColors, "Color elegido por jugador");

    // Generar mi array con diferentes posiciones en los colores. Fisher-Yates itera desde la última posición. Intercambio swap.
    const riffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
      }
      return array;
    };
    // Llamando a la función para barajar el array
    const shuffledColors = riffleArray(selectedColors);

    // Asignar los colores aleatorios
    for (let i = 0; i < 4; i++) {
      document.getElementById("color_" + i).style.backgroundColor =
        selectedColors[i];
    }
    console.log(selectedColors, "Array Random");
    return shuffledColors
  }
});

//Comprobación.
// let arraysFilaHex = JSON.parse(sessionStorage.getItem("arrayElegido"));

let currentRow = 0; // seguimiento de la fila en la que estoy

const verificarElementoEnArray = (i, elemento, array) => {
  if (array[i] === elemento) {
    document.querySelectorAll(".elemento")[i].style.border = "2px solid green"; //POSICIÓN Y COLOR
    return 3;
  } else if (array.includes(elemento)) {
    document.querySelectorAll(".elemento")[i].style.border = "2px solid yellow"; //COLOR PERO NO POSICIÓN
    return 2;
  } else {
    document.querySelectorAll(".elemento")[i].style.border = "2px solid white"; //NO ESTÁ
    return 1;
  }
};

const compararArrays = (arraysFilaHex, selectedColors) => {
  let resultado = [];

  for (let i = 0; i < selectedColors.length; i++) {
    const elemento1 = arraysFilaHex[currentRow][i];

    const resultadoElemento = verificarElementoEnArray(i, elemento1, selectedColors);

    resultado.push(resultadoElemento);
  }
  return resultado;
};

const botonCheck = document.querySelector(".check");
botonCheck.addEventListener("click", () => {
  let resultado = compararArrays(arraysFilaHex, selectedColors);
  console.log(resultado, "Comprobación resultado");

  // Verificar si todas las respuestas son correctas
  if (resultado.every(value => value === 3)) {
    window.location.href = "victory.html";
  } else {
    if (currentRow >= 10) {
      window.location.href = "fail.html";
    } else {
      currentRow++;
    }
  }
});
