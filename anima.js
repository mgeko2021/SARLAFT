/*document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forarch(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (windows.innerWidth - e.pageX*speed)/100;
        const y = (windows.innerHeight - e.pageX*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}*/


document.addEventListener("DOMContentLoaded", function(event) {
    
    anima2 = document.querySelectorAll('button#next')[1];
    anima2f = ()=>{
        document.querySelector('#proof2').querySelector('#boxing2').classList.add('desdeDerecha1');
        document.querySelector('#proof2').querySelector('#badminton').classList.add('desdeDerecha2');
        document.querySelector('#proof2').querySelector('#tenis').classList.add('desdeDerecha3');
        document.querySelector('#proof2').querySelector('#bate').classList.add('desdeDerecha4');

        document.querySelector('.presentacion2').querySelector('h2').classList.add('textoDesdeDerecha1');
    };
    anima2.addEventListener('click', anima2f);


    anima3 = document.querySelectorAll('button#next')[2];
    anima3f = ()=>{
        document.querySelector('#proof3').querySelector('.cliente').classList.add('desdeAbajo1');
        document.querySelector('#proof3').querySelector('.clientePotencial').classList.add('desdeAbajo2');
        document.querySelector('#proof3').querySelector('.usuario').classList.add('desdeAbajo3');

        document.querySelector('.presentacion2').querySelector('h2').classList.add('textoDesdeDerecha1');
    };
    anima3.addEventListener('click', anima3f);


    anima4 = document.querySelectorAll('button#next')[3];
    anima4f = ()=>{
        document.querySelector('#proof3a').querySelector('h3').classList.add('desdeAbajo1');
        document.querySelector('#proof3a').querySelector('h3').querySelector('b').classList.add('desdeAbajo2');
    };
    anima4.addEventListener('click', anima4f);


    anima5 = document.querySelectorAll('button#next')[4];
    anima5f = ()=>{
        document.querySelector('#proof4').querySelector('.objetivos').classList.add('desdeAbajo1');
        //document.querySelector('#proof4').querySelector('h2').classList.add('desdeAbajo1');
    };
    anima5.addEventListener('click', anima5f);

    anima6 = document.querySelectorAll('button#next')[7];
    anima6f = ()=>{
        document.querySelector('#proof7').querySelector('h2').classList.add('txtDesdeDerecha1');
        document.querySelector('#proof7').querySelector('h4').classList.add('txtDesdeDerecha2');
    };
    anima6.addEventListener('click', anima6f);


    anima13 = document.querySelectorAll('button#next')[10];
    anima13f = ()=>{
        document.querySelector('#proof13').querySelector('h3').classList.add('desdeAbajo1');
        document.querySelector('#proof13').querySelector('h5').classList.add('desdeAbajo1');
    };
    anima13.addEventListener('click', anima13f);

    
    /* CAMBIAR LOGOS A BLANCO PARA FONDOS NARANJAS */
    anima8 = document.querySelectorAll('button#next')[8];
    anima8f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima8.addEventListener('click', anima8f);

    anima9 = document.querySelectorAll('button#next')[9];
    anima9f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima9.addEventListener('click', anima9f);


    anima31 = document.querySelectorAll('button#next')[23];
    anima31f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima31.addEventListener('click', anima31f);

    anima32 = document.querySelectorAll('button#next')[24];
    anima32f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima32.addEventListener('click', anima32f);


    anima34 = document.querySelectorAll('button#next')[26];
    anima34f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima34.addEventListener('click', anima34f);

    anima35 = document.querySelectorAll('button#next')[28];
    anima35f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima35.addEventListener('click', anima35f);


    anima37 = document.querySelectorAll('button#next')[29];
    anima37f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima37.addEventListener('click', anima37f);

    anima38 = document.querySelectorAll('button#next')[30];
    anima38f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima38.addEventListener('click', anima38f);


    anima37 = document.querySelectorAll('button#next')[31];
    anima37f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima37.addEventListener('click', anima37f);

    anima40 = document.querySelectorAll('button#next')[32];
    anima40f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima40.addEventListener('click', anima40f);


    anima41 = document.querySelectorAll('button#next')[33];
    anima41f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima41.addEventListener('click', anima41f);

    anima42 = document.querySelectorAll('button#next')[34];
    anima42f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima42.addEventListener('click', anima42f);


    /* FIN */

});
