const planta0 = document.getElementById("planta-baja");
const planta1 = document.getElementById("planta-primera");
const planta2 = document.getElementById("planta-segunda");

const boton0 = document.getElementById("boton-planta-baja");
const boton1 = document.getElementById("boton-planta-primera");
const boton2 = document.getElementById("boton-planta-segunda");
const botonRotacion = document.getElementById("boton-autorotacion");
const indicadorRotacion = document.getElementById("indicador");

const botonLapso5 = document.getElementById("rotacion-5");
const botonLapso10 = document.getElementById("rotacion-10");
const botonLapso15 = document.getElementById("rotacion-15");
const botonLapso20 = document.getElementById("rotacion-20");
const botonLapso30 = document.getElementById("rotacion-30");

const botonDimension1 = document.getElementById("mapa-tamano-1");
const botonDimension2 = document.getElementById("mapa-tamano-2");
const botonDimension3 = document.getElementById("mapa-tamano-3");
const botonDimension4 = document.getElementById("mapa-tamano-4");
const botonDimension5 = document.getElementById("mapa-tamano-5");
const botonDimension6 = document.getElementById("mapa-tamano-6");

const root = document.querySelector(':root');

function redimensiona(alto, ancho,botonpulsado){
    root.style.setProperty('--map-width',ancho);
    root.style.setProperty('--map-height', alto);

    reseteaEstadoBoton(botonDimension1);
    reseteaEstadoBoton(botonDimension2);
    reseteaEstadoBoton(botonDimension3);
    reseteaEstadoBoton(botonDimension4);
    reseteaEstadoBoton(botonDimension5);
    reseteaEstadoBoton(botonDimension6);

    botonpulsado.classList.add("boton-active");
}

botonDimension1.onclick = function () {redimensiona('662px','936px', this)};
botonDimension2.onclick = function () {redimensiona('777px','1100px', this)};
botonDimension3.onclick = function () {redimensiona('827px','1170px', this)};
botonDimension4.onclick = function () {redimensiona('910px','1287px', this)};
botonDimension5.onclick = function () {redimensiona('992px','1404px', this)};
botonDimension6.onclick = function () {redimensiona('1984px','2808px', this)};

let rotacion = false;
let intervalo = setInterval( cambioPlanta , 3000);

botonRotacion.onclick = function(){auxiliarCompacta(3000, 3,this), reseteaEstadoBoton(boton0), reseteaEstadoBoton(boton1), reseteaEstadoBoton(boton2)}
botonLapso5.onclick = function(){auxiliarCompacta(5000, 5 ,this), reseteaEstadoBoton(boton0), reseteaEstadoBoton(boton1), reseteaEstadoBoton(boton2)};
botonLapso10.onclick = function(){auxiliarCompacta(10000, 10 ,this), reseteaEstadoBoton(boton0), reseteaEstadoBoton(boton1), reseteaEstadoBoton(boton2)};
botonLapso15.onclick = function(){auxiliarCompacta(15000, 15 ,this), reseteaEstadoBoton(boton0), reseteaEstadoBoton(boton1), reseteaEstadoBoton(boton2)};
botonLapso20.onclick = function(){auxiliarCompacta(20000, 20 ,this), reseteaEstadoBoton(boton0), reseteaEstadoBoton(boton1), reseteaEstadoBoton(boton2)};
botonLapso30.onclick = function(){auxiliarCompacta(30000, 30 ,this), reseteaEstadoBoton(boton0), reseteaEstadoBoton(boton1), reseteaEstadoBoton(boton2)};

function auxiliarCompacta(lapso, segundos, botonpulsado){
    rotacion = true;
    root.style.setProperty('--status-color','green');
    clearInterval(intervalo);
    intervalo = setInterval( cambioPlanta , lapso);
    RotacionAuxiliar (segundos);

    reseteaEstadoBoton(botonRotacion);
    reseteaEstadoBoton(botonLapso5);
    reseteaEstadoBoton(botonLapso10);
    reseteaEstadoBoton(botonLapso15);
    reseteaEstadoBoton(botonLapso20);
    reseteaEstadoBoton(botonLapso30);

    botonpulsado.classList.add("boton-active");
}

function reseteaEstadoBoton(elemento){
    elemento.classList.remove("boton-active");
    elemento.classList.remove("boton-active-temp");  
}

function boton0func () {
    planta0.style.display = "block";
    planta1.style.display = "none";
    planta2.style.display = "none";
    reseteaEstadoBoton(boton1);
    reseteaEstadoBoton(boton2);

    boton0.classList.add("boton-active-temp"); 
  };

function boton1func () {
    planta1.style.display = "block";
    planta0.style.display = "none";
    planta2.style.display = "none";
    reseteaEstadoBoton(boton0);
    reseteaEstadoBoton(boton2);
    boton1.classList.add("boton-active-temp"); 
  };

function boton2func () {
    planta2.style.display = "block";
    planta0.style.display = "none";
    planta1.style.display = "none";
    reseteaEstadoBoton(boton0);
    reseteaEstadoBoton(boton1);
    boton2.classList.add("boton-active-temp");  
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

  function actualizaEstadoRotacion(){ root.style.setProperty('--status-color','red'); };

boton0.onclick = function() {
    boton0funcAux(); actualizaEstadoRotacion();
    reseteaEstadoBoton(boton1);
    reseteaEstadoBoton(boton2);
    this.classList.add("boton-active");
    reseteaEstadoBoton(botonRotacion);
    reseteaEstadoBoton(botonLapso5);
    reseteaEstadoBoton(botonLapso10);
    reseteaEstadoBoton(botonLapso15);
    reseteaEstadoBoton(botonLapso20);
    reseteaEstadoBoton(botonLapso30); 
};

boton1.onclick = function() {
    boton1funcAux(); actualizaEstadoRotacion();
    reseteaEstadoBoton(boton0);
    reseteaEstadoBoton(boton2);
    this.classList.add("boton-active");
    reseteaEstadoBoton(botonRotacion);
    reseteaEstadoBoton(botonLapso5);
    reseteaEstadoBoton(botonLapso10);
    reseteaEstadoBoton(botonLapso15);
    reseteaEstadoBoton(botonLapso20);
    reseteaEstadoBoton(botonLapso30); 
};

boton2.onclick = function() {
    boton2funcAux(); 
    actualizaEstadoRotacion();     
    reseteaEstadoBoton(boton1);
    reseteaEstadoBoton(boton0);
    this.classList.add("boton-active");
    reseteaEstadoBoton(botonRotacion);
    reseteaEstadoBoton(botonLapso5);
    reseteaEstadoBoton(botonLapso10);
    reseteaEstadoBoton(botonLapso15);
    reseteaEstadoBoton(botonLapso20);
    reseteaEstadoBoton(botonLapso30); 
};

let planta=0;
function cambioPlanta(isActive){

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

function RotacionAuxiliar (valorlapso) {

    if (rotacion==true){
        indicadorRotacion.innerHTML = '<p id="rotacionActiva">Rotacion: Activada ( ' + valorlapso + 's )</p>';
    }
    else if (rotacion==false){
        indicadorRotacion.innerHTML = '<p id="rotacionNoActiva">Rotacion: Desactivada</p>';
    }

}
