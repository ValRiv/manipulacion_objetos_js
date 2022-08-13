"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá realizar los siguientes enunciados todos en este
    script de javascript. Cada enunciado agrega una funcionalidad
    extra al programa.
/*

/* 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Ingresar"
y leer los datos ingresados en "usuario" y "email".
- Tome esos datos y almacenelo en memoria permanente del explorador.
- Deberá completar las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
con los datos almacenados en memoria, a fin de darle la bienvenida al usuario logeado.

*/
console.log("----------------------------------------");
console.log("Almacenamiento local (localStorage)");

// Método ->  localStorage.setItem(clave, valor)
// clave = nombre para identificar el elemento
// valor = valor/contenido del elemento
document.querySelector("#btnIngresar").onclick = async () => {
    const usuario = document.querySelector("#usuario").value;
    const email = document.querySelector("#email").value;
    if(usuario == "" || email == "") {   
        alert("Indique usuario y email");
        return;
    }
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('email', email);  
}
let usuario =  localStorage.getItem('usuario');
let email =  localStorage.getItem('email');

console.log("Analizar el tipo de dato que se recupera del storage");
console.log(typeof usuario); //string;
console.log(typeof email); //string;

console.log("----------------------------------------");
console.log("Almacenamiento de sesión (sessionStorage)");

// Método ->  sessionStorage.setItem(clave, valor)
// clave = nombre del elemento
// valor = Contenido del elemento
sessionStorage.setItem('usuario', 'usuarioLogeado');
sessionStorage.setItem('email', 'emailLogeado');

let lista = sessionStorage.getItem('usuario');
let mail =  sessionStorage.getItem('email');

console.log("Analizar como se recuperar los datos del storage")
console.log(usuario); 
console.log(email); 
console.log("Bienvenido: " + "  " + usuario  +  
      "."+ "  Email: " + " "+ email);


/* 2 - Enunciado

- Al comenzar el script se debe verificar si en memoria se encuentran
almacenados los datos de "usuario" y "email".
- En caso de que hubiera datos almacenados se debe completar los elementos
"usuarioLogeado" y "emailLogeado".
- Se debe ocultar la sección "login" (puede usar la clase CSS hidden ya creada)
y deberá revelar la sección "logout" (quitar la clase hidden).

*/
//Guarda una clave

localStorage.usuario= 'usuario';
localStorage.email = 'email';

console.log("----------------------------------------")
console.log(" 3- Eliminar datos")

localStorage.removeItem('#login');
console.log("----------------------------------------")

/* 3 - Enunciado

- Debera capturar el evento "onclick" del boton "Salir". Cuando este
botón sea presionado deberá borrar de memoria las variables de este programa.
- Luego deberá refrescar la página (desde javascript, con window.location.reload()) y al
volverse a cargar debería aparecer nuevamente la sección de bienvenida
ya que no debería haber más datos en memoria cargados.
*/

const cargar = document.getElementById('btnSalir');

cargar.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});

