/**
 * 
 * 
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

console.log()

  
  function comprobarPuzzle(){
      let puntos6 = document.getElementById("puntos6ID")
      let nopuntos6 = document.getElementById("noPuntos6ID")

      let gray1 = document.getElementById("gameHuntTextMoveGrayUno")
      let gray2 = document.getElementById("gameHuntTextMoveGrayDos")
      let gray3 = document.getElementById("gameHuntTextMoveGrayTres")
      let gray4 = document.getElementById("gameHuntTextMoveGrayCuatro")

      let border = document.querySelectorAll(".contenedorPieza")

    let hijos = document.querySelectorAll(".contenedorPieza img")
    if(hijos.length == 4){
        
        if((document.getElementById('pieza1').parentNode.id =='tres') &&
        (document.getElementById('pieza2').parentNode.id =='dos') &&
        (document.getElementById('pieza3').parentNode.id =='uno') &&
        (document.getElementById('pieza4').parentNode.id =='cuatro')
        
        ){  
            setTimeout(() => {

                for (let i = 0; i < border.length; i++) {
                    border[i].style.border = "none"
                    
                }
                gray1.style.background = "linear-gradient(90deg, rgba(103,224,16,1) 0%, rgba(9,121,18,1) 43%, rgba(0,66,18,1) 100%)"
                gray2.style.background = "linear-gradient(90deg, rgba(103,224,16,1) 0%, rgba(9,121,18,1) 43%, rgba(0,66,18,1) 100%)"
                gray3.style.background = "linear-gradient(90deg, rgba(103,224,16,1) 0%, rgba(9,121,18,1) 43%, rgba(0,66,18,1) 100%)"
                gray4.style.background = "linear-gradient(90deg, rgba(103,224,16,1) 0%, rgba(9,121,18,1) 43%, rgba(0,66,18,1) 100%)"
            }, 2000);
            
            localStorage.setItem("puntuacion6", 10);
            puntos6.classList.remove("emergentesreturn");
            puntos6.classList.add("emergentes"); 
            setTimeout(function(){ 
                puntos6.classList.remove("emergentes");
                puntos6.classList.add("emergentesreturn");

          
                // terminadoJuego = true
            }, 4000);

            setTimeout(() => {
                document.getElementById(`proof6`).classList.remove('beforeUP');
                document.getElementById(`proof8`).classList.remove('beforeUP');
                document.getElementById(`proof8`).classList.remove('before2UP');
                document.getElementById(`proof6`).classList.remove('next2UP');
                // document.getElementById(proof6).style.left = "0%"
                document.getElementById(`proof6`).classList.add('nextUP');
                document.getElementById(`proof8`).classList.add('next2UP');

                document.getElementById(`paginaproof8`).style.display ="block"

    
            }, 6000);

        
        } else {

            setTimeout(() => {

                if (document.getElementById('pieza1').parentNode.id =='tres') {
                    console.log("es tres")
                    gray3.style.background = "linear-gradient(90deg, rgba(103,224,16,1) 0%, rgba(9,121,18,1) 43%, rgba(0,66,18,1) 100%)"
                } else {
                    console.log(" no es tres")
                    document.getElementById("contenedorPieza1").appendChild(document.getElementById("pieza1"));
                    gray3.style.background = "linear-gradient(90deg, rgba(143,49,49,1) 0%, rgba(75,2,33,1) 100%)"
                }
    
                if (document.getElementById('pieza2').parentNode.id =='dos') {
                    gray2.style.background = "linear-gradient(90deg, rgba(103,224,16,1) 0%, rgba(9,121,18,1) 43%, rgba(0,66,18,1) 100%)"
                } else {
                    document.getElementById("contenedorPieza2").appendChild(document.getElementById("pieza2"));
                    gray2.style.background = "linear-gradient(90deg, rgba(143,49,49,1) 0%, rgba(75,2,33,1) 100%)"
                }
    
                if (document.getElementById('pieza3').parentNode.id =='uno') {
                    gray1.style.background = "linear-gradient(90deg, rgba(103,224,16,1) 0%, rgba(9,121,18,1) 43%, rgba(0,66,18,1) 100%)"
                } else {
                    document.getElementById("contenedorPieza3").appendChild(document.getElementById("pieza3"));
                    gray1.style.background = "linear-gradient(90deg, rgba(143,49,49,1) 0%, rgba(75,2,33,1) 100%)"
                }
    
                if (document.getElementById('pieza4').parentNode.id =='cuatro') {
                    gray4.style.background = "linear-gradient(90deg, rgba(103,224,16,1) 0%, rgba(9,121,18,1) 43%, rgba(0,66,18,1) 100%)"
                } else {
                    document.getElementById("contenedorPieza4").appendChild(document.getElementById("pieza4"));
                    gray4.style.background = "linear-gradient(90deg, rgba(143,49,49,1) 0%, rgba(75,2,33,1) 100%)"
                }
    
                
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
  