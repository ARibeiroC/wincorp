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
    iconMenu.addEventListener('click', activeMenu)
    menuHome.addEventListener("click", activeMenu)
    menuAbout.addEventListener("click", activeMenu)
    menuWork.addEventListener("click", activeMenu)
    menuWorkUs.addEventListener("click", activeMenu)
    menuContact.addEventListener("click", activeMenu)
    
    document.addEventListener('scroll', showAndHiddenButtonBackToTop)
}

function activeMenu(){
    areaMenu.classList.toggle('active')
}


function showAndHiddenButtonBackToTop() {
    if (document.documentElement.scrollTop > 10) {
        backTop.style.top = '90vh'
    } else {
        backTop.style.top = '-10vh'
    }
}


// function controlMenu(){
//     btnMenu()
//     if (checkbox.checked){
//         areaMenu.style.width = '100vw'
//     }else{
//         areaMenu.style.width = '0vw'
//     }    
// }