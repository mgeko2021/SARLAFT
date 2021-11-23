//  let answer1 = document.querySelector('input[name="proof21_1"]:checked')

let termino = false

let answer21 = () =>{

    // -------- mergentes--------
    let puntos21 = document.getElementById("puntos21ID")
    let nopuntos21 = document.getElementById("noPuntos21ID")

        
    let answers = document.querySelectorAll('.answer')
    let answersTrue1 = document.querySelectorAll('.answerTrue1')
    let answersTrue2 = document.querySelectorAll('.answerTrue2')
    let answersTrue3 = document.querySelectorAll('.answerTrue3')
    let answersFalse = document.querySelectorAll('.answerFalse')
    let answerLabel = document.querySelectorAll('.answerLabel')


    if(document.querySelector('input[name="proof21_1"]:checked')
    && document.querySelector('input[name="proof21_2"]:checked')
    && document.querySelector('input[name="proof21_3"]:checked')
    && !termino
    ){

        console.log("ya click all")
        if(document.querySelector('input[name="proof21_1"]:checked').value == "FALSO"
        && document.querySelector('input[name="proof21_2"]:checked').value == "VERDADERO"
        && document.querySelector('input[name="proof21_3"]:checked').value  == "VERDADERO"
        ){
            console.log("todas estan buenas")
            termino = true

            for (let i = 0; i < answers.length; i++) {
                answers[i].disabled=true;
                
            }

            setTimeout(() => {
                answersTrue1.style.background = "#8fed8f"
                answersTrue2.style.background = "#8fed8f"
                answersTrue3.style.background = "#8fed8f"

            }, 1500);

            localStorage.setItem("puntuacion26", 10);
            puntos21.classList.remove("emergentesreturn");
            puntos21.classList.add("emergentes"); 
            setTimeout(function(){ 
                puntos21.classList.remove("emergentes");
                puntos21.classList.add("emergentesreturn");
                document.getElementById(`paginaproof21`).style.display ="block"
          
                // terminadoJuego = true
            }, 4000);

        } else {

            setTimeout(() => {
                if(document.querySelector('input[name="proof21_1"]:checked').value == "FALSO"){
                    document.querySelector('.answerTrue1').style.background = "#8fed8f"
                    let color1  = document.querySelectorAll('input[name="proof21_1"]')
                    console.log(color1)
                    if(color1){
                        for (let i = 0; i < color1.length; i++) {
                            color1[i].disabled = true;
                            
                        }
    
                    }
                }

                if(document.querySelector('input[name="proof21_2"]:checked').value == "VERDADERO"){
                    document.querySelector('.answerTrue2').style.background = "#8fed8f"
                    if(color2){
                        let color2  = document.querySelectorAll('input[name="proof21_2"]')
                        for (let i = 0; i < color2.length; i++) {
                            color2[i].disabled = true;
    
                    }
                        
                    }
                }

                if(document.querySelector('input[name="proof21_3"]:checked').value == "VERDADERO"){
                    document.querySelector('.answerTrue3').style.background = "#8fed8f"
                    let color3  = document.querySelectorAll('input[name="proof21_3"]')
                    if(color3){
                        for (let i = 0; i < color3.length; i++) {
                            color3[i].disabled = true;
                            
                        }
    
                    }

                }
                    
            }, 1500);

            nopuntos21.classList.remove("emergentesreturn");
            nopuntos21.classList.add("emergentes"); 
            setTimeout(function(){ 
                nopuntos21.classList.remove("emergentes");
                nopuntos21.classList.add("emergentesreturn");
                // paginaproof26.style.display = "block" 
                // terminadoJuego = true
            }, 4000);
            }

    }
    

}


// proof21.addEventListener("mouseover", answer21)
proof21.addEventListener("click", answer21)

