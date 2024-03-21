let darkMode = true
const buttonToggle = document.getElementById('toogle-mode')

buttonToggle.addEventListener('click', (event)=>{
    document.documentElement.classList.toggle('light')

    const mode = darkMode ? 'light':'dark'
    event.currentTarget
        .querySelector('span').textContent = `${mode} mode ativado`

    darkMode=!darkMode
})


// my way of doing this 
// const btnTry = document.querySelector("#toogle-mode")
//const span = document.querySelector(".mode")
//let darkOrLight = ("dark")

//btnTry.addEventListener('click' , toogleScreen)

//function toogleScreen(){
//    document.documentElement.classList.toggle("light")
//    if(document.documentElement.classList.contains("light")){
//        darkOrLight = ("light")
//    }
//    else{
//        darkOrLight = ("dark")
//    }
//    span.textContent =`${darkOrLight} mode ativo`
//}