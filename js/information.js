document.addEventListener("DOMContentLoaded", function () {
  const saveNameBtn = document.getElementById("guardarNombre");
  let nameInput;

  // Al hacer clic en el botón "Guardar Nombre", validar y redirigir a playGame.html con el nombre como parámetro de consulta
  saveNameBtn.addEventListener("click", function () {
    nameInput = document.getElementById("nameInput").value;
    if (nameInput.trim() === "") {
      document.getElementById("mensajeNombreVacio").style.display = "block";
      return; // Evita avanzar si el nombre está vacío
    }
    localStorage.setItem("Name", nameInput);

    // Obtener y guardar los 4 colores en el array
    selectedColors.push(document.getElementById("color_picker_1").value);
    selectedColors.push(document.getElementById("color_picker_2").value);
    selectedColors.push(document.getElementById("color_picker_3").value);
    selectedColors.push(document.getElementById("color_picker_4").value);

    // Almacenar el array de colores en el almacenamiento local
    localStorage.setItem("SelectedColors", JSON.stringify(selectedColors));
    const url = `playGame.html?nombre=${encodeURIComponent(nameInput)}`;
    window.location.href = url;
  });
});


//MOSTRAR LA INFORMACIÓN
let selectedColors = [];

document.addEventListener("DOMContentLoaded", function () {
  let name = localStorage.getItem("Name");
  document.getElementById("nombreMostrado").innerHTML = name;

  if (name) {
    // Recuperar el array de colores del almacenamiento local
    selectedColors = JSON.parse(localStorage.getItem("SelectedColors"));
    let originalColors = [...selectedColors];
    console.log(originalColors, "Color elegido por jugador");

    // Generar mi array con diferentes posiciones en los colores
    selectedColors = riffleArray(selectedColors);
    function riffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
      } console.log(selectedColors)
      return selectedColors;
    }
    // Asignar los colores aleatorios
    document.getElementById("color_0").style.backgroundColor = selectedColors[0];
    document.getElementById("color_1").style.backgroundColor = selectedColors[1];
    document.getElementById("color_2").style.backgroundColor = selectedColors[2];
    document.getElementById("color_3").style.backgroundColor = selectedColors[3];
    console.log(selectedColors, "Array Random");
  } 
});

const verificarElementoEnArray = (i, elemento, array) => {
  document.querySelectorAll(".elemento");
  if (array[i] === elemento) {
    elemento[i].style.border = "2px solid green"; // Borde verde si el elemento está en la posición correcta.
    return 2;
  } else if (array.includes(elemento)) {
    elemento[i].style.border = "2px solid yellow"; // Borde amarillo si el elemento está en el array, pero no en la posición indicada.
    return 1;
  } else {
    elemento[i].style.border = "2px solid white"; // Borde blanco si el elemento no está en el array.
    return 0;
  }
};

const compararArrays = (arraysFilaHex, selectedColors) => {
  let resultado = [];

  for (let i = 0; i < Math.max(arraysFilaHex[0], selectedColors.length); i++) {
      const elemento1 = arraysFilaHex[0][i];

      const resultadoElemento = {
          comparacion: verificarElementoEnArray(i, elemento1, selectedColors)
      };

      resultado.push(resultadoElemento);
  }
  return resultado;
};

// Obtén el botón por su clase "check"
const botonCheck = document.querySelector(".check");

// Agrega un escuchador de eventos para el evento "click" al botón
botonCheck.addEventListener("click", function() {
  let resultado = compararArrays(arraysFilaHex, selectedColors);
  console.log(resultado, "Comprobación resultado");
});
