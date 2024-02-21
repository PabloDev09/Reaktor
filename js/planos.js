const planta0 = document.getElementById("planta-baja");
const planta1 = document.getElementById("planta-primera");
const planta2 = document.getElementById("planta-segunda");

const boton0 = document.getElementById("boton-planta-baja");
const boton1 = document.getElementById("boton-planta-primera");
const boton2 = document.getElementById("boton-planta-segunda");

boton0.onclick = function () {
  planta0.style.display = "block"
  planta1.style.display = "none"
  planta2.style.display = "none"
};

boton1.onclick = function () {
  planta1.style.display = "block"
  planta0.style.display = "none"
  planta2.style.display = "none"
};

boton2.onclick = function () {
    planta2.style.display = "block"
    planta0.style.display = "none"
    planta1.style.display = "none"
  };