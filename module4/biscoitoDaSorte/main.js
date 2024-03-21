const screen1 =document.querySelector(".screen1")
const screen2 =document.querySelector(".screen2")
const btnTry = document.querySelector("#img1")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random()*10)

btnTry.addEventListener('click' , handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', clickEnter)


function handleTryClick(event){
    event.preventDefault()
    toogleScreen()
      
    switch(randomNumber) {
        case 0: screen2.querySelector("h3").innerText = "banana"
        break
        case 1: screen2.querySelector("h3").innerText = "bola"
        break
        case 2: screen2.querySelector("h3").innerText = "maçã"
        break
        case 3: screen2.querySelector("h3").innerText = "mão"
        break
        case 4: screen2.querySelector("h3").innerText = "jaca"
        break
        case 5: screen2.querySelector("h3").innerText = "azul"
        break
        case 6: screen2.querySelector("h3").innerText = "www"
        break
        case 7: screen2.querySelector("h3").innerText = "macaco"
        break
        case 8: screen2.querySelector("h3").innerText = "vaca"
        break
        case 9: screen2.querySelector("h3").innerText = "balão"
        break
        case 10: screen2.querySelector("h3").innerText = "asssss"
        break
        default:
        break
          }
      }

function handleResetClick(){
    toogleScreen()
    randomNumber = Math.round(Math.random()*10)
}

function toogleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
function clickEnter(){
    if(clickEnter.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
}

