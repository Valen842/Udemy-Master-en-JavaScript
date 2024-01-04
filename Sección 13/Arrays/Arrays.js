'use strict'

//Como recorrer un array sin necesidad de un for utilizando el metodo .forEach
var lenguajes = ['Python', 'JavaScript', 'Sql', 'C', 'C#']

document.write("<ul>")
lenguajes.forEach((elemento, indice)=> {
    document.write("<li>"+indice+' - '+elemento+"</li>")
});
document.write("</ul>")

//Arrays multidimensionales

var categorias = ['Accion', 'Terror', 'Comedia']
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino']

var cine = [categorias, peliculas]

console.log(cine)

console.log(cine[0][1])

//Como agregar elementos a un array
peliculas.push('Batman')
console.log(peliculas)

//Elimina el ultimo elemento del array
peliculas.pop()

//para eliminar un elemento del array especifico
var indice = peliculas.indexOf('Gran Torino')
if(indice > -1){
    peliculas.splice(indice, 1)
}
console.log(peliculas)

//Para convertir un array a texto
var peliculas_string = peliculas.join()
console.log(peliculas_string)

//convertir un string en un array
var cadena = 'texto1, texto2, texto3'
var cadena_array = cadena.split(', ')
console.log(cadena_array)

//Ordenar Arrays
peliculas.sort() //por defecto esta en orden alfabetico
peliculas.reverse() //invertir el orden del array original

//Otra forma de recorrer arrays FOR IN
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>")
}

//Busqueda en arrays
var busqueda = lenguajes.find(lenguaje=>
    lenguaje == 'JavaScript'
)
console.log(busqueda)

var busqueda = lenguajes.findIndex(lenguaje=>lenguaje=='JavaScript')
console.log(busqueda)

/*
Busqueda en arrays de numeros
some sirve para ver si alguno de los elementos cumple con la condicion
*/
var precios = [10,20,50,80,12]
var busqueda = precios.some(precio=> 
    precio>10
)
console.log(busqueda)