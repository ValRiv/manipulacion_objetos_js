"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá utilizar los datos en formato JSON disponible
    en "data.js" para realizar los siguientes enunciados.
/*

/* 1 - Enunciado

- Levantar los datos data.js parseando el JSON, generando
una array de personas.
- Con el array anterior utilice el metodo filter para generar
un array de personas mayores o igual a 18 años.
- Imprimir en consola el array resultante.

*/
function funcionEjecutar(){
console.log('----------------------ENUNCIADO 1A----------------------------------')
const personasArray = JSON.parse(personasJSON);
console.log(typeof personasJSON); // object
console.log(typeof personasArray); // string
console.log(personasArray);

console.log('----------------------ENUNCIADO 1B----------------------------------')
const personasFilter = personasArray.filter(personas => personas.edad >= 18);
console.log(personasFilter);

/* 2 - Enunciado

- Con el array de personas filtradas (resultado del enunciado anterior)
utilice le método forEach para en cada iteración con cada persona
renderizar el nombre y edad de esa persona en el HTML.
- Agregue al HTML los elementos que crea necesario e utilice los
mecanismos que prefiera para agregar por cada persona el nombre y edad
en el HTML (es decir, generar el contenido de forma dinámica).

*/

console.log('----------------------ENUNCIADO 2----------------------------------')
personasFilter.forEach((persona) => {
    console.log(persona);
});

function agregarElementosHTML() {
    const divHTML = document.getElementById("personaHtml");

    personasArray.forEach(function (personas, index) {
        const lista = document.createElement("li");
        const contenido = document.createTextNode(personas.nombre + ' ' + personas.edad + " ");
        divHTML.appendChild(lista);
        lista.appendChild(contenido);
    })
}
agregarElementosHTML() + console.log( " Mas lista en HTML");

console.log('-------------------------ENUNCIADO 3 -------------------------------')
}
/* 3 - BONUS TRACK

- Si misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/

const articulo = document.querySelector('article');
const numero = document.querySelector('input');
numero.onchange = () => {
    alert("Su edad es:  " + numero.value)
    console.log("La edad ingresada es: " + numero.value + " años")
}

//----------------------------------FIN-------------------------------------------//
 


