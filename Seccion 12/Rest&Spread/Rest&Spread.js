'use strict'

function listadoFrutas(fruta1, fruta2, ...rest_frutas){
    console.log('Fruta 1: ', fruta1)
    console.log('Fruta 2: ', fruta2)
    console.log(rest_frutas)
}

listadoFrutas('Naranja','Manzana','Sandia', 'Pera', 'Melon', 'Coco')


var frutas = ['Naranja','Manzana']
//...frutas es un spread, pasa los valores correspondientes y no los toma como array
listadoFrutas(...frutas,'Sandia', 'Pera', 'Melon', 'Coco')