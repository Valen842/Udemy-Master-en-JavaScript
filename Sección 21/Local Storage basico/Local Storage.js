'use strict'

/*
LOCAL STORAGE - HTML5
Sirve para guardar informacion utilizada en un sitio web por sesion y que esta informacion persista
y este disponible durante la navegacion entre diferentes paginas de nuestra pagina web o aplicacion web

Es una memoria dentro de nuestro ordenador
*/

//Para saber si tenemos disponible en nuestro navegador Local Storage
if(typeof(Storage)!=='undefined'){
    console.log('LocalStorage available')
}else{
    console.log('LocalStorage unavailable')
}

//Como guardo un dato en el Local Storage
//                     key      value
localStorage.setItem('titulo', 'curso');

//Recuperar elemento
console.log(localStorage.getItem('titulo'));
document.querySelector('#peliculas').innerHTML = localStorage.getItem('titulo');

//Guardar objetos
var usuario = {
    nombre: 'Valentino',
    mail: 'vbisbano@hola.com',
    web: 'vbisbano.webpage'
};
//Debemos enviar datos de json en string para poder tener los valores correctos
localStorage.setItem('usuario', JSON.stringify(usuario));

//Recuperar objeto JSON string
console.log(localStorage.getItem('usuario')) //nos lo imprime como string no como objeto json
var userjs = JSON.parse(localStorage.getItem('usuario'));

console.log(userjs);
document.querySelector('#datos').append(' '+userjs.web+' - '+userjs.nombre+' - '+userjs.mail);

localStorage.removeItem('usuario') //saca el usuario