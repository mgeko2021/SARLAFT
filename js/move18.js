

let left = document.getElementById("left")
let rigth = document.getElementById("rigth")


let moveLeft = () => {
    let move1 = document.getElementById("move1") 
    let move2 = document.getElementById("move2") 
    let move3 = document.getElementById("move3") 

    


    move1.classList.remove("moveRight1")
    move1.classList.remove("moveRight2")
    move1.classList.remove("moveRight3")
    move2.classList.remove("moveRight1")
    move2.classList.remove("moveRight2")
    move2.classList.remove("moveRight3")
    move3.classList.remove("moveRight1")
    move3.classList.remove("moveRight2")
    move3.classList.remove("moveRight3")

    let contanerRelative = document.querySelector(".contanerRelative") 

        if(contanerRelative.classList.contains('position2')){
            contanerRelative.classList.remove("position2")
            contanerRelative.classList.add("position3")

            // 231

            move1.classList.remove("moveLeft1")
            move2.classList.remove("moveLeft2")
            move3.classList.remove("moveLeft3")
         
            move1.classList.add("moveLeft3")
            move2.classList.add("moveLeft1")
            move3.classList.add("moveLeft2")
            
            console.log("ya me movi")
        } 
        else if(contanerRelative.classList.contains('position3')){
            contanerRelative.classList.remove("position3")
            contanerRelative.classList.add("position1")

            // 312

            move1.classList.remove("moveLeft3")
            move2.classList.remove("moveLeft1")
            move3.classList.remove("moveLeft2")
         
            move1.classList.add("moveLeft2")
            move2.classList.add("moveLeft3")
            move3.classList.add("moveLeft1")
        }
        else{
            contanerRelative.classList.remove("position1")
            contanerRelative.classList.add("position2")

            // 123

            move1.classList.remove("moveLeft2")
            move2.classList.remove("moveLeft3")
            move3.classList.remove("moveLeft1")

            move1.classList.add("moveLeft1")
            move2.classList.add("moveLeft2")
            move3.classList.add("moveLeft3")
        }
}

left.addEventListener("mouseover", moveLeft)
left.addEventListener("click", moveLeft)



let moveRigth = () => {
    let move1 = document.getElementById("move1") 
    let move2 = document.getElementById("move2") 
    let move3 = document.getElementById("move3") 

    move1.classList.remove("moveLeft1")
    move1.classList.remove("moveLeft2")
    move1.classList.remove("moveLeft3")
    move2.classList.remove("moveLeft1")
    move2.classList.remove("moveLeft2")
    move2.classList.remove("moveLeft3")
    move3.classList.remove("moveLeft1")
    move3.classList.remove("moveLeft2")
    move3.classList.remove("moveLeft3")

    let contanerRelative = document.querySelector(".contanerRelative") 

        if(contanerRelative.classList.contains('position3')){
            contanerRelative.classList.remove("position3")
            contanerRelative.classList.add("position2")



            move1.classList.remove("moveRight1")
            move2.classList.remove("moveRight2")
            move3.classList.remove("moveRight3")
         
            move1.classList.add("moveRight2")
            move2.classList.add("moveRight3")
            move3.classList.add("moveRight1")
            
            console.log("ya me movi")
        } 
        else if(contanerRelative.classList.contains('position2')){
            contanerRelative.classList.remove("position2")
            contanerRelative.classList.add("position1")

            move1.classList.remove("moveRight2")
            move2.classList.remove("moveRight3")
            move3.classList.remove("moveRight1")
            
         
            move1.classList.add("moveRight3")
            move2.classList.add("moveRight1")
            move3.classList.add("moveRight2")
        }
        else{
            contanerRelative.classList.remove("position1")
            contanerRelative.classList.add("position3")

            // 123

            move1.classList.remove("moveRight3")
            move2.classList.remove("moveRight1")
            move3.classList.remove("moveRight2")

            move1.classList.add("moveRight1")
            move2.classList.add("moveRight2")
            move3.classList.add("moveRight3")
        }
}

rigth.addEventListener("mouseover", moveRigth)
rigth.addEventListener("click", moveRigth)

