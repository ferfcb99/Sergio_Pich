document.addEventListener('DOMContentLoaded', function(){
    
});


// variables generales
const rutaDeDatos = '../data/data.json';
const preguntas = [];
const examenes = [];
let numeroPregunta = 0;
let numeroExamen = 0;

// botones
const botonSiguiente = document.querySelector('.siguiente');
const botonAtras = document.querySelector('.atras');


// Eventos de botones
botonSiguiente.addEventListener('click', siguientePregunta);
botonAtras.addEventListener('click', anteriorPregunta);

    
function siguientePregunta(evt){
    numeroPregunta = numeroPregunta + 1;
    const campoPregunta = document.querySelector('.preguntas');
    const parrafo = document.querySelector('.parrafo');
    campoPregunta.removeChild(parrafo);
    getExamenPorId(rutaDeDatos, numeroExamen);
}


function anteriorPregunta(evt){
    console.log("Evento atras")
}

function agregaPregunta(pregunta){
    const campoPregunta = document.querySelector('.preguntas');
    const parrafo = document.createElement('p');
    parrafo.textContent = pregunta['pregunta'];
    parrafo.classList.add('parrafo');
    campoPregunta.appendChild(parrafo);
    console.log(parrafo);
}



function iteraExamen(examen){
    console.log(examen['noExamen']);
    console.log(examen['nombreExamen']);

    for (let i = 0; i < examen['preguntas'].length; i++) {
        if(i == numeroPregunta){
            const pregunta = examen['preguntas'][i];
            agregaPregunta(pregunta);
        }
    }
    /*examen['preguntas'].forEach( (pregunta, index) =>{
        // preguntas.push(pregunta);
        // console.log(pregunta['pregunta']);
        if(index === numeroPregunta){
            console.log(pregunta['pregunta']);
            console.log("Saliendo")
            return;
        }
        agregaPregunta(pregunta);
    });*/
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