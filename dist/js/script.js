// Navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header')
    const toTop = document.querySelector('#to-top')
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// click anywhere
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// Dark mode
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function(){
    html.classList.toggle('dark')
})