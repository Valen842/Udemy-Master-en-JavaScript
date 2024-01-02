'use strict'

/*
muestre divisores de un numero introducidos en prompts
*/

var num1=parseInt(prompt('Mete el numero', 0))

for(var i = 0 ; i<=num1 ; i++){
    if(num1%i==0){
        console.log("Un divisor es: "+i)
    }
}