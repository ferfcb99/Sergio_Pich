document.addEventListener('DOMContentLoaded', function(){
    
});

const preguntas = [ 
    ['¿Pregunta 1?', ['rpt1', false], ['rpt2', false], ['rpt3', true]],
    ['¿Pregunta 2?', ['rpt1', false], ['rpt2', false], ['rpt3', true]],
    ['¿Pregunta 3?', ['rpt1', false], ['rpt2', false], ['rpt3', true]],
    ['¿Pregunta 4?', ['rpt1', false], ['rpt2', false], ['rpt3', true]],
    ['¿Pregunta 5?', ['rpt1', false], ['rpt2', false], ['rpt3', true]],
    ['¿Pregunta 6?', ['rpt1', false], ['rpt2', false], ['rpt3', true], ['rpt4', false]],
];


const pregunta = document.querySelector('.pregunta');
const botonSiguiente = document.querySelector('.siguiente');
// DOM - Document Object Model
pregunta.textContent = "Ccambio el contenido";
console.log(botonSiguiente);


// agrega evento
botonSiguiente.addEventListener('click', function(evt){
    console.log(evt)
});

//../data/data.json'
const rutaDeDatos = '../data/data.json';


function getData(ruta){
    fetch(ruta)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

const datosDeExamenes = getData(rutaDeDatos);