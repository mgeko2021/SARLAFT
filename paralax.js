let start = document.getElementById("next")
let palma1 = document.getElementById("palma1") 
let palma2 = document.getElementById("palma2") 
let palma3 = document.getElementById("palma3") 
let medio = document.getElementById("medio") 


let animar = false

let proof1Paralax = () =>{
    palma1.classList.add("palma1")
    palma2.classList.add("palma2")
    palma3.classList.add("palma3")
    medio.classList.add("medio")
}


start.addEventListener("mousemove",proof1Paralax)
