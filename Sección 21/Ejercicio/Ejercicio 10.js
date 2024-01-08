'use strict'

var formulario = document.querySelector('#formpeliculas')
formulario.addEventListener('submit', function(){
    var titulo = document.querySelector('#addpelicula');

    localStorage.setItem(titulo.value, titulo.value);
});

var ul = document.querySelector('#peliculas-list')
for(var i in localStorage){
    console.log(localStorage[i]);
    var li = document.createElement('li');
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement('li');
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formulariob = document.querySelector('#FormBorrarPeliculas')
formulariob.addEventListener('submit', function(){
    var titulo = document.querySelector('#BorrarPelicula');

    localStorage.removeItem(titulo.value, titulo.value);
});