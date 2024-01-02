'use strict'

var texto1= '    Bienvenido al curso de JavaScript de Victor Robles   '
var texto2= 'es muy buen curso'
var numero= 444

//Reemplaza el texto del primer parametro con el segundo
var busqueda = texto1.replace('JavaScript', 'Python')
console.log(busqueda)

/*
Slice nos permite cortar el string a partir del caracter que nosostros queramos
cortara del 10 al 14
*/
var busqueda = texto1.slice(10, 14)
console.log(busqueda)

//De esta forma podemos separar el string dependiendo de un caracter, de una palabra,etc.
var busqueda = texto1.split(" ")
console.log(busqueda)

/*
Quita espacios por delante y por detras de las strings, esto lo hace para sacar los espacios
null
*/
var busqueda = texto1.trim()
console.log(busqueda)