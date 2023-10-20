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