'use strict'

/*
Calculadora
.pida dos numeros por pantalla
.si metemos uno mal que nos lo vuelva a pedir
.en el cuerpo de la pagina, en una alerta y por consola el resultado de sumar,
restar, multiplicar y dividir esas dos cifras
*/

var num1 = parseInt(prompt("Introduce el primer numero", 0))
var num2 = parseInt(prompt("Introduce el segundo numero", 0))

while(num1<0||num2<0||isNaN(num1)||isNaN(num2)){
    num1 = parseInt(prompt("Introduce el primer numero", 0))
    num2 = parseInt(prompt("Introduce el segundo numero", 0))
}

var resultado = 'La suma es: '+(num1+num2)+"\n"+
                "La resta es: "+(num1-num2)+"\n"+
                "La multiplicacion es: "+(num1*num2)+"\n"+
                "La division es: "+(num1/num2)+"\n"


alert(resultado)
document.write(resultado)