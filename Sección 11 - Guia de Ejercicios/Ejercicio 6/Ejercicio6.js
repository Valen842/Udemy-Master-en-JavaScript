'use strict'

/*
Que nos diga si un numero es par o impar
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/

var num1 = parseInt(prompt('Introduce un numero', 0))

while(isNaN(num1)){
    num1 = parseInt(prompt('Introduce un numero', 0))
}

if(num1%2==0){
    console.log('Es par')
}
else{
    console.log('Es impar')
}