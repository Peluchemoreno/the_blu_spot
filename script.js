const menuOpenbtn = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-nav-container')
const mobileMenuExit = document.querySelector('.mobile-exit-menu')
const body = document.querySelector('body')

menuOpenbtn.addEventListener('pointerdown', openMenu)
mobileMenuExit.addEventListener('click', closeMenu)

// mobileMenu.style.display = 'none'

function openMenu(){
  console.log(mobileMenu)
  // mobileMenu.style.display = 'block'
  body.style.overflow = 'hidden';
  mobileMenu.style.transform = 'translateY(0px)'
}

function closeMenu(){
  console.log('close')
  // mobileMenu.style.display = 'none'
  body.style.overflow = 'visible'
  mobileMenu.style.transform = 'translateY(-200%)';
}
