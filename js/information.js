document.addEventListener("DOMContentLoaded", function () {
  const saveNameBtn = document.getElementById("guardarNombre");
  let nameInput;
  let saveColorButton1;
  let saveColorButton2;
  let saveColorButton3;
  let saveColorButton4;



  // Al hacer clic en el botón "Guardar Nombre", redirigir a playGame.html con el nombre como parámetro de consulta
  saveNameBtn.addEventListener("click", function () {
    nameInput = document.getElementById("nameInput").value;
    localStorage.setItem("Name", nameInput);
    saveColorButton1 = document.getElementById("color_picker_1").value;
    localStorage.setItem("color1", saveColorButton1);
    saveColorButton2 = document.getElementById("color_picker_2").value;
    localStorage.setItem("color2", saveColorButton2);
    saveColorButton3 = document.getElementById("color_picker_3").value;
    localStorage.setItem("color3", saveColorButton3);
    saveColorButton4 = document.getElementById("color_picker_4").value;
    localStorage.setItem("color4", saveColorButton4);
    const url = `playGame.html?nombre=${encodeURIComponent("nameInput")}`;
    window.location.href = url;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let name = localStorage.getItem("Name");
  document.getElementById("nombreMostrado").innerHTML = name;
  let colorPlayGame = localStorage.getItem("color1");
  document.getElementById("color_0").style.backgroundColor = colorPlayGame;
  let colorPlayGame1 = localStorage.getItem("color2");
  document.getElementById("color_1").style.backgroundColor = colorPlayGame1;
  let colorPlayGame2 = localStorage.getItem("color3");
  document.getElementById("color_2").style.backgroundColor = colorPlayGame2;
  let colorPlayGame3 = localStorage.getItem("color4");
  document.getElementById("color_3").style.backgroundColor = colorPlayGame3;
});


let arrayColor= []
 .push

mathrandom