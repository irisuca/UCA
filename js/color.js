function cambiarContenido(){
    var div=document.getElementById("miDiv");

    //creamos nuevo nodo de texto
    var nuevoTexto=document.createTextNode("Gracias por tu participación");
    

    //agregamos el nodo div
    div.appendChild(nuevoTexto);

    //creamos otro nodo de texto
    var nuevoParrafo=document.createElement("p");
    nuevoParrafo.textContent="Contenido nuevo con createTextNode";

    //agrega el parrafo al div
    div.appendChild(nuevoParrafo);