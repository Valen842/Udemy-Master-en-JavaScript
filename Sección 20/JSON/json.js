'use strict'

/*
JavaScript Object Notation
Arrays asociativos
*/

//OBJETO SIMIL STRUCT C
var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos',
};

//CAMBIO DE NOMBRE
pelicula.titulo = 'Superman Begins'

console.log(pelicula);

var peliculas = [
    {
        titulo: 'La verdad duele',
        year: 2016,
        pais: 'Francia'
    },
    pelicula
];

var index
var caja_peliculas = document.querySelector('#peliculas')
for (index in peliculas){
    var p = document.createElement('p');
    p.append(peliculas[index].titulo + ' - '+ peliculas[index].year);
    caja_peliculas.append(p)
}