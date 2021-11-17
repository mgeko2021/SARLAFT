//imagenes que dan click
const principioOrientadores = document.querySelectorAll('body img.principiosImgClick')

//habalndo conitnuar
const continueOrientadores = document.querySelectorAll('body button.historiaButton')


//habalndo conitnuar pra retonar con texto cambiado
const continueBack = document.querySelectorAll('body button.emergenteContinuar')


//salir del prncipio emergente
const salirHistoria= document.querySelectorAll('body button.salirHistoriaButton')



//mostrar el recuadro 
const paginaproof30Btn = document.getElementById("paginaproof30")


// los p a cambiar
const changePprincipio1 = document.getElementById("changePprincipio1")
const changePprincipio2 = document.getElementById("changePprincipio2")
const changePprincipio3 = document.getElementById("changePprincipio3")
const changePprincipio4 = document.getElementById("changePprincipio4")
const changePprincipio5 = document.getElementById("changePprincipio5")
const changePprincipio6 = document.getElementById("changePprincipio6")

// picho
let pinchoPrincipio1 = false
let pinchoPrincipio2 = false
let pinchoPrincipio3 = false
let pinchoPrincipio4 = false
let pinchoPrincipio5 = false
let pinchoPrincipio6 = false


//botes de los principios 

//sonidos principios 
var ref9_1 = new Audio();
ref9_1.src="./sonidos/referencia9/Referencia 9/REF 9-1.mp3";

var ref9_2 = new Audio();
ref9_2.src="./sonidos/referencia9/Referencia 9/REF 9-2.mp3";

var ref9_3 = new Audio();
ref9_3.src="./sonidos/referencia9/Referencia 9/REF 9-3.mp3";

var ref9_4 = new Audio();
ref9_4.src="./sonidos/referencia9/Referencia 9/REF 9-4.mp3";

var ref9_5 = new Audio();
ref9_5.src="./sonidos/referencia9/Referencia 9/REF 9-5.mp3";

var ref9_6 = new Audio();
ref9_6.src="./sonidos/referencia9/Referencia 9/REF 9-6.mp3";

var ref9_7 = new Audio();
ref9_7.src="./sonidos/referencia9/Referencia 9/REF 9-7.mp3";

var ref9_8 = new Audio();
ref9_8.src="./sonidos/referencia9/Referencia 9/REF 9-8.mp3";

var ref9_9 = new Audio();
ref9_9.src="./sonidos/referencia9/Referencia 9/REF 9-9.mp3";

var ref9_10 = new Audio();
ref9_10.src="./sonidos/referencia9/Referencia 9/REF 9-10.mp3";

var ref9_11 = new Audio();
ref9_11.src="./sonidos/referencia9/Referencia 9/REF 9-11.mp3";

var ref9_12 = new Audio();
ref9_12.src="./sonidos/referencia9/Referencia 9/REF 9-12.mp3";



//index a principio 


//imagenes cambiantes

