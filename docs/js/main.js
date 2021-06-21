const swiper = new Swiper('.swiper-container', {
   loop: true,
   pagination: {
      el: '.swiper-pagination',
   },
   spaceBetween: 30,
   slidesPerView: 4,

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

//burger 
const burgerButton = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__wrapper');
let menuButtons = document.querySelectorAll('.header__button');
let body = document.querySelector('body');
const menuBlock = document.querySelectorAll('.header__link')

burgerButton.addEventListener('click', () => {
   menu.classList.toggle('wrapper--active');
   burgerButton.classList.toggle('menu__burger--active');
   menuBlock.forEach((e) => {
      e.classList.toggle('header__link--active')
   })
   menuButtons.forEach((e) => {
      e.classList.toggle('header__button--active')
   });
   body.classList.toggle('body--active');
});
