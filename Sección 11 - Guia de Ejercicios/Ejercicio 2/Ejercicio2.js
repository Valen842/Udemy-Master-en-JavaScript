'use strict'

var suma = 0
var i = 0
var num=0

do{
    num = parseInt(prompt ('Introduce numero', 0)) // Por defecto aparece en este caso 0
    if(isNaN(num)){
        num=0
    }else if(num>0){
        suma += num
        i++
    }
}while (num>=0)

console.log(suma/i)