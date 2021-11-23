let btnNextBuild = document.querySelectorAll('body button.nextBtn')

// documentos 


let build = (name, nextName, nextName2) =>{
    


    switch (name) {
        case "proof0":
            let atrasProof1 = document.getElementById("atrasProof1")
            let medioProof1 = document.getElementById("medioProof1")
            let adelanteProof1 = document.getElementById("adelanteProof1")


            atrasProof1.classList.add("animaDown")
            adelanteProof1.classList.add("opacity")

            setTimeout(() => {
                medioProof1.classList.add("animaUps")
                
            }, 1000);
            // setTimeout(() => {
            // }, 2000);

            let adelanteProof2 = document.getElementById("adelanteProof2")
            setTimeout(() => {
                adelanteProof2.classList.add("animaUps")
            }, 5000);
            
            break;
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
    
        default:
            break;
    }

} 


btnNextBuild.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        build(event.target.name, btnNext[index+1].name , btnNext[index+2].name)
    })
})


