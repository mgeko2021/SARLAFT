

/**
 * 
 * 
* Función que se ejecuta al arrastrar el elemento. 
**/
function start332(e) {
    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
    e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
    e.target.style.opacity = '0.4'; 
  }
  
  /**
  * Función que se ejecuta se termina de arrastrar el elemento. 
  **/
  function end33(e){
    e.target.style.opacity = ''; // Restaura la opacidad del elemento     
    e.dataTransfer.clearData("Data");     
  }
  
  /**
  * Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
  **/
  function enter33(e) {
    return true;
  }
  
  /**
  * Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
  * Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
  **/
  function over33(e) {
    if ((e.target.className == "contenedorPieza33") || (e.target.className == "contenedorPiezas33")){
      return false;
    } else{
        return true;
    }
  
  }

  /**
  * Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
  **/
  function drop33(e){
    let hijos = document.querySelectorAll(".contenedorPieza33 img")
    e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
    var elementoArrastrado = e.dataTransfer.getData("Text");
    // if(hijos.length < 4){
    e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
    // }

    comprobarPuzzle33();

  }

function drop331(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza133"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}

function drop332(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza233"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}
function drop333(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza333"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}
function drop334(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza433"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}
function drop335(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza533"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}


  
  function comprobarPuzzle33(){
      let puntos6 = document.getElementById("puntos33ID")
      let nopuntos6 = document.getElementById("noPuntos33ID")


    let hijos = document.querySelectorAll(".contenedorPieza33 img")
    if(hijos.length == 4){
        
        if((document.getElementById('pieza133').parentNode.id=='uno33') &&
        (document.getElementById('pieza233').parentNode.id=='dos33') &&
        (document.getElementById('pieza333').parentNode.id=='tres33') &&
        (document.getElementById('pieza433').parentNode.id=='cuatro33')
        
        ){  

            let uno33 = document.getElementById("uno33")
            let contenedorPieza133 = document.getElementById('contenedorPieza133')
            contenedorPieza133.style.background = "#5fff2f"
            uno33.style.background = "#5fff2f"
            document.getElementById("pieza133").style.display = "none"

            let dos33 = document.getElementById("dos33")
            let contenedorPieza233 = document.getElementById('contenedorPieza233')
            contenedorPieza233.style.background = "#5fff2f"
            dos33.style.background = "#5fff2f"
            document.getElementById("pieza233").style.display = "none"

            let tres33 = document.getElementById("tres33")
            let contenedorPieza333 = document.getElementById('contenedorPieza333')
            contenedorPieza333.style.background = "#5fff2f"
            tres33.style.background = "#5fff2f"
            document.getElementById("pieza333").style.display = "none"

            let cuatro33 = document.getElementById("cuatro33")
            let contenedorPieza433 = document.getElementById('contenedorPieza433')
            contenedorPieza433.style.background = "#5fff2f"
            cuatro33.style.background = "#5fff2f"
            document.getElementById("pieza433").style.display = "none"

            localStorage.setItem("puntuacion33", 10);
            puntos6.classList.remove("emergentesreturn");
            puntos6.classList.add("emergentes"); 
            setTimeout(function(){ 
                puntos6.classList.remove("emergentes");
                puntos6.classList.add("emergentesreturn");

          
                // terminadoJuego = true
            }, 4000);

            // setTimeout(() => {
            //     document.getElementById(`proof6`).classList.remove('beforeUP');
            //     document.getElementById(`proof8`).classList.remove('beforeUP');
            //     document.getElementById(`proof8`).classList.remove('before2UP');
            //     document.getElementById(`proof6`).classList.remove('next2UP');
            //     // document.getElementById(proof6).style.left = "0%"
            //     document.getElementById(`proof6`).classList.add('nextUP');
            //     document.getElementById(`proof8`).classList.add('next2UP');

            //     document.getElementById(`paginaproof8`).style.display ="block"

    
            // }, 6000);

        
        } else {

            setTimeout(() => {

                if (document.getElementById('pieza133').parentNode.id=='uno33') {
                    let uno33 = document.getElementById("uno33")
                    let contenedorPieza133 = document.getElementById('contenedorPieza133')
                    contenedorPieza133.style.background = "#5fff2f"
                    uno33.style.background = "#5fff2f"
                    document.getElementById("pieza133").style.display = "none"
                } else {
                    document.getElementById("contenedorPieza133").appendChild(document.getElementById("pieza133"));
                    uno33.style.background = "#ea0043"
                }
    
                if (document.getElementById('pieza233').parentNode.id=='dos33') {
                    let dos33 = document.getElementById("dos33")
                    let contenedorPieza233 = document.getElementById('contenedorPieza233')
                    contenedorPieza233.style.background = "#5fff2f"
                    dos33.style.background = "#5fff2f"
                    document.getElementById("pieza233").style.display = "none"
                } else {
                    document.getElementById("contenedorPieza233").appendChild(document.getElementById("pieza233"));
                    dos33.style.background = "#ea0043"
                }
    
                if (document.getElementById('pieza333').parentNode.id=='tres33') {
                    let tres33 = document.getElementById("tres33")
                    let contenedorPieza333 = document.getElementById('contenedorPieza333')
                    contenedorPieza333.style.background = "#5fff2f"
                    tres33.style.background = "#5fff2f"
                    document.getElementById("pieza333").style.display = "none"

                } else {
                    document.getElementById("contenedorPieza333").appendChild(document.getElementById("pieza333"));
                    tres33.style.background = "#ea0043"
                }
    
                if (document.getElementById('pieza433').parentNode.id=='cuatro33') {
                    let cuatro33 = document.getElementById("cuatro33")
                    let contenedorPieza433 = document.getElementById('contenedorPieza433')
                    contenedorPieza433.style.background = "#5fff2f"
                    cuatro33.style.background = "#5fff2f"
                    document.getElementById("pieza433").style.display = "none"
                } else {
                    document.getElementById("contenedorPieza433").appendChild(document.getElementById("pieza433"));
                    cuatro33.style.background = "#ea0043"
                }
    
                // if (document.getElementById('pieza533').parentNode.id=='cuatro33') {
                    let pieza533 = document.getElementById("pieza533")
                //     pieza433.style.background = "linear-gradient(90deg, rgba(103,224,16,1) 0%, rgba(9,121,18,1) 43%, rgba(0,66,18,1) 100%)"
                // } else {
                    document.getElementById("contenedorPieza533").appendChild(document.getElementById("pieza533"));

                    // pieza433.style.background = "linear-gradient(90deg, rgba(143,49,49,1) 0%, rgba(75,2,33,1) 100%)"
                // }
    
                
            }, 2000);

            nopuntos6.classList.remove("emergentesreturn");
            nopuntos6.classList.add("emergentes"); 
            setTimeout(function(){ 
                nopuntos6.classList.remove("emergentes");
                nopuntos6.classList.add("emergentesreturn");
                // paginaproof26.style.display = "block" 
                // terminadoJuego = true
            }, 4000);
            }
    }
  }
  