let principioChange = (name) => {
    console.log(name)
    document.getElementById(`${name}`).classList.add("emergentesPrincipios2")
    // for (let i = 0; i < salirHistoria.length; i++) {
    //     salirHistoria[i].style.display = "none"
    // }

    switch (name) {
        case "principio1":
            changePprincipio1.innerHTML ="Las relaciones entre las entidades vigiladas y los <br> consumidores financieros deben desarrollarse de <br> forma que se propenda por la satisfacción de las <br> necesidades del consumidor financiero, de acuerdo <br> con la oferta, compromiso y obligaciones acordadas. "
            ref9_1.play()
            

            setTimeout(() => {
                continueOrientadores[0].style.visibility = "visible"    
            }, 16000);
            
            break;
        case "principio2":
            changePprincipio2.innerHTML ="Las entidades vigiladas y los consumidores financieros <br> podrán escoger libremente a sus respectivas contrapartes <br> en la celebración de contratos para el suministro de <br> productos y servicios."
            ref9_3.play()
            setTimeout(() => {
                continueOrientadores[1].style.visibility = "visible"    
            }, 12000);
            
            break;
        case "principio3":
            changePprincipio3.innerHTML ="Las entidades vigiladas deben suministrar a los <br> consumidores financieros información cierta, <br> suficiente, clara y oportuna."
            ref9_5.play()
            setTimeout(() => {
                continueOrientadores[2].style.visibility = "visible"    
            }, 10000);
            
            break;
        case "principio4":
            changePprincipio4.innerHTML ="Debemos atender eficiente y debidamente las quejas <br> o reclamos de nuestros consumidores financieros e  <br> implementar acciones de mejora oportunas y continúas. <br> <br> Coomeva Corredor de Seguros deberá contar con canales que <br> le permita al Consumidor financiero presentar sus manifestaciones <br> de peticiones, queja y reclamos de manera que reciba una solución <br> oportuna y eficaz a sus inquietudes, sugerencias o felicitaciones."
            ref9_7.play()
            setTimeout(() => {
                continueOrientadores[3].style.visibility = "visible"    
            }, 27000);
            
        
            break;
        case "principio5":
            changePprincipio5.innerHTML ="Debemos administrar los conflictos que surjan en desarrollo <br> de nuestra actividad, los intereses propios y los de los <br> consumidores financieros, de manera transparente e imparcial, <br> velando porque siempre prevalezca el interés de los consumidores financieros."
            ref9_9.play()
            setTimeout(() => {
                continueOrientadores[4].style.visibility = "visible"    
            }, 16000);
            
            break;
        case "principio6":
            changePprincipio6.innerHTML ="Las entidades vigiladas, procurarán una adecuada educación de <br> los consumidores financieros respecto de los productos y servicios <br> financieros que ofrecen las entidades vigiladas, así como de <br> los diferentes mecanismos establecidos para la defensa de sus derechos. <br> El Corredor de Seguros Coomeva a través de su página web, ofrece <br> información al Consumidor Financiero con el fin de brindar Educación Financiera."
            ref9_11.play()
            setTimeout(() => {
                continueOrientadores[5].style.visibility = "visible"    
            }, 26000);
            
            break;
    }
}

principioOrientadores.forEach((principio, index) => {
    principio.addEventListener('click', (event) => {
        principioChange(event.target.name)
    })
})



let princOri1Cambia = document.getElementById("principio1Cambiante") 
let princOri2Cambia = document.getElementById("principio2Cambiante") 
let princOri3Cambia = document.getElementById("principio3Cambiante") 
let princOri4Cambia = document.getElementById("principio4Cambiante") 
let princOri5Cambia = document.getElementById("principio5Cambiante") 
let princOri6Cambia = document.getElementById("principio6Cambiante") 

//vamos de continue a hitoria

let continueChange = (name) => {

    switch (name) {
        case "historia1":
            document.getElementById(`${name}`).classList.add("emergentesPrincipios2") 
            // ref9_1.pause()
            // ref9_2.play()
            // if (princOri1Cambia.pause || !princOri1Cambia.ended) {
            //     princOri1Cambia,paa
            // }
            princOri1Cambia.play()
            setTimeout(() => {
                continueBack[0].style.visibility = "visible"    
            }, 44000);
            
           
            break;
        case "historia2":
            document.getElementById(`${name}`).classList.add("emergentesPrincipios2")    
            // ref9_4.play()
            // ref9_3.pause()
            princOri2Cambia.play()
            setTimeout(() => {
                continueBack[1].style.visibility = "visible"    
            }, 36000);
            
       
            break;
        case "historia3":
            document.getElementById(`${name}`).classList.add("emergentesPrincipios2")
            // ref9_5.pause() 
            // ref9_6.play()

            princOri3Cambia.play()
            setTimeout(() => {
                
                continueBack[2].style.visibility = "visible"   
            }, 44000);
            
        
            break;
        case "historia4":
            document.getElementById(`${name}`).classList.add("emergentesPrincipios2")    
            // ref9_8.play()
            // ref9_7.pause()
            princOri4Cambia.play()
            setTimeout(() => {
                continueBack[3].style.visibility = "visible"    
                
            }, 61000);
            
            break;
        case "historia5":
            
            document.getElementById(`${name}`).classList.add("emergentesPrincipios2")
            // ref9_10.play()
            // ref9_9.pause()
            princOri5Cambia.play()
            setTimeout(() => {
                continueBack[4].style.visibility = "visible"    
            }, 63000);
            
        
            break;
        case "historia6":
            document.getElementById(`${name}`).classList.add("emergentesPrincipios2")
            // ref9_12.play()
            // ref9_11.pause()
            princOri6Cambia.play()
            setTimeout(() => {
                continueBack[5].style.visibility = "visible"    
            }, 25000);
            
            break;
    }
   
}

