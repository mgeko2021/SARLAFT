
let parentezco = document.getElementById("parentezco")
let btn26 = document.getElementById("btn26")


let transition26uno = () =>{
    let consanguinidad26 = document.getElementById("consanguinidad26")
    consanguinidad26.classList.add("next2")
}

parentezco.addEventListener("click", transition26uno)

let transition26dos = () =>{
    let consanguinidad26 = document.getElementById("consanguinidad26")
    let consanguinidad26dos = document.getElementById("consanguinidad26dos")

    consanguinidad26.classList.remove("next2")
    consanguinidad26.classList.add("next")
    consanguinidad26dos.classList.add("next2")
}

btn26.addEventListener("click", transition26dos)
