document.addEventListener('DOMContentLoaded', function(){
    iniciaApp();
});


// variables generales
const rutaDeDatos = '../data/data.json';
const preguntas = [];
const examenes = [];
let numeroPregunta = 0;
let numeroExamen = 2;
let numeroDePreguntas = 0;

// botones
const botonSiguiente = document.querySelector('.siguiente');
const botonAtras = document.querySelector('.atras');


// Eventos de botones
botonSiguiente.addEventListener('click', siguientePregunta);
botonAtras.addEventListener('click', anteriorPregunta);

function iniciaApp(){
    botonAtras.classList.add('d-none');
}
    
function siguientePregunta(evt){

    if(numeroPregunta >= 0){
        botonAtras.classList.remove('d-none');
    }

    if(numeroPregunta < (numeroDePreguntas - 1)){
        numeroPregunta = numeroPregunta + 1;
        const campoPregunta = document.querySelector('.preguntas');
        const parrafo = document.querySelector('.parrafo');
        campoPregunta.removeChild(parrafo);
        getExamenPorId(rutaDeDatos, numeroExamen);
    }else{
        botonSiguiente.value = "Terminar";
    }
    
}

function anteriorPregunta(evt){
    numeroPregunta = numeroPregunta - 1;
    if(numeroPregunta < 1){
        botonAtras.classList.add('d-none');
    }
 
    if(numeroPregunta < (numeroDePreguntas)){

        const campoPregunta = document.querySelector('.preguntas');
        const parrafo = document.querySelector('.parrafo');
        campoPregunta.removeChild(parrafo);
        getExamenPorId(rutaDeDatos, numeroExamen);
    }else{
        botonSiguiente.value = "Siguiente";
    }



}

function agregaPregunta(pregunta){
    const campoPregunta = document.querySelector('.preguntas');
    const parrafo = document.createElement('p');
    parrafo.textContent = pregunta['pregunta'];
    parrafo.classList.add('parrafo');
    campoPregunta.appendChild(parrafo);
    console.log(`Tiene: ${numeroDePreguntas} preguntas`);
}

function obtieneNumeroDePreguntas(examen){
    const cantidadPreguntas = examen['preguntas'].length;
    return cantidadPreguntas;
}

function iteraExamen(examen){
    for (let i = 0; i < examen['preguntas'].length; i++) {
        if(i == numeroPregunta){
            const pregunta = examen['preguntas'][i];
            agregaPregunta(pregunta);
            
            numeroDePreguntas = obtieneNumeroDePreguntas(examen);
        }
    }
}

// funcion que consulta los datos de una ruta
function getExamenPorId(ruta, noExamen){
    fetch(ruta)
        .then((response) => response.json())
        .then((data) => {
            data.forEach( (examen) =>{
                if(examen['noExamen'] == noExamen){
                  iteraExamen(examen);
                }
            } );
        });
}

getExamenPorId(rutaDeDatos, numeroExamen);
// sconsole.log(preguntas)






/*
const numeros = [2.3,23,435,5,2,-7,32];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
   //  console.log(numero);
}


numeros.forEach( (numero) =>{
    console.log(numero)
} );

*/