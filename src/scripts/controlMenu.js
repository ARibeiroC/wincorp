window.addEventListener('load', listens)

// CAPTURA DO OBJETOS DO DOM
const backTop = document.querySelector('#backTop')
const checkbox = document.querySelector('#checkbox')
const iconMenu = document.querySelector('#iconMenu')
const areaMenu = document.querySelector('nav')
const menuHome = document.querySelector('#menuHome')
const menuAbout = document.querySelector('#menuAbout')
const menuWork = document.querySelector('#menuWork')
const menuWorkUs = document.querySelector('#menuWorkUs')
const menuContact = document.querySelector('#menuContact')

// Escutando Clicks
function listens(){
    checkbox.addEventListener("click", controlMenu)
    iconMenu.addEventListener("click", controlMenu)
    menuHome.addEventListener("click", controlMenu)
    menuAbout.addEventListener("click", controlMenu)
    menuWork.addEventListener("click", controlMenu)
    menuWorkUs.addEventListener("click", controlMenu)
    menuContact.addEventListener("click", controlMenu)
    
    document.addEventListener('scroll', showAndHiddenButtonBackToTop)
}

function showAndHiddenButtonBackToTop() {
    if (document.documentElement.scrollTop > 10) {
        backTop.style.top = '90vh'
    } else {
        backTop.style.top = '-10vh'
    }
  }


function btnMenu(){
    if (!checkbox.checked){
        checkbox.setAttribute("checked", "true")
    }else{
        checkbox.removeAttribute('checked')
    }    
}

function controlMenu(){
    btnMenu()
    if (checkbox.checked){
        areaMenu.style.width = '100vw'
    }else{
        areaMenu.style.width = '0vw'
    }    
}