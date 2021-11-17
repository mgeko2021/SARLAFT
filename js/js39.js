// los tiro al blanco
const target139= document.getElementById("proceso3") 
const target239 = document.getElementById("proceso2")
const target339 = document.getElementById("proceso1")  

//errores
// const error139 = document.getElementById("error1")
// const error339 = document.getElementById("error3")

//ya pincho
let correcto39 = false
let incorrecto139 = false
let incorrecto339 = false



var succes = new Audio();
succes.src="./sonidos/Success.mp3";

var errorAlert = new Audio();
errorAlert.src="./sonidos/errorAlert.mp3";


//correcta emergentes 
const emergentePuntos1039 = document.getElementById("emergentePuntos1039")

// incorrecto emergente
const emergentenoAcertoPuntos1039 = document.getElementById("emergentenoAcertoPuntos1039")


//mostrar el recuadro 
const paginaproof39Btn = document.getElementById("paginaproof39")



const correcta39 =() =>{
    succes.play()
    correcto39 = true
    if(correcto39 && !incorrecto139 && !incorrecto339){
        emergentePuntos1039.classList.add("emergentes2")
        setTimeout(function(){ 
            paginaproof39Btn.style.display = "block" 
            emergentePuntos1039.classList.remove("emergentes2");
            emergentePuntos1039.classList.add("emergentes"); }, 4000);
            target239.style.background = "green"
            target239.style.color = "white"
        localStorage.setItem("puntuacion39", 10);
    }
    
}


target239.addEventListener('click',correcta39)

const incorrecta391 =() =>{
    errorAlert.play()
    incorrecto139 = true
    if(incorrecto139 && !correcto39 && !incorrecto339) {
        emergentenoAcertoPuntos1039.classList.add("emergentes2")
        target239.style.background = "green"
        target239.style.color = "white"

        setTimeout(function(){ 
            paginaproof39Btn.style.display = "block" 
            emergentenoAcertoPuntos1039.classList.remove("emergentes2");
            emergentenoAcertoPuntos1039.classList.add("emergentes"); }, 3000);
            localStorage.setItem("puntuacion39", 0);

        target139.style.background = "grey"
    }
}

target139.addEventListener('click', incorrecta391)



const incorrecta393 =() =>{
    errorAlert.play()
    incorrecto339 = true
    if(incorrecto339 && !correcto39 && !incorrecto139) {
        emergentenoAcertoPuntos1039.classList.add("emergentes392")
        target239.style.background = "green"
        target239.style.color = "white"

        setTimeout(function(){ 
            paginaproof39Btn.style.display = "block" 
            emergentenoAcertoPuntos1039.classList.remove("emergentes392");
            emergentenoAcertoPuntos1039.classList.add("emergentes39"); }, 4000);
            localStorage.setItem("puntuacion39", 0);

        target339.style.background = "grey"
    }
  
}


target339.addEventListener('click', incorrecta393)