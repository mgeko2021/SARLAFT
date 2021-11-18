/**
* Función que se ejecuta al arrastrar el elemento. 
**/
function start2(e) {
    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
    e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
    e.target.style.opacity = '0.4'; 
  }
  
  /**
  * Función que se ejecuta se termina de arrastrar el elemento. 
  **/
  function end(e){
    e.target.style.opacity = ''; // Restaura la opacidad del elemento     
    e.dataTransfer.clearData("Data");     
  }
  
  /**
  * Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
  **/
  function enter(e) {
    return true;
  }
  
  /**
  * Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
  * Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
  **/
  function over(e) {
    if ((e.target.className == "contenedorPieza") || (e.target.className == "contenedorPiezas")){
      return false;
    } else{
        return true;
    }
  
  }

  /**
  * Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
  **/
  function drop(e){
    let hijos = document.querySelectorAll(".contenedorPieza img")
    e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
    var elementoArrastrado = e.dataTransfer.getData("Text");
    // if(hijos.length < 4){
    e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
    // }

    comprobarPuzzle();

  }

function drop1(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza1"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}

function drop2(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza2"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}
function drop3(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza3"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}
function drop4(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza4"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}

  
  function comprobarPuzzle(){
    let hijos = document.querySelectorAll(".contenedorPieza img")
    if(hijos.length == 4){
        
        if((document.getElementById('pieza1').parentNode.id=='uno') &&
        (document.getElementById('pieza2').parentNode.id=='dos') &&
        (document.getElementById('pieza3').parentNode.id=='tres') &&
        (document.getElementById('pieza4').parentNode.id=='cuatro')
        
        ){
            localStorage.setItem("puntuacion6", 10);
            console.log("gano")
            // setTimeout(function(){ 
            //     puntos26.classList.remove("emergentes226");
            //     puntos26.classList.add("emergentes26"); 
            //     terminadoJuego = true
            // }, 4000);
        
        } else {
            localStorage.setItem("puntuacion26", 0);
            console.log("perdio")

        // setTimeout(function(){ 
        //     errorVelocidadID.classList.remove("emergentes2");
        //     errorVelocidadID.classList.add("emergentes");
        //     paginaproof26.style.display = "block" 
        //     terminadoJuego = true
        //    }, 4000);
        }
    }
  }
  