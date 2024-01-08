const menuOpenbtn = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-nav-container')
const mobileMenuExit = document.querySelector('.mobile-exit-menu')
const body = document.querySelector('body')

menuOpenbtn.addEventListener('pointerdown', openMenu)
mobileMenuExit.addEventListener('click', closeMenu)


function openMenu(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
  body.style.overflow = 'hidden';
  mobileMenu.style.transform = 'translateY(0px)'
}

function closeMenu(){
  console.log('close')
  // mobileMenu.style.display = 'none'
  body.style.overflow = 'visible'
  mobileMenu.style.transform = 'translateY(-200%)';
}
