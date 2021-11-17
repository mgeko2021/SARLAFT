let btnNextSonidos = document.querySelectorAll('body button.nextBtn')
let btnBeforeSonidos = document.querySelectorAll('body button.beforeBtn')


let nivelesZindex = document.querySelector(".logo")



// sonidos ref 1 2 y 3
var ref1 = new Audio();
ref1.src="./sonidos/referencias1,2y3/REF 1-2.mp3";

var ref2 = new Audio();
ref2.src="./sonidos/referencias1,2y3/REF 2-1.mp3";

var ref3 = new Audio();
ref3.src="./sonidos/referencias1,2y3/ref 3.mp3";

// sonidos ref 4 y 7
var ref4_1 = new Audio();
ref4_1.src="./sonidos/referencias4y7/REF 4-1.mp3";

// sonidos ref 4 y 7
var ref4_2 = new Audio();
ref4_2.src="./sonidos/referencias4y7/REF 4-2.mp3";

var ref7 = new Audio();
ref7.src="./sonidos/referencias4y7/REF 7.mp3";

//sonidos 5
var ref5 = new Audio();
ref5.src="./sonidos/referencia5/REF 5.mp3";

//sonidos 6
var ref6_1 = new Audio();
ref6_1.src="./sonidos/referencia6/REF6/REF 6-1.mp3";

//sonidos 9
var ref9 = new Audio();
ref9.src="./sonidos/referencia9/9.3.mp3";

//sonidos 10 y 11
var ref10 = new Audio();
ref10.src="./sonidos/referencias10y11/REF 10.1.mp3";

var ref11 = new Audio();
ref11.src="./sonidos/referencias10y11/Referencia 11/REF 11-1.mp3";

//sonidos 12
var ref12_1 = new Audio();
ref12_1.src="./sonidos/Referencia 12-13-14-15/REF 12-1.mp3";

var ref12_2 = new Audio();
ref12_2.src="./sonidos/Referencia 12-13-14-15/REF 12-2.mp3";

//sonidos 13
var ref13_1 = new Audio();
ref13_1.src="./sonidos/Referencia 12-13-14-15/REF 13-1.mp3";

var ref13_2 = new Audio();
ref13_2.src="./sonidos/Referencia 12-13-14-15/REF 13-2.mp3";

//sonidos 14

var ref14_1 = new Audio();
ref14_1.src="./sonidos/Referencia 12-13-14-15/REF 14-1.mp3";

//sonidos 15

var ref15_1 = new Audio();
ref15_1.src="./sonidos/Referencia 12-13-14-15/REF 15-1.mp3";

var silbato = new Audio();
silbato.src="./sonidos/SILBATO.mp3";



let startbool = false
let proof1bool = false
let proof3abool = false
let proof4bool = false
let proof6bool = false

let proof5bool =false


let proof7bool = false

let proof9bool = false

let proof11bool = false

let proof36bool = false

let proof37bool = false

let proof39bool = false

let proof41bool = false

let proof42bool = false

let proof43bool = false


//juegos bool
let juego8 = false

//derechos medalla a medalla
let medallas16 = false //derechos
let medallas17 = false //deberes


// psita salto bool
let medallas20 = false

//velocidad bool
let velocidad25 = false

//velocidad bool
let pruebaAgilidad32 = false

//pista olimpica bool
let pistaOlimpica32 = false

// sanciones bool
let sanciones38 = false

//principios prientadores
let prinOrientadores = false

// sanciones bool
let canalAtencion42 = false

//derechos y deberes
let derYDeb = false

//logica escritorio
let escritorio = false

//logica cuadro arrastre
let agilidadbool = false


let auto3 = false


console.log(btnNextSonidos)
let sonidoNext = (name, nextName,nextName2) => {
  console.log(name)
    switch (name) {
        
        case "start": // de start a prof1
            if(!startbool){
            // setTimeout(() => {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                startbool = true
            // }, 19000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
            }
            break

        
        case "proof1": // de proof 2
            ref1.pause()  // subir lucho
            if(!proof1bool){
            // setTimeout(() => {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                proof1bool = true
            // }, 21000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
            }

            break;

        case "proof2": // subir lucho
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
            break;

        case "proof3": //automatica vertical
            if(!auto3){
                setTimeout(() => {
                    document.getElementById(`pagina${nextName2}`).style.display ="block"
                    auto3 = true

            }, 5000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }
            break;
        

        case "proof3a":
            if(!proof3abool){
            // setTimeout(() => {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                proof3abool = true
            // }, 14000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
            }

            break;

        case "proof4":
            if(!proof4bool){
            // setTimeout(() => {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                proof4bool = true
            // }, 53000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
            }

            break;


        case "proof6": // subir lucho NO SE PUEDE QUITAR
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="block"
        break;

        case "proof15": // //derechos y deberes lucho NO SE PUEDE QUITAR
            if(!derYDeb){
                setTimeout(() => {
                    document.getElementById(`paginaproof17`).style.display ="block"
                    derYDeb = true

            }, 5000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }
            break;
        
        case "proof16": //NO SE MODIFICAN
            // if(!medallas16){
            // document.getElementById(`pagina${nextName}`).style.display ="none"
            // document.getElementById(`pagina${name}`).style.display ="none"
            // medallas16 = true
            // } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            // }
            break;
    
        case "proof17": 
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
        break;
        
        
        case "proof18": //pista nivles vistos
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            break;
        
        case "proof21": //pista nivles vistos
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            break;

            
        case "proof24": // ele juego de arratrar
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            break;

        case "proof29":  //modificar
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            break;

        case "proof30":
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            break;

        case "proof31": //listo
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            break;

        case "proof32": // listo
                document.getElementById(`pagina${nextName}`).style.display ="block"
            break;
        
        case "proof33": 
                document.getElementById(`pagina${nextName}`).style.display ="block"
            break;

        case "proof34":
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
            break;


        case "proof35":
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            break;
    

        case "proof36": //listo
                document.getElementById(`pagina${nextName}`).style.display ="block"
            break;

        case "proof37": // listo
                document.getElementById(`pagina${nextName}`).style.display ="block"
            break;

 
        case "proof38": //listo
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            break;

        case "proof41": // listo 
                document.getElementById(`pagina${nextName}`).style.display ="block"
            break;

        case "proof40": // listo
                document.getElementById(`pagina${nextName}`).style.display ="block"
            break;

        case "proof40a": //listo
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            break;

        case "proof43": //listo
                document.getElementById(`pagina${nextName}`).style.display ="block"
            break;

        case "proof43": //listo
                document.getElementById(`pagina${nextName}`).style.display ="block"
            break;

        default:
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
            break;
    }

    document.getElementById(`pagina${name}`).style.display ="none"

}

btnNextSonidos.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        sonidoNext(event.target.name, btnNextSonidos[index+1].name, btnNextSonidos[index+2].name)
    })
})










