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

/* Selector desplegable de dimensiones INICIO */

document.querySelector('#selector-dimensiones').addEventListener("change", function() {
    if (this.value === "res1") {
        redimensiona('662px','936px', botonDimension1);
    }
    else if (this.value === "res2") {
        redimensiona('777px','1100px', botonDimension2);
    }
    else if (this.value === "res3") {
        redimensiona('827px','1170px', botonDimension3);
    }
    else if (this.value === "res4") {
        redimensiona('910px','1287px', botonDimension4);
    }
    else if (this.value === "res5") {
        redimensiona('992px','1404px', botonDimension5);
    }
    else if (this.value === "res6") {
        redimensiona('1984px','2808px', botonDimension6);
    }
  }
  );
/* selector desplegable dimensiones FIN */



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




/*FUNCION EJEMPLO SELECCION CURSOS*/

/*Guardamos el elemento a escuchar en una variable */
const selectorCursos = document.querySelector('#selector-curso');

const aula01 = document.getElementById("aula0-1");
const aula02no = document.getElementById("aula0-2-norte");
const aula02su = document.getElementById("aula0-2-sur");
const aula03 = document.getElementById("aula0-3");
const aula05 = document.getElementById("aula0-5");
const aula07 = document.getElementById("aula0-7");
const aula09 = document.getElementById("aula0-9");
const aula011 = document.getElementById("aula0-11");

/* Funcion que quita la clase de enfasis al elemento */
function reseteaEnfasisAulas(){
    aula01.classList.remove('enfasis-aula');
    aula02no.classList.remove("enfasis-aula");
    aula02su.classList.remove("enfasis-aula");
    aula03.classList.remove("enfasis-aula");
    aula05.classList.remove("enfasis-aula");
    aula07.classList.remove("enfasis-aula");
    aula09.classList.remove("enfasis-aula");
    aula011.classList.remove("enfasis-aula");
}
function enfatiza(aula){
    aula.classList.add("enfasis-aula");
}

/* Le asignamos una escucha que llame una funcion*/
selectorCursos.addEventListener("change", function() {

    /* La funcion ejemplo tiene una logica de ifs que seguramente podreis mejorar con lo que sabeis que es mas que nosotros */

    /* Opcion para deseleccionar aulas */
    if (this.value === "0") {

        /* resetea el enfasis de las aulas antes de aplicar el nuevo enfasis */
        reseteaEnfasisAulas();
    }

    /*1º FPB*/
    else if (this.value === "1") {
        /* resetea el enfasis de las aulas antes de aplicar el nuevo enfasis */
        reseteaEnfasisAulas();
        /* Marcamos el elemento html correspondiente */
        enfatiza(aula01);
    }
    /*2º FPB*/
    else if (this.value === "2") {
        /* resetea el enfasis de las aulas antes de aplicar el nuevo enfasis */
        reseteaEnfasisAulas();
        /* Marcamos el elemento html correspondiente */
        enfatiza(aula03);
    }

    /*1º DAM*/
    else if (this.value === "3") {
        /* resetea el enfasis de las aulas antes de aplicar el nuevo enfasis */
        reseteaEnfasisAulas();
        /* Marcamos el elemento html correspondiente */
        enfatiza(aula05);
    }

    /*2º DAM*/
    else if (this.value === "4") {
        /* resetea el enfasis de las aulas antes de aplicar el nuevo enfasis */
        reseteaEnfasisAulas();
        /* Marcamos el elemento html correspondiente */
        enfatiza(aula07);
    }

    /*3º DIVER*/
    else if (this.value === "5") {
        /* resetea el enfasis de las aulas antes de aplicar el nuevo enfasis */
        reseteaEnfasisAulas();
        /* Marcamos el elemento html correspondiente */
        enfatiza(aula02no);
    }

    /*4º DIVER*/
    else if (this.value === "6") {
        /* resetea el enfasis de las aulas antes de aplicar el nuevo enfasis */
        reseteaEnfasisAulas();
        /* Marcamos el elemento html correspondiente */
        enfatiza(aula02su);
    }

    /*Aula de plastica*/
    else if (this.value === "7") {
        /* resetea el enfasis de las aulas antes de aplicar el nuevo enfasis */
        reseteaEnfasisAulas();
        /* Marcamos el elemento html correspondiente */
        enfatiza(aula09);
    }

    /*1º BCS A*/
    else if (this.value === "8") {
    /* resetea el enfasis de las aulas antes de aplicar el nuevo enfasis */
    reseteaEnfasisAulas();
    /* Marcamos el elemento html correspondiente */
    enfatiza(aula011);
    }
    }
  );
