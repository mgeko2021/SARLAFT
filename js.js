let btnNext = document.querySelectorAll('body button.nextBtn')
let btnBefore = document.querySelectorAll('body button.beforeBtn')


var sonido = new Audio();
sonido.src="";

let transicionAuto = false
let transicion1 = false
let click = false


let transitionNext = (name, nextName, nextName2) => {

    // desplazamiento inicial
    switch (name) {

        // normalizado vetical, vertical, horizontal automatizado
        case "proof3a":
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            // document.getElementById(${name}).style.left = "0%"
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP');
            if(!transicionAuto){
                setTimeout(() => {
                    document.getElementById(`${nextName}`).classList.remove('beforeUP');
                    document.getElementById(`${nextName}`).classList.remove('next2UP');
                    document.getElementById(`${nextName}`).classList.add('nextUP');

                    document.getElementById(`${nextName2}`).style.left = "0%";
                    document.getElementById(`${nextName2}`).classList.remove('beforeUP');
                    document.getElementById(`${nextName2}`).classList.add('next2');

                    // document.getElementById(`pagina${nextName2}`).style.display ="block"

                    transicionAuto = true
                }, 5000);

            } else {
                document.getElementById(`${name}`).classList.remove('beforeUP');
                document.getElementById(`${nextName}`).classList.remove('before');
                document.getElementById(`${nextName}`).classList.remove('before2');
                document.getElementById(`${name}`).classList.remove('next2UP');
                document.getElementById(`${name}`).classList.add('nextUP');
                document.getElementById(`${nextName}`).classList.add('next2');
            }
    
            break;



        //normalizado vertical automatico
        case "start":
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            // document.getElementById(${name}).style.left = "0%"
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP');
            if(!transicion1){
                setTimeout(() => {
                    document.getElementById(`${nextName}`).classList.remove('beforeUP');
                    document.getElementById(`${nextName2}`).classList.remove('beforeUP');
                    document.getElementById(`${nextName2}`).classList.remove('before2UP');
                    document.getElementById(`${nextName}`).classList.remove('next2UP');
                    // document.getElementById(${name}).style.left = "0%"
                    document.getElementById(`${nextName}`).classList.add('nextUP');
                    document.getElementById(`${nextName2}`).classList.add('next2UP');

                    //boton para mostrar
                    document.getElementById(`pagina${nextName2}`).style.display ="block"


                    transicion1 = true
                }, 5000);

            }
            break

         //normalizado horizontal adyecten inmediatamente anterior de la 15
        // case "start":
        case "proof15":
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before');
            document.getElementById(`${nextName}`).classList.remove('before2');
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2');
            if(!transicionAuto){
                setTimeout(() => {
                    document.getElementById(`${nextName}`).style.left = "0%";
                    document.getElementById(`${nextName}`).classList.remove('beforeUP');
                    document.getElementById(`${nextName}`).classList.add('next2');
                    document.getElementById(`${nextName}`).classList.add('nextUP');


                    document.getElementById(`${nextName2}`).classList.remove('beforeUP');
                    document.getElementById(`${nextName2}`).classList.remove('before2UP');
                    document.getElementById(`${nextName2}`).classList.add('next2UP');
                    transicionAuto = true
                }, 5000);
            } else {
                document.getElementById(`${name}`).classList.remove('beforeUP');
                document.getElementById(`${nextName}`).classList.remove('before');
                document.getElementById(`${nextName}`).classList.remove('before2');
                document.getElementById(`${name}`).classList.remove('next2UP');
                document.getElementById(`${name}`).classList.add('nextUP');
                document.getElementById(`${nextName}`).classList.add('next2');
            }
    
            break;
    

        //normalizado horizontal adyecten inmediatamente anterior
        case "proof4" : 
        case "proof8" :
        case "proof15":
        case "proof18":
        case "proof26":
        case "proof30":
        case "proof33":
        case "proof36":
        case "proof32":
        case "proof43":
        case "proof50":
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before');
            document.getElementById(`${nextName}`).classList.remove('before2');
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2');
    
            break;

        //normalizado horizontal
        case "proof6":
        case "proof13":
        case "proof16":
        case "proof21":
        case "proof29":
        case "proof31":
        case "proof34":
        case "proof37":
        case "proof41":
        case "proof44":
        case "proof51":
            document.getElementById(`${name}`).style.left = "0%";
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('next2');
            document.getElementById(`${nextName}`).classList.remove('next');
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP'); 
            break;

        //depzplazaminto default vertical
        default:
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            // document.getElementById(${name}).style.left = "0%"
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP');
            break;
    }

}

btnNext.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        transitionNext(event.target.name, btnNext[index+1].name , btnNext[index+2].name)
    })
})

let click17 = false

let transitionBefore = (name, beforeName) => {
    switch (name) {
        case "proof1":
            document.getElementById(`${beforeName}`).classList.remove('nextUP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('before2UP');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            break;

        //nuevas paginas before
        case "proof17":  
            if (!click17) {

                document.getElementById(`${beforeName}`).classList.remove('next2');
                document.getElementById(`${name}`).classList.remove('next2');
                document.getElementById(`${beforeName}`).classList.remove('nextUP');  

                document.getElementById(`${name}`).classList.remove('next2UP');
                document.getElementById(`${name}`).classList.add('before2UP');
       
                document.getElementById(`proof16`).classList.remove('beforeUP');
                document.getElementById(`proof16`).classList.remove('before2');
                document.getElementById(`proof16`).classList.remove('next2UP');
                document.getElementById(`proof16`).classList.add('next2');

            } else {
                document.getElementById(`proof17`).classList.remove('before2UP');
            }
    
            break;
    
  



        case "proof6":
            
        case "proof13":
        case "proof16":
        case "proof21":

        case "proof29":
        case "proof31":
        case "proof34":
        case "proof37":
        case "proof41":
        case "proof44":
        case "proof51":
            document.getElementById(`${name}`).classList.remove('next');
            document.getElementById(`${beforeName}`).classList.remove('nextUP');
            document.getElementById(`${name}`).classList.add('before2');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            break;
        
        case "proof8":
        case "proof23":
        case "proof17":
        case "proof18":
        case "proof24":
        case "proof26":
        case "proof30":
        case "proof33":    
        case "proof36":    
        case "proof32":    
        case "proof43":
        case "proof50":
            document.getElementById(`${name}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2');
            document.getElementById(`${beforeName}`).classList.remove('next2');
            document.getElementById(`${name}`).classList.remove('next2');
            document.getElementById(`${beforeName}`).classList.remove('nextUP');   
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('before2UP');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            break;

        default:
            document.getElementById(`${name}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${beforeName}`).classList.remove('nextUP');   
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('before2UP');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2UP');
        break;
    }

    
    document.getElementById(`pagina${name}`).style.display ="none"
    document.getElementById(`pagina${beforeName}`).style.display ="block"
        
}

btnBefore.forEach((button, index) => {
    button.addEventListener('click', (event) => {
            transitionBefore(event.target.name, btnBefore[index-1].name)
    })
})


const elements = document.getElementsByName("proof9")


const saltos =() => {
    console.log()

}





