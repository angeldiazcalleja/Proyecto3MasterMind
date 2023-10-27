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
    for (let i = 0; i < 4; i++) {
      document.getElementById("color_" + i).style.backgroundColor =
        selectedColors[i];
    }
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
    console.log(selectedColors, "Array Random");
    return shuffledColors;
  }
});

//Comprobación.
/
let currentRow = 0; // Seguimiento de la fila en la que estoy

const verificarElementoEnArray = (i, elemento, array, fila) => {
  if (array[i] === elemento) {
    fila[i].style.border = "3px solid green"; // POSICIÓN Y COLOR
    return 3;
  } else if (array.includes(elemento)) {
    fila[i].style.border = "3px solid yellow"; // COLOR PERO NO POSICIÓN
    return 2;
  } else {
    fila[i].style.border = "3px solid white"; // NO ESTÁ
    return 1;
  }
};

const compararArrays = (arraysFilaHex, selectedColors) => {
  let resultado = [];

  const filaActual = Array.from(
    document.querySelectorAll(`#fila_${currentRow} .elemento`)
  );
 
  for (let i = 0; i < selectedColors.length; i++) {
    console.log(arraysFilaHex, "ERROR")
    const elemento1 = arraysFilaHex[currentRow][i];
    const resultadoElemento = verificarElementoEnArray(
      i,
      elemento1,
      selectedColors,
      filaActual
    );

    resultado.push(resultadoElemento);
  }
  return resultado;
};

const botonCheck = document.querySelector(".check");
botonCheck.addEventListener("click", () => {
  // Realizar alguna acción antes de llamar a compararArrays (si es necesario)

  // Llamar a compararArrays después de un retraso de 1000 milisegundos (1 segundo)
  setTimeout(function() {
    let resultado = compararArrays(arraysFilaHex, selectedColors);
    console.log(resultado, "Comprobación resultado");

    // Verificar si todas las respuestas son correctas
    if (resultado.every((value) => value === 3)) {
      // El usuario ha ganado, redirigir a la página de victoria
      window.location.href = "victory.html";
    } else {
      // Verificar si el usuario ha alcanzado la fila máxima
      if (currentRow >= 9) {
        // El usuario ha perdido, redirigir a la página de derrota
        window.location.href = "fail.html";
      } else {
        // Incrementar la fila actual para pasar a la siguiente fila
      }
      
      currentRow++;
    }
  }, 500); // Retrasar la llamada a compararArrays por medio segundo
});