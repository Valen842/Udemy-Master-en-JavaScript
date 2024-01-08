"use strict";

window.addEventListener("load", () => {
    console.log("DOM cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none"; // Fix the typo here, it should be "display"

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission to keep the changes visible
        
        var nombre = document.querySelector("#campo_nombre").value;
        var apellido = document.querySelector("#campo_apellido").value;
        var edad = parseInt(document.querySelector("#campo_edad").value);

        if (nombre.trim() == '' || nombre.trim().length == 0){
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        } else {
            document.querySelector("#error_nombre").innerHTML = ""; // Borrar el mensaje de error si es válido
        }

        if(apellido.trim() == '' || apellido.trim().length == 0){
            document.querySelector("#error_apellido").innerHTML = "El apellido no es valido";
            return false;
        } else {
            document.querySelector("#error_apellido").innerHTML = ""; // Borrar el mensaje de error si es válido
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            document.querySelector("#error_edad").innerHTML = "La edad no es valida";
            return false;
        } else {
            document.querySelector("#error_edad").innerHTML = ""; // Borrar el mensaje de error si es válido
        }


        box_dashed.style.display = "block"; // Show the dashed box

        var datos_usuario = [nombre, apellido, edad];


        /*
        PARA ESTA RESOLUCION TUVE QUE AGREGAR LO SIGUIENTE EN EL DOCUMENTO HTML
                <p id="p_nombre">
                    Nombre: <span></span>
                </p>
                <p id="p_apellido">
                    Apellido: <span></span>
                </p><p id="p_edad">
                    Edad: <span></span>
                </p>
        */
        var p_nombre = document.querySelector("#p_nombre span")
        var p_apellido = document.querySelector("#p_apellido span")
        var p_edad = document.querySelector("#p_edad span")

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;

        /*
        EN ESTE NO HACE FALTA LA UTILIZACION DE AGREGADOS EN EL DOCUMENTO HTML
        datos_usuario.forEach(dato => {
            var parrafo = document.createElement("p");
            parrafo.textContent = dato;
            box_dashed.appendChild(parrafo);
        });
        */
    });
});
