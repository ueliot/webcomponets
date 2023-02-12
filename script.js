class SaludoBasicoElement extends HTMLElement {

    constructor(){
        super();
        this.saludo="Hola, como estas";
        this.pintado= false;
        
    }

    //evento basico
    connectedCallback(){
        this.pintado = true;
        console.log("montado en el documento")
        let bold = document.createElement("strong");
        bold.innerHTML = this.saludo
        this.appendChild(bold);
        
        
    }


    disconnectedCallback(){
        console.log("quitado del documento")
        this.pintado=false;
    }


    
    attributeChangedCallback(nombre,viejoValor,nuevoValor){
        console.log(`${nombre} ha cambiado de ${viejoValor} a este ${nuevoValor}`)
        if (nombre === "nombre"){
            this.saludo= `Hola, ${nuevoValor}`;
        }

        //Esto para hacer el repintado cuando cambia el atributo
        //auque esto no deberia hacerlo si no hay un componente montado
        //por que las consecuencias son inciertas
        if(this.pintado){
            this.innerHTML= this.saludo;
        }

        //Si yo cambio el valor dinamicamente a travez del 
        //inspector de atributos este callback se disparara
        //asumo que el componente se esta repintando
        //Es muy comun sobre todo si no estamos usando una libreria de terceros
        //para pintar los componentes, se dispare una funcion render de apoyo 
        //Que nos hagamos para cambiar el contenido
        //añadimos en nuestro codigo this.pintado=false; de este modo sabremos
        //cuando el componente esta pintado o no
    }

    
    //necesito especificar al navegador que atributos quiero observar
    //devuelve un array y dentro devemos colocar los atributos que
    //queremos observar
    static get observedAttributes(){
        return ['nombre'];
    }

    //primero se ejecutara el callback de los atributos antes de montarlo
    //de esta manera cuando se llame a conectedcallback todos los atributos 
    //ya estaran puestos


}

window.customElements.define("saludo-basico",SaludoBasicoElement)
