'use strict'
// BROWSER OBJECT MODEL
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}
//redirige cambiando la pagina en la que estamos
function redirect(url){
    window.location.href = url;
}
//abre una ventana extra
function abrirVentana(url, width='', height=''){
    window.open(url)
}
getBom();
//Para saber las especificaciones de la computadora del usuario
console.log(screen.height);
console.log(screen.width);
//Para saber la url del usuario
console.log(window.location.href);
