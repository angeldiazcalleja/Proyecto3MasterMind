
//   //para guardar información "j1" seria el nombre de la variable donde guardaremos la información y jugador.value es el valor que queremos guardar
// sessionStorage.setItem("j1", jugador.value);
// //para obtener la información usamos lo siguiente
// let nombreJugador = sessionStorage.getItem("j1");
// "j1" es la variable donde guardamos la información anterior


document.getElementById("buttonPlayGame").addEventListener("click", function () {
    // Obtener el valor del input
    let nombre = document.getElementById("nameInput").value;

    // Almacenar el valor en sessionStorage
    sessionStorage.setItem("nombre", nombre.value);

    // Muestra el valor en la página
    document.getElementById("nombreMostrado").textContent = nombre;
  });

  // Recuperar el valor almacenado en sessionStorage y mostrarlo
  let nombreAlmacenado = sessionStorage.getItem("nombre");
  if (nombreAlmacenado) {
    document.getElementById("nombreMostrado").textContent = nombreAlmacenado;
  }





