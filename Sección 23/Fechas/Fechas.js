'use strict'

var fecha = new Date();

var year = fecha.getYear() //Year incorrecto
var year = fecha.getFullYear() //Year correcto

var month = fecha.getMonth() //Es el mes n empezando por 0, mes correcto es month++
month+=1;

var day = fecha.getDate()

var hour = fecha.getHours()

var textoHora = `
    El año es ${year}
    El mes es ${month}
    El dia es ${day}
    La hora es ${hour}
`;
console.log(fecha)
console.log(textoHora)