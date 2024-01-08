'use strict'

window.addEventListener('load', ()=>{

    var boton = document.querySelector('#boton');

    function cambiarColor(){
        if(boton.style.background == 'green'){
            boton.style.background = 'red';
        }else{
            boton.style.background = 'green';
        }
    }

    // THIS FUNCIONA PARA APUNTAR EXACTAMENTE AL ULTIMO EVENTO SUCEDIDO Y DEL QUE ESTAMOS DENTRO DE 
    boton.addEventListener('click', function(){
        cambiarColor();
        this.style.border = '10px solid black';
    });

    boton.addEventListener('mouseover', function(){
        boton.style.background = 'yellow';
    })
    
    boton.addEventListener('mouseout', function(){
        boton.style.background = '#ccc';
    })

    
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log('Estas dentro del input')
    })

    input.addEventListener('blur', function(){
        console.log('Estas fuera del input')
    })

    input.addEventListener('keydown', function(event){
        console.log('Has pulsado una tecla '+ String.fromCharCode(event.keyCode))
    })

    input.addEventListener('keypress', function(){
        console.log('Tecla presionada '+ String.fromCharCode(event.keyCode))
    })
    input.addEventListener('keyup', function(){
        console.log('Tecla soltada '+ String.fromCharCode(event.keyCode))
    })
})