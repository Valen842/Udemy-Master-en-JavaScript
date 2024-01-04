"use strict";

function cambiaColor(elemento, color){
    elemento.style.color = color;
}

//CONSEGUIR ELEMENTOS CON UN ID CONCRETO

//Dos distintas formas de seleccionar el texto
var loremElement = document.getElementById("lorem");

var loremElement2 = document.querySelector("#lorem") //mismos selectores que en css

console.log(loremElement);
console.log(loremElement2);

// Para ver lo que hay dentro del HTML
var loremContent = loremElement.innerHTML;
console.log(loremContent);

// Para modificar el texto del archivo HTML
loremElement.innerHTML = "Como te va?";
console.log(loremElement.innerHTML);
//document.write(loremElement);

// Para modificar el estilo
loremElement.style.background = "blue";
loremElement.style.padding = "20px";
loremElement.style.color= "white"
loremElement.className= "Hola"

//CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todosLosDivs = document.getElementsByTagName("div")
// Para seleccionar solo uno de los elementos
var contenidoEnTexto = todosLosDivs[2];
console.log(contenidoEnTexto.textContent); // Muestra el contenido de texto del elemento

// Modificacion del texto usando innerHTML
contenidoEnTexto.innerHTML = "Fui modificado con innerHTML";

/*
For Each solo sirve para recorrer arrays que hayamos creado con valores con objetos, strings,
esto es una HTML collection, debemos usar un bucle For in
todosLosDivs.forEach((valor,indice)=>{
    */
var valor = 0;
for(valor in todosLosDivs){
    console.log(todosLosDivs[valor])
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo);
    }
}
//})


//CONSEGUIR ELEMENTOS POR SU CLASE CSS
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillo = document.getElementsByClassName('amarillo');
//nos salta error cuando ponemos de hacerlo de forma global, debemos apuntar uno a uno o en un bucle
divsAmarillo[0].style.background = 'yellow'; 
var div
for(div in divsRojos){
    divsRojos[div].style.background = 'red'; 
}
console.log(divsRojos);

/*
Los query selectors tienen muchos problemas a la hora de seleccionar especialmente clases y etiquetas
ya que solo pueden seleccionar una a la vez. Son convenientes para id's ya que no suelen compartir
nombres. Una forma de solucionar este problema se encuentra aquí

https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
*/