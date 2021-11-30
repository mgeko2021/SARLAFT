let btnNextBuild = document.querySelectorAll('body button.nextBtn')

// documentos 


let build = (name, nextName, nextName2) =>{
    


    switch (name) {

        case "start":
            let medioProof0 = document.getElementById("medioProof0")
            let adelanteProof0 = document.getElementById("adelanteProof0")
        
            setTimeout(() => {
                medioProof0.style.display = "block"
                medioProof0.classList.add("animation-proof0")    
            }, 2000);
            adelanteProof0.classList.add("opacityanimate")
        
            containerProof34hidden.classList.add("opacityanimateinverse")
            setTimeout(() => {
                containerProof34hidden.style.display = "none"
                containerProof34show.style.display = "block"
                containerProof34show.classList.add("opacityanimate")
        
            }, 2000);

            break
        case "proof0":
            let atrasProof1 = document.getElementById("atrasProof1")
            let medioProof1 = document.getElementById("medioProof1")
            let adelanteProof1 = document.getElementById("adelanteProof1")


            atrasProof1.classList.add("top100animateOpacity")
            adelanteProof1.classList.add("opacityanimate")

            setTimeout(() => {
                medioProof1.classList.add("topmenos100animate")
                
            }, 1000);
            // setTimeout(() => {
            // }, 2000);

            let adelanteProof2 = document.getElementById("adelanteProof2")
            setTimeout(() => {
                adelanteProof2.classList.add("topmenos100animate")
            }, 5000);
            
            break;

        case "proof1":
            let obj1 = document.getElementById("obj1")
            let obj2 = document.getElementById("obj2")
          

    
        case "proof3":
            let contagio3a = document.getElementById("contagio")
            let operativo3a = document.getElementById("operativo")
            contagio3a.classList.add("icons3")
            operativo3a.classList.add("icons4")
      
            setTimeout(() => {
                let reputacion3a = document.getElementById("reputacion")
                let corrupcion3a = document.getElementById("corrupcion")
                reputacion3a.classList.add("icons2")
                corrupcion3a.classList.add("icons5")

            }, 500);
            
            setTimeout(() => {
                let legal3a = document.getElementById("legal")
                let legal6a = document.getElementById("emergente")
                legal3a.classList.add("icons1")
                legal6a.classList.add("icons6")
  
            }, 1000);

            
            break;

        case "proof3a":
            let adelanteProof4 = document.getElementById("adelanteProof4")
            adelanteProof4.classList.add("topmenos100animate")
            

            
            break;
    
        default:
            break;
    }

} 


btnNextBuild.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        build(event.target.name, btnNext[index+1].name , btnNext[index+2].name)
    })
})




let proof34 = document.getElementById("proof34")

let change34 = () =>{
    const containerProof34hidden = document.querySelector(".containerProof34hidden")
    const containerProof34show = document.querySelector(".containerProof34show")

    let medioProof34 = document.getElementById("medioProof34") 
    let fondo34 = document.getElementById("fondo34") 

    medioProof34.classList.add("translatefastleft")
    fondo34.classList.add("translatefastrigth")

    containerProof34hidden.classList.add("opacityanimateinverse")
    setTimeout(() => {
        containerProof34hidden.style.display = "none"
        containerProof34show.style.display = "block"
        containerProof34show.classList.add("opacityanimate")

    }, 2000);

}

proof34.addEventListener("click", change34)


let proof39 = document.getElementById("proof39")

let change39 = () =>{
    const containerProof39TexUno = document.querySelector(".containerProof39TexUno")
    const containerProof39TexDos = document.querySelector(".containerProof39TexDos")

    let medio39 = document.getElementById("medio39") 
    let adelante39 = document.getElementById("adelante39") 
    let fondo39 = document.getElementById("fondo39") 

    medio39.classList.add("translatefastleft39")
    fondo39.classList.add("translatefastrigth39")
    adelante39.classList.add("translatefasfront39")

    containerProof39TexUno.classList.add("opacityanimateinverse")
    setTimeout(() => {
        containerProof39TexUno.style.display = "none"
        containerProof39TexDos.style.display = "block"
        containerProof39TexDos.classList.add("opacityanimate")

    }, 2000);

}

proof39.addEventListener("click", change39)
