//usando Template

document.getElementById("notificacion")  //asi se llama el template
document.getElementById("notificacion").content //devuelve el contenido que es el document-fragment
//DocumentFragment(2)[dispatchEvent.error,#text]
document.importNode
document.getElementById("notificatio").children  //da longitud cero x que es un template
document.getElementById("notification").content
document.getElementById("notification").content[1] //no devuelve un array
let tpl =document.getElementById("notificacion") 
document.importNode(tpl.content)  //clona los nodos
//pero le debemos decir true
ocument.importNode(tpl.content,true)  //ahora si nos devuelve
//un nuevo document fragment que es un clon y ya estaria listo
//para incorporar en el DOM mediante un appendChild
//x ejemplo tengo un <div id="target">
//=> puedo importarlo aqui
let target = document.getElementById("target");
let imported = document.importNode(tpl.content,true);
target.appendChild(imported);

//esto incrustara en la pagina el template
//Ahora usaremos un button para activar y desactivar el 
//Template
document.getElementById("target").ownerDocument.head
document.getElementById("target").ownerDocument.title
document.querySelector(".error_icon");
document.getElementsByClassName("error");

document.getElementById("notification").content.children   //con esto devuelve los nodos y es iterable

document.getElementById("notification").content.children[0].ownerDocument 
//aqui por ejemplo el body vale null y es un owner distinto del anterior
//esto forma parte de un arbol de nodos distinto al document
//con shadow dom se pueden crear distintos arboles y tenerlo x alli sueltos
//cuando usamos un <iframe> estamos haciento otra pagina que es casi lo mismo como el anterior