continueOrientadores.forEach((continuar, index) => {

    continuar.addEventListener('click', (event) => {
        continueChange(event.target.name)
    })

})


let continueChangeBack = (name) => {
    document.getElementById(`${name}`).classList.remove("emergentesPrincipios2")
    document.getElementById(`${name}`).classList.add("emergentesPrincipios")
 

    switch (name) {
        case "historia1":
            princOri1Cambia.pause()
            continueBack[0].style.visibility = "hidden"
            salirHistoria[0].style.visibility = "visible"
            changePprincipio1.innerHTML =" El consumidor financiero, asegurado de la  póliza <br> de autos recibió la atención que requería en el justo momento. <br> Fue atendida de manera oportuna y manifestó plena satisfacción con <br> el servicio prestado. ¡Eso es hacer una Debida diligencia!"
            pinchoPrincipio1 = true
            break;
        case "historia2":
            princOri2Cambia.pause()
            continueBack[1].style.visibility = "hidden"
            salirHistoria[1].style.visibility = "visible"
            changePprincipio2.innerHTML ="Informarse adecuadamente sobre el producto que se desea adquirir, indagando sus condiciones específicas y recomendaciones."
            pinchoPrincipio2= true
            break;
        case "historia3":
            princOri3Cambia.pause()
            continueBack[2].style.visibility = "hidden"
            salirHistoria[2].style.visibility = "visible"
            changePprincipio3.innerHTML ="Entregar los documentos que la compañía requiera para llevar el proceso de aseguramiento."
            pinchoPrincipio3= true
            break;
        case "historia4":
            princOri4Cambia.pause()
            continueBack[3].style.visibility = "hidden"
            salirHistoria[3].style.visibility = "visible"
            changePprincipio4.innerHTML ="Revisar los términos y condiciones del <br> contrato de seguro y sus anexos, y conservar copia de <br> dichos documentos."
            pinchoPrincipio4= true
            break;
        case "historia5":
            princOri5Cambia.pause()
            continueBack[4].style.visibility = "hidden"
            salirHistoria[4].style.visibility = "visible"
            changePprincipio5.innerHTML ="Notificar los cambios en las condiciones del bien o la persona asegurada."
            pinchoPrincipio5= true
            break;
        case "historia6":
            princOri6Cambia.pause()
            continueBack[5].style.visibility = "hidden"
            salirHistoria[5].style.visibility = "visible"
            changePprincipio6.innerHTML ="Informarse sobre los órganos y medios para presentar peticiones, quejas y reclamos."
            pinchoPrincipio6= true
            break;
    }

    if(pinchoPrincipio1 && pinchoPrincipio2 && pinchoPrincipio3 && pinchoPrincipio4 && pinchoPrincipio4 && pinchoPrincipio5 && pinchoPrincipio6){
        paginaproof30Btn.style.display = "block" 
    }
}

continueBack.forEach((continuarBack, index) => {
    continuarBack.addEventListener('click', (event) => {
        continueChangeBack(event.target.name)
    })
})


// de la historia al continue
let salirHistoriaBack = (name) => {
    console.log(name)
    document.getElementById(`${name}`).classList.remove("emergentesPrincipios2")
    document.getElementById(`${name}`).classList.add("emergentesPrincipios")

    switch (name) {
        case "principio1":
            salirHistoria[0].style.visibility = "hidden"
            continueOrientadores[0].style.visibility = "hidden"
            break;
        case "principio2":
            salirHistoria[1].style.visibility = "hidden"
            continueOrientadores[1].style.visibility = "hidden"
            break;
        case "principio3":
            salirHistoria[2].style.visibility = "hidden"
            continueOrientadores[2].style.visibility = "hidden"
            break;
        case "principio4":
            salirHistoria[3].style.visibility = "hidden"
            continueOrientadores[3].style.visibility = "hidden"
            break;
        case "principio5":
            salirHistoria[4].style.visibility = "hidden"
            continueOrientadores[4].style.visibility = "hidden"
            break;
        case "principio6":
            salirHistoria[5].style.visibility = "hidden"
            continueOrientadores[5].style.visibility = "hidden"
            break;
    }

    
}

salirHistoria.forEach((salirHisto, index) => {
    salirHisto.addEventListener('click', (event) => {
        salirHistoriaBack(event.target.name)
    })
})


