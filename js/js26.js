
let parentezco = document.getElementById("parentezco")
let btn26 = document.getElementById("btn26")
let btn26dos = document.getElementById("btn26dos")

let grado = document.getElementById("grado")


let transition26uno = () =>{
    let consanguinidad26 = document.getElementById("consanguinidad26")
    consanguinidad26.classList.add("next2")
}

parentezco.addEventListener("click", transition26uno)

let transition26dos = () =>{
    grado.disabled = false
    grado.classList.add("grado")

    let consanguinidad26 = document.getElementById("consanguinidad26")
    let consanguinidad26dos = document.getElementById("consanguinidad26dos")

    consanguinidad26.classList.remove("next2")
    consanguinidad26.classList.add("next")
    consanguinidad26dos.classList.add("next2")
}

btn26.addEventListener("click", transition26dos)

let transition26NextDos = () =>{
    console.log("enrre 3")
    let consanguinidad26 = document.getElementById("consanguinidad26")
    let consanguinidad26dos = document.getElementById("consanguinidad26dos")

    consanguinidad26dos.classList.remove("next2")
    consanguinidad26dos.classList.add("next")

    
    // setTimeout(() => {
    //     document.getElementById(`proof6`).classList.remove('beforeUP');
    //     document.getElementById(`proof8`).classList.remove('beforeUP');
    //     document.getElementById(`proof8`).classList.remove('before2UP');
    //     document.getElementById(`proof6`).classList.remove('next2UP');
    //     // document.getElementById(proof6).style.left = "0%"
    //     document.getElementById(`proof6`).classList.add('nextUP');
    //     document.getElementById(`proof8`).classList.add('next2UP');

    //     document.getElementById(`paginaproof8`).style.display ="block"


    // }, 2000);

        setTimeout(() => {
            document.getElementById(`proof26`).classList.remove('beforeUP');
            document.getElementById(`proof29`).classList.remove('beforeUP');
            document.getElementById(`proof29`).classList.remove('before2UP');
            document.getElementById(`proof26`).classList.remove('next2UP');
            // document.getElementById(proof26).style.left = "0%"
            document.getElementById(`proof26`).classList.add('nextUP');
            document.getElementById(`proof29`).classList.add('next2UP');

            document.getElementById(`paginaproof29`).style.display ="block"

        }, 5000);

    // document.getElementById(`paginaproof29`).style.display ="block"

}

btn26dos.addEventListener("click", transition26NextDos)

let transition26Ind = ()=>{
    consanguinidad26dos.classList.remove("next2")
    consanguinidad26dos.classList.add("next2")

    
}

grado.addEventListener("click", transition26Ind)



