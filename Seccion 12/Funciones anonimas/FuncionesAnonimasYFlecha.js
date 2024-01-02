'use strict'


//funcion sin nombre Funcion anonima

var pelicula = function(nombre){
    return 'La pelicula es: '+nombre
}

//callback

function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2
    sumaYmuestra(sumar)
    sumaPorDos(sumar)
}
/*

Funcion de tipo flecha 
es lo mismo
function(dato){...}
a
dato=>{...}
Es una forma mucho mas limpia de hacer funciones de tipo callback
Si tiene un solo parametro no hace falta parentesis, si lleva
más de uno si hace falta

*/
sumame(5, 7, dato=>{
    console.log("La suma es: ", dato)
},  dato=>{
    console.log("La suma por dos es: ", (dato*2))
}
)

