Function cambiarContenido(){
    var div=document.getElementById("myDiv");
    //cmodificando contenido
    div.innerHTML="<h1>Nuevo Titulo hecho con innerHTML </h1><p>Contenido nuevo con innerHTML</p>";
}
//CAMBIAR CON CREATETEXTNODE
function cambiarContenido2(){
    var div=document.getElementById("miDiv");

    //creamos nuevo nodo de texto
    var nuevoTexto=document.createTextNode("Titulo Nuevo 2 hecho con createTextNode");
    

    //agregamos el nodo div
    div.appendChild(nuevoTexto);

    //creamos otro nodo de texto
    var nuevoParrafo=document.createElement("p");
    nuevoParrafo.textContent="Contenido nuevo con createTextNode";

    //agrega el parrafo al div
    div.appendChild(nuevoParrafo);
}