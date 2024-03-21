import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./element.js"
import * as sounds from "./sound.js"

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()
    if(state.isMuted){
        sounds.buttonPressAudio.play()
        return
    }

}
export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    if(state.isMuted){
        sounds.buttonPressAudio.play()
        return
    }
}
export function set(){
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
    if(state.isMuted){
        sounds.buttonPressAudio.play()
        return
    }
}
export function toggleMusic(){
    state.isMuted = document.documentElement.classList.toggle('music-on')
    if(!state.isMuted){
        sounds.bgAudio.pause()
        return
    }
    sounds.bgAudio.play()
}