'use strict'

do{
    var num1 = prompt ('Introduce el primer numero', 0) // Por defecto aparece en este caso 0
    var num2 = prompt ('Introduce el segundo numero', 0) // Por defecto aparece en este caso 0
}while (isNaN(num1) || isNaN(num2))

if  (num1>=num2){
    if (num1>num2){
        console.log("Numero 1 es mayor que numero 2")
    }else{
        console.log("Los dos numeros son iguales")
    }
}else if(num2>num1){
    console.log("Numero 2 es mayor que numero 1")
}
