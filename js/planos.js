const planta0 = document.getElementById("planta-baja");
const planta1 = document.getElementById("planta-primera");
const planta2 = document.getElementById("planta-segunda");

const boton0 = document.getElementById("boton-planta-baja");
const boton1 = document.getElementById("boton-planta-primera");
const boton2 = document.getElementById("boton-planta-segunda");
const botonRotacion = document.getElementById("boton-autorotacion");
const indicadorRotacion = document.getElementById("indicador");

let rotacion = false;

setInterval( cambioPlanta , 5000);

function boton0func () {
    planta0.style.display = "block"
    planta1.style.display = "none"
    planta2.style.display = "none"
  };

function boton1func () {
    planta1.style.display = "block"
    planta0.style.display = "none"
    planta2.style.display = "none"
  };

function boton2func () {
    planta2.style.display = "block"
    planta0.style.display = "none"
    planta1.style.display = "none"
  };

  function boton0funcAux () {
    rotacion=false;
    if (rotacion==true){
        indicadorRotacion.innerHTML = '<p id="rotacionActiva">Rotacion: Activada</p>';
    }
    else if (rotacion==false){
        indicadorRotacion.innerHTML = '<p id="rotacionNoActiva">Rotacion: Desactivada</p>';
    }
    planta0.style.display = "block"
    planta1.style.display = "none"
    planta2.style.display = "none"
  };

function boton1funcAux () {
    rotacion=false;
    if (rotacion==true){
        indicadorRotacion.innerHTML = '<p id="rotacionActiva">Rotacion: Activada</p>';
    }
    else if (rotacion==false){
        indicadorRotacion.innerHTML = '<p id="rotacionNoActiva">Rotacion: Desactivada</p>';
    }
    planta1.style.display = "block"
    planta0.style.display = "none"
    planta2.style.display = "none"
  };

function boton2funcAux () {
    rotacion=false;
    if (rotacion==true){
        indicadorRotacion.innerHTML = '<p id="rotacionActiva">Rotacion: Activada</p>';
    }
    else if (rotacion==false){
        indicadorRotacion.innerHTML = '<p id="rotacionNoActiva">Rotacion: Desactivada</p>';
    }
    planta2.style.display = "block"
    planta0.style.display = "none"
    planta1.style.display = "none"
  };

boton0.onclick = boton0funcAux;

boton1.onclick = boton1funcAux;

boton2.onclick = boton2funcAux;

let planta=0;
function cambioPlanta(){

    if (rotacion) {
        if (planta == 0){
            planta = 1
        }
        else if (planta == 1){
            planta = 2
        }
        else if (planta == 2){
            planta = 0
        }

        if (planta == 0){
            boton0func();
        }
        else if (planta == 1){
            boton1func();
        }
        else if (planta == 2){
            boton2func();
        }
    }
}

botonRotacion.onclick = function(){
    rotacion = !rotacion;

    if (rotacion==true){
        indicadorRotacion.innerHTML = '<p id="rotacionActiva">Rotacion: Activada</p>';
    }
    else if (rotacion==false){
        indicadorRotacion.innerHTML = '<p id="rotacionNoActiva">Rotacion: Desactivada</p>';
    }
    

}


