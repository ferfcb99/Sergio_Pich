document.addEventListener('DOMContentLoaded', function(){
    
});


// variables generales
const rutaDeDatos = '../data/data.json';
const preguntas = [];

// botones
const botonSiguiente = document.querySelector('.siguiente');
const botonAtras = document.querySelector('.atras');


// Eventos de botones
botonSiguiente.addEventListener('click', siguientePregunta);
botonAtras.addEventListener('click', anteriorPregunta);

    
function siguientePregunta(evt){
    console.log("Se dio click");
    console.log(evt);
}


function anteriorPregunta(evt){
    console.log("Evento atras")
}


function iteraExamen(examen){
    console.log(examen['noExamen']);
    console.log(examen['nombreExamen']);
    console.log("Entrando al foreach")
    examen['preguntas'].forEach( (pregunta) =>{
        /*
        console.log("----------------")
        console.log(pregunta['noPregunta'])
        console.log(pregunta['pregunta'])
        console.log(pregunta['imagen'])
        */
        preguntas.push(pregunta);
    });
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

getExamenPorId(rutaDeDatos, 2);

console.log(preguntas);

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