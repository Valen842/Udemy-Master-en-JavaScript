'use strict'

/*
Hacer un programa que:
1. pida 6 numeros por pantalla y los meta en un array
2. debe mostrar el array entero en el cuerpo de la pagina y en la consola
3. hay que ordenar el array y mostrarlo
4. invertir su orden y mostrarlo
5. mostrar cuantos elementos tenga el array
6. realizar una busqueda de un valor introducido por el usuario y que nos diga si esta en el array
y su posicion
*/

var num = []
for(var i = 0; i<=5; i++){
    num.push(parseInt((prompt('Numero '+(i+1)+': ',0))))
}

document.write("<ul>")
num.forEach((elemento, indice)=> {
    document.write("<li>"+(indice+1)+' - '+elemento+"</li>")
    console.log(elemento)
});
document.write("</ul>")

num.sort(function(a, b) {
    return a - b;
});

console.log(num)
document.write("<ul>")
num.forEach((elemento, indice)=> {
    document.write("<li>"+(indice+1)+' - '+elemento+"</li>")
    console.log(elemento)
});
document.write("</ul>")

console.log(num.length)

document.write("<h3>El arrray mide: </h3>"+ num.length)