// traer el dislay proof 26
const paginaproof26 = document.getElementById("paginaproof26")



//PUNTOS 10 26
const puntos26 = document.getElementById("puntos26ID")

//PUNTOS 10 ERROR
const errorVelocidadID = document.getElementById("errorVelocidadID")


// sonidos

var succes2 = new Audio();
succes2.src="./sonidos/Success.mp3";

var errorAlert2 = new Audio();
errorAlert2.src="./sonidos/errorAlert.mp3";


/**
* Función que se ejecuta al arrastrar el elemento. 
**/
function start(e) {
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
    if ((e.target.className == "contenedorPieza") || (e.target.id == "contenedorPiezas"))
      return false;
    else
    return true;
  }
      
  /**
  * Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
  **/
  function drop(e){
    let hijos = document.querySelectorAll("#uno div")
    e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(hijos.length < 6){
        e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
    }
    comprobarPuzzle();

  }

  let terminadoJuego = false
  
  function comprobarPuzzle(){

    let hijos = document.querySelectorAll("#uno div")
    if(hijos.length == 6 && !terminadoJuego){
      document.getElementById('pieza1').style.backgroundColor = "green" 
      document.getElementById('pieza3').style.backgroundColor = "green"
      document.getElementById('pieza5').style.backgroundColor = "green"
      document.getElementById('pieza6').style.backgroundColor = "green"
      document.getElementById('pieza8').style.backgroundColor = "green"
      document.getElementById('pieza9').style.backgroundColor = "green"
        
        if((document.getElementById('pieza1').parentNode.id=='uno') &&
        (document.getElementById('pieza3').parentNode.id=='uno') &&
        (document.getElementById('pieza5').parentNode.id=='uno') &&
        (document.getElementById('pieza6').parentNode.id=='uno') &&
        (document.getElementById('pieza8').parentNode.id=='uno') &&
        (document.getElementById('pieza9').parentNode.id=='uno') 
        
        ){
            succes2.play()
            puntos26.classList.add("emergentes226")
            localStorage.setItem("puntuacion26", 10);
            paginaproof26.style.display = "block" 
            setTimeout(function(){ 
                puntos26.classList.remove("emergentes226");
                puntos26.classList.add("emergentes26"); 
                terminadoJuego = true
            }, 4000);
        
        } else {
            errorVelocidadID.classList.add("emergentes2")
            localStorage.setItem("puntuacion26", 0);
            errorAlert2.play()

        setTimeout(function(){ 
            errorVelocidadID.classList.remove("emergentes2");
            errorVelocidadID.classList.add("emergentes");
            paginaproof26.style.display = "block" 
            terminadoJuego = true
           }, 4000);
        }
    }
  }
  
