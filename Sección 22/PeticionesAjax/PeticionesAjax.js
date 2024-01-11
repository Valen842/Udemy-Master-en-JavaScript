"use strict";

var div_usuarios = document.getElementById("usuarios");
var div_user2 = document.getElementById("SegundoUsuario");
var div_yo = document.getElementById("yo");
var loading = document.getElementsByClassName("loading");

// Itera sobre todos los elementos con la clase 'loading' para ocultarlos
for (var i = 0; i < loading.length; i++) {
    loading[i].style.display = "block"; // Muestra inicialmente los elementos de carga
}
Promise.all([getUsuarios(), getUsuarioDos()])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
        listadoUsuarios(data[0]);
        

        for (var i = 0; i < loading.length; i++) {
            loading[i].style.display = "none";
        }

        getInfo().then(yoInfo => {
            // Aquí puedes manejar yoInfo como lo necesites, por ejemplo, agregarlo a un elemento HTML
            console.log('hola')
            div_yo.innerHTML = yoInfo;
        })
        
        segundoUsuario(data[1]);
    })

        

function getUsuarios() {
        try {
        return fetch("https://jsonplaceholder.typicode.com/users");
            
        } catch (error) {
        console.log(error+'aaa');
            
        }
    }
    
function getUsuarioDos() {
    try {
        return fetch("https://jsonplaceholder.typicode.com/users/2");
            
        } catch (error) {
        console.log(error+'aaa');
            
        }
    }

    
function listadoUsuarios(usuarios) {
    console.log(usuarios);
    //loading.setAttribute(hidden, true);
    usuarios.forEach((user, i) => {
        let nombre = document.createElement("h2");
        nombre.innerHTML = i + " - " + user.name + " " + user.username;
        div_usuarios.appendChild(nombre);
    });
}

function segundoUsuario(user) {
    let nombre = document.createElement("h2");
    nombre.innerHTML = user.id + " - " + user.name + " " + user.username;
    div_user2.appendChild(nombre);
}
    function getInfo() {
        var yo = {
            nombre: 'Valentino',
            apellido: 'Bisbano',
            username: 'vbisbano'
    };

    return new Promise ((resolve, reject) => {
        var yo_string = '';
        setTimeout(function(){
            yo_string = JSON.stringify(yo);
            console.log(yo.nombre)
            var yoInfo = `Nombre: ${yo.nombre}<br>Apellido: ${yo.apellido}<br>Username: ${yo.username}`;
            if (typeof yoInfo != 'string' || yoInfo === '') {
                reject('Error');
            }
            console.log(yoInfo)
            resolve(yoInfo);
        });
    });
}
