let start = document.getElementById("next")
let palma1 = document.getElementById("palma1") 
let palma2 = document.getElementById("palma2") 
let palma3 = document.getElementById("palma3") 
let medio = document.getElementById("medio") 
let fondo1 = document.getElementById("fondo1") 


let animar = false

let proof1Paralax = () =>{
    palma1.classList.remove("palma1Out")
    palma2.classList.remove("palma2Out")
    palma3.classList.remove("palma3Out")
    medio.classList.remove("medioOut")
    fondo1.classList.remove("fondo1Out")

    palma1.classList.add("palma1")
    palma2.classList.add("palma2")
    palma3.classList.add("palma3")
    medio.classList.add("medio")
    fondo1.classList.add("fondo1")
}


start.addEventListener("mouseover",proof1Paralax)

let proof1ParalaxOut = () =>{

    palma1.classList.remove("palma1")
    palma2.classList.remove("palma2")
    palma3.classList.remove("palma3")
    medio.classList.remove("medio")
    fondo1.classList.remove("fondo1")

    palma1.classList.add("palma1Out")
    palma2.classList.add("palma2Out")
    palma3.classList.add("palma3Out")
    medio.classList.add("medioOut")
    fondo1.classList.add("fondo1Out")

}


start.addEventListener("mouseout",proof1ParalaxOut)
