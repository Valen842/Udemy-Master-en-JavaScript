'use strict'

/*
Tabla de multiplicar de un numero introducido por pantalla
*/

var num1=parseInt(prompt('Ingrese el numero', 1))

for(var i=0;i<=10;i++){
    document.write('<ul><li>'+i +' x '+num1+' = '+(i*num1)+'</li></ul>')
}