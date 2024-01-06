const menuOpenbtn = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-nav-container')
const mobileMenuExit = document.querySelector('.mobile-exit-menu')
const body = document.querySelector('body')

menuOpenbtn.addEventListener('pointerdown', openMenu)
mobileMenuExit.addEventListener('click', closeMenu)

function openMenu(){
  console.log(mobileMenu)
  body.style.overflow = 'hidden';
  mobileMenu.style.transform = 'translateY(0px)'
}

function closeMenu(){
  console.log('close')
  body.style.overflow = 'visible'
  mobileMenu.style.transform = 'translateY(-200%)';
}
