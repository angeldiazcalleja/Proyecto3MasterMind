document.addEventListener("DOMContentLoaded", () => {
  const saveNameBtn = document.getElementById("saveName");
  let nameInput;
  saveNameBtn.addEventListener("click", () => {
    nameInput = document.getElementById("nameInput").value;
    if (nameInput.trim() === "") {
      document.getElementById("emptyName").style.display = "block";
      return;
    }
    localStorage.setItem("Name", nameInput);

    //Get and store the 4 colors in the array
    for (let i = 1; i <= 4; i++) {
      selectedColors.push(document.getElementById("color_picker_" + i).value);
    }
    // Store the array of colors in local storage
    localStorage.setItem("SelectedColors", JSON.stringify(selectedColors));
    const url = `playGame.html?nombre=${encodeURIComponent(nameInput)}`;
    window.location.href = url;
  });
});

let selectedColors = [];

document.addEventListener("DOMContentLoaded", () => {
  let name = localStorage.getItem("Name");
  document.getElementById("requiredName").innerHTML = name;

  if (name) {
    // Retrieve the array of colors from local storage
    selectedColors = JSON.parse(localStorage.getItem("SelectedColors"));
    let originalColors = [...selectedColors];
    for (let i = 0; i < 4; i++) {
      document.getElementById("color_" + i).style.backgroundColor =
        selectedColors[i];
    }
    // Generate an array with different positions for the colors. Fisher-Yates.
    const riffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    const shuffledColors = riffleArray(selectedColors);
    return shuffledColors;
  }
});

//Verification.
let currentRow = 0; 

const checkArray = (i, elemento, array, fila) => {
  if (array[i] === elemento) {
    fila[i].style.border = "3px solid green";
    return 3;
  } else if (array.includes(elemento)) {
    fila[i].style.border = "3px solid yellow";
  } else {
    fila[i].style.border = "3px solid white";
    return 1;
  }
};

const compareArrays = (arraysFilaHex, selectedColors) => {
  let result = [];

  const filaActual = Array.from(
    document.querySelectorAll(`#fila_${currentRow} .elemento`)
  );

  for (let i = 0; i < selectedColors.length; i++) {
    const elemento1 = arraysFilaHex[currentRow][i];
    const resultadoElemento = checkArray(
      i,
      elemento1,
      selectedColors,
      filaActual
    );

    result.push(resultadoElemento);
  }
  return result;
};

const botonCheck = document.querySelector(".check");
botonCheck.addEventListener("click", () => {
  setTimeout(() => {
    let result = compareArrays(arraysFilaHex, selectedColors);
    if (result.every((value) => value === 3)) {
      window.location.href = "victory.html";
    } else {
      if (currentRow >= 9) {
        window.location.href = "fail.html";
      } 
      currentRow++;
    }
  }, 100); 
});
