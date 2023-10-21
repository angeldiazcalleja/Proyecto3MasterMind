//LLEVAR NOMBRE 
document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("nameInput");
    const guardarNombreBtn = document.getElementById("guardarNombre");

    // Al hacer clic en el botón "Guardar Nombre", redirigir a playGame.html con el nombre como parámetro de consulta
    guardarNombreBtn.addEventListener("click", function() {
        const nombre = nameInput.value;
        const url = `playGame.html?nombre=${encodeURIComponent(nombre)}`;
        window.location.href = url;
    });
});

  // Recuperar el nombre de la URL y mostrarlo
  document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get("nombre");
    
    if (nombre) {
        document.getElementById("nombreMostrado").textContent = decodeURIComponent(nombre);
    }
});



// //LLEVAR COLORES
    document.addEventListener("DOMContentLoaded", function() {
    const selectedColors = [];
  
    const showHex=()=> {
      const colorPickers = document.querySelectorAll(".color_picker");
      selectedColors.length = 0; 
      colorPickers.forEach(picker => {
        selectedColors.push(picker.value);
      });
  
      // Muestra los colores en colorDiv
      const colorDiv = document.querySelector(".elementoColor");º
      colorDiv.innerHTML = ''; // Limpia el contenido actual
  
      if (selectedColors.length >= 4) { 
        selectedColors.forEach(colorHex => {
          const colorBox = document.createElement('div');
          colorBox.style.backgroundColor = colorHex;
          colorDiv.appendChild(colorBox);
        });
      } 
    }
    const guardarNombreButton = document.getElementById("guardarNombre");
    if (guardarNombreButton) {
      guardarNombreButton.addEventListener("click", showHex);
    }
  });
  


   