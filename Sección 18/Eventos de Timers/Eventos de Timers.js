"use strict"

//Evento Load
window.addEventListener("load", ()=>{
    //Timers
    function intervalo(){
        // setInterval sirve para loops de cierta cantidad de tiempo
        // setTimeout sirve para que despues del tiempo pedido se ejecute solo una vez
        var tiempo = setInterval(function(){
            console.log("Set interval ejecutado")
            var encabezado =document.querySelector("h1");
            if(encabezado.style.fontSize=="50px"){
                encabezado.style.fontSize = "20px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        }, 1000)

        return tiempo;
    }

    var tiempo = intervalo ();
    

    //Como frenar el bucle con un boton
    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    })
    //Como iniciar el bucle con un boton
    var start = document.querySelector("#start");

    start.addEventListener("click", function(){
        alert("Has iniciado el intervalo en bucle");
        intervalo();
    })
})