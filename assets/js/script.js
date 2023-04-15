window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar')
    navbar.classList.toggle('scrollOn', window.scrollY > 0)
})

let hamburger = document.querySelector('.hamburger')
let mobileMenu = document.querySelector('.mobile__menu')
let menuClose = document.querySelector('.mm__hamb i')

let menuLinks = document.querySelectorAll('.menu__close')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})
menuClose.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})

for(let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
    })
}