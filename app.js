const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

//Effect
// let line1 = document.querySelector('.line--1')
// let line2 = document.querySelector('.line--2')

// window.onscroll = () => {
//     let pos = window.scrollY - 800;
//     line1.style.left = `${pos}px`
//     line2.style.right = `${pos}px`
// }

// Display Mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

//Show active menu while scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const projectsMenu = document.querySelector('#projects-page');
    let scrollPos = window.scrollY;

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        projectsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);