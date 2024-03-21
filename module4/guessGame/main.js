const screen1 =document.querySelector(".screen1")
const screen2 =document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")
let randomNumber = Math.round(Math.random()*10)
let xAttempts = 1

btnTry.addEventListener('click' , handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', clickEnter)



function handleTryClick(event){
    event.preventDefault()
    if(inputNumber.value != ""){
        if(inputNumber.value < 1 ){
            alert("Ops, algo deu errado. Digite um número entre 0 e 10, tente novamente!")
            }
        if(inputNumber.value > 10){
            alert("Ops, algo deu errado. O número digitado é maior que 10. Tente novamente!")
            }

        if (Number(inputNumber.value)== randomNumber) {
            toogleScreen()
            document
                .querySelector(".screen2 h2")
                .innerText = `acertou em ${xAttempts} tentativas`
        }
        
        inputNumber.value =""
        xAttempts++
    }

}

function handleResetClick(){
    toogleScreen()
    xAttempts=1
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

