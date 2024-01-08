'use strict'
/*
Eventos
Un evento es una funcion que se ejecuta cuando sucede algo
*/

/*
Evento Load - sirve para cuando se termine de cargar el archivo html se cargue el archivo javascript
haciendo de esta forma que no sea necesario poner el link de js en html al fondo del archivo y puede
volver al head
*/
window.addEventListener('load', ()=>{

    //Eventos del ratón
    var boton = document.querySelector('#boton');

    function cambiarColor(){
        if(boton.style.background == 'green'){
            boton.style.background = 'red';
        }else{
            boton.style.background = 'green';
        }
    }

    // Conviene este metodo en vez del onclick="cambiarColor();" ya que aquí no ensucio el codigo html
    //Evento click
    boton.addEventListener('click', function(){
        cambiarColor();
    });
    //Evento mouse over
    boton.addEventListener('mouseover', function(){
        boton.style.background = 'yellow';
    })
    //Evento mouse out - es complementario al mouse over
    boton.addEventListener('mouseout', function(){
        boton.style.background = '#ccc';
    })

    //Eventos de focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log('Estas dentro del input')
    })

    //Eventos de blur - funciona igual que el focus nada mas que es cuando no hacemos focus a ningun lugar
    input.addEventListener('blur', function(){
        console.log('Estas fuera del input')
    })

    //Eventos de keydown
    input.addEventListener('keydown', function(event){
        console.log('Has pulsado una tecla '+ String.fromCharCode(event.keyCode))
    })

    //Eventos de keypress
    input.addEventListener('keypress', function(){
        console.log('Tecla presionada '+ String.fromCharCode(event.keyCode))
    })
    //Eventos de keyup
    input.addEventListener('keyup', function(){
        console.log('Tecla soltada '+ String.fromCharCode(event.keyCode))
    })
})