'use strict'

// Transdormacion de textos

var num1 = 44
var texto1 = ' hola como te va hola'
var texto2 = 'chau'

var dato = num1.toString()
    dato = texto1.toUpperCase()
    dato = texto2.toLowerCase()

console.log(dato)

//calcular longitud

var nombre = "Valentino Bisbano"
    nombre = ['hola', 'chau']

console.log(nombre.length)

//concatenar - unir textos

//var texto_total = texto1+texto2
var texto_total = texto1.concat(" "+texto2)

console.log(texto_total)

//Metodos de busqueda

//buscar una palabra dentro de un string

var busqueda = texto1.indexOf("hola")
console.log(busqueda)

busqueda = texto1.lastIndexOf("hola")
console.log(busqueda)

//no va a aparecer y deberia salir -1
busqueda=texto1.search("valentino")
console.log(busqueda)

/*
si ponemos "hola" nos buscara solo la primer coincidencia
si ponemos /hola/g hace una busqueda global
*/
busqueda=texto1.match(/hola/g)
console.log(busqueda)

//metodo para sacar un trozo de una busqueda o de una string
busqueda=texto1.substring(4, 10)// a partir del caracter 4 imprimir 10 en adelante
console.log(busqueda)

//sirve para sacar una letra en concretp
busqueda = texto1.charAt(14)
console.log(busqueda)

//busca al inicio del string
busqueda = texto1.startsWith("te")
busqueda = texto1.endsWith("te")
console.log(busqueda)

//Busca en nuestro string el texto pedido y nos devuelve true o false
busqueda = texto1.includes("te")