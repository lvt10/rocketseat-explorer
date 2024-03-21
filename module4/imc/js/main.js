import {Modal} from './modal.js'
import { alertError } from './alert-error.js'
import { notANumber } from './utils.js'
import { calculateIMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
//inputWeight.oninput =() => alertError.close()
//nputHeight.oninput =() => alertError.close()
form.onsubmit= handleClick
form.oninput = handleClick2

function handleClick(event){
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value
    
    const weightOrHeightIsNotANumber = notANumber(weight)|| notANumber(height)
    if(weightOrHeightIsNotANumber){
        alertError.open()
        return;
    }

    const result = calculateIMC(weight, height)
    displayResultMessage(result)

}
function handleClick2(){

    onchange = alertError.close()

}
function displayResultMessage(result){
    const message = `seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}
