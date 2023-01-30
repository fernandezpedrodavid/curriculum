let menuVisible = false;
//función que oculta/muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible= false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible= true;
    }
}
function seleccionar(){
    // ocultar el menú despues de seleccionar una opción
    document.getElementById("nav").className = "";
    menuVisible = false;
}
//boton de contacto
document.getElementById("bot-contacto").addEventListener("click", function() {
    document.getElementById("contacto")
});