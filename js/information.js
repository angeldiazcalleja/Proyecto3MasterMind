const selectedColors = []; // Aquí almacenaremos los colores seleccionados

document.addEventListener("DOMContentLoaded", function () {
  const saveNameBtn = document.getElementById("guardarNombre");
  let nameInput;

  // Al hacer clic en el botón "Guardar Nombre", redirigir a playGame.html con el nombre como parámetro de consulta
  saveNameBtn.addEventListener("click", function () {
    nameInput = document.getElementById("nameInput").value;
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

document.addEventListener("DOMContentLoaded", function () {
  let name = localStorage.getItem("Name");
  document.getElementById("nombreMostrado").innerHTML = name;

  // Recuperar el array de colores del almacenamiento local
  let selectedColors = JSON.parse(localStorage.getItem("SelectedColors"));

  // Aleatorizar el orden de los colores en el array
  // if (selectedColors && selectedColors.length >= 4) {

    document.getElementById("color_0").style.backgroundColor = selectedColors[0];
    document.getElementById("color_1").style.backgroundColor = selectedColors[1];
    document.getElementById("color_2").style.backgroundColor = selectedColors[2];
    document.getElementById("color_3").style.backgroundColor = selectedColors[3];
  
  // Generar mi array con diferentes posiciones en los colores
  selectedColors = riffleArray(selectedColors);
  function riffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    } console.log(array)
    return array;
  }
});
