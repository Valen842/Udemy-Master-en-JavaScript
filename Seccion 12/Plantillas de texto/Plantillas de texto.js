'use strict'

var nombre = prompt('Nombre')
var apellido = prompt('Apellido')

var texto = ' Mi nombre es: '+nombre+'<br/> Mi apellido es: '+apellido
document.write(texto)

var texto=`
    <h1>Soy yo</h1>
    <h2>Me llamo: ${nombre}</h2>
    <h2>Mi apellido es: ${apellido}</h2>
`

document.write(texto)