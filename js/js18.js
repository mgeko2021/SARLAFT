let medallas2 = document.querySelectorAll('body img.PRESEAS2')
let tituloChange2 = document.getElementById('tenistexttitulo') 
let parrafoChange2 = document.getElementById('tenistexparrafo') 
let imgChange2 = document.getElementById('tenisimg') 
let fondotext2 = document.getElementById("tennistext")

let paginaproof18 = document.getElementById("paginaproof18")

//medallas incremento 
let medalla1Deb = false
let medalla2Deb = false
let medalla3Deb = false
let medalla4Deb = false
let medalla5Deb = false
let medalla6Deb = false
let medalla7Deb = false
let medalla8Deb = false


let medallaDerecho2 = (name) => {
    fondotext2.style.background ="white"
    switch (name) {
        case "MEDALLA2-1":
            tituloChange2.innerHTML ="1"
            parrafoChange2.innerHTML ="Cerciorarse nos encontramos vigilados por la Superintendencia Financiera de Colombia."
            imgChange2.setAttribute("src", "/img/PaG-16/Football.png");
            medalla1Deb = true
            break;
        case "MEDALLA2-2":
            tituloChange2.innerHTML ="2"
            parrafoChange2.innerHTML ="Informarse adecuadamente sobre el producto que se desea adquirir, indagando sus condiciones específicas y recomendaciones."
            imgChange2.setAttribute("src", "/img/PaG-16/Bowling_Ball.png");
            medalla2Deb = true
            break;
        case "MEDALLA2-3":
            tituloChange2.innerHTML ="3"
            parrafoChange2.innerHTML ="Entregar los documentos que la compañía requiera para llevar el proceso de aseguramiento."
            imgChange2.setAttribute("src", "/img/PaG-16/Table_Tennis.png");
            medalla3Deb = true
            break;
        case "MEDALLA2-4":
            tituloChange2.innerHTML ="4"
            parrafoChange2.innerHTML ="Revisar los términos y condiciones del contrato de seguro y sus anexos, y conservar copia de dichos documentos."
            imgChange2.setAttribute("src", "/img/PaG-16/Golf_Ball.png");
            medalla4Deb = true
            break;
        case "MEDALLA2-5":
            tituloChange2.innerHTML ="5"
            parrafoChange2.innerHTML ="Notificar los cambios en las condiciones del bien o la persona asegurada."
            imgChange2.setAttribute("src", "/img/PaG-16/Boxing_Glove.png");
            medalla5Deb = true
            break;
        case "MEDALLA2-6":
            tituloChange2.innerHTML ="6"
            parrafoChange2.innerHTML ="Informarse sobre los órganos y medios para presentar peticiones, quejas y reclamos."
            imgChange2.setAttribute("src", "/img/PaG-16/Volleyball.png");
            medalla6Deb = true
            break;
        case "MEDALLA2-7":
            tituloChange2.innerHTML ="7"
            parrafoChange2.innerHTML ="Informarse adecuadamente sobre el producto que se desea adquirir, indagando sus condiciones específicas y recomendaciones."
            imgChange2.setAttribute("src", "/img/PaG-16/Skateboard.png");
            medalla7Deb = true
            break;
        case "MEDALLA2-8":
            tituloChange2.innerHTML ="8"
            parrafoChange2.innerHTML ="Entregar los documentos que la compañía requiera para llevar el proceso de aseguramiento."
            imgChange2.setAttribute("src", "/img/PaG-16/Tennis_Ball.png");
            medalla8Deb = true
            break;
       
    }
    if(medalla1Deb && medalla2Deb && medalla3Deb && medalla4Deb && medalla5Deb && medalla6Deb){
        paginaproof18.style.display ="block"
    }
}

medallas2.forEach((medalla2, index) => {
    medalla2.addEventListener('click', (event) => {
        medallaDerecho2(event.target.name)
    })
})
