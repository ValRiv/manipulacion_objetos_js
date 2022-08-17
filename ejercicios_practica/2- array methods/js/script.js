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

console.log('----------------------ENUNCIADO 1A----------------------------------')
const personasArray = JSON.parse(personasJSON);
console.log(typeof personasJSON); // object
console.log(typeof personasArray); // string
console.log(personasArray);

console.log('----------------------ENUNCIADO 1B----------------------------------')
const personasFilter = personasArray.filter(personas => personas.edad >= 18);
personasFilter.forEach(persona => {
    console.log("Nombre: " + persona.nombre + "," + "Edad: " + persona.edad)
})
/* 2 - Enunciado

- Con el array de personas filtradas (resultado del enunciado anterior)
- Agregue al HTML los elementos que crea necesario e utilice los
mecanismos que prefiera para agregar por cada persona el nombre y edad
en el HTML (es decir, generar el contenido de forma dinámica).

*/
console.log('----------------------ENUNCIADO 2----------------------------------')

const lista = document.createElement('p');
const contenido = document.createElement('p');
lista.innerText = 'Aqui estan los datos del JSON: '
contenido.innerText = personasJSON
document.body.appendChild(lista);
document.body.appendChild(contenido);

const edadIngresar = document.createElement('p');
edadIngresar.innerText = 'Ingrese una edad: '
document.body.appendChild(edadIngresar);
const inputEdad = document.createElement("input");
inputEdad.id = "IdInput";
inputEdad.name = "edad";
inputEdad.placeholder = "Edad";
inputEdad.type = "text";
inputEdad.classList.add('edad');
document.body.appendChild(inputEdad);

const button1 = document.createElement("button");
button1.innerHTML = "INGRESAR";
document.body.appendChild(button1);
button1.onclick = () => {
    
    if (inputEdad.value>=18) {
    const personas = JSON.parse(personasJSON);
    const personasFilter = personasArray.filter(personas => personas.edad >= 18);
    personasFilter.forEach(persona => {
        console.log("Nombre: " + persona.nombre + "," + "Edad: " + persona.edad)
        const nombrehtml=document.createElement('p');
        nombrehtml.innerText= ("Nombre: " + persona.nombre + "," + "Edad: " + persona.edad)
        
        document.body.appendChild(nombrehtml);
    })
} else {
    const personasFilter = personasArray.filter(personas => personas.edad <= 18);
    personasFilter.forEach(persona => {
        console.log("Nombre: " + persona.nombre + "," + "Edad: " + persona.edad)
        const nombrehtml=document.createElement('p');
        nombrehtml.innerText= ("Nombre: " + persona.nombre + "," + "Edad: " + persona.edad)
        document.body.appendChild(nombrehtml);
    })
}
}


/* 3 - BONUS TRACK

- Si misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/





 


