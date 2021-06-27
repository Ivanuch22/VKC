const swiper = new Swiper('.swiper-container', {
   loop: true,
   pagination: {
      el: '.swiper-pagination',
   },
   breakpoints: {
      320: {
         spaceBetween: 10,
         slidesPerView: 2
      },
      500: {
         spaceBetween: 20,

         slidesPerView: 3
      },
      1000: {
         spaceBetween: 30,

         slidesPerView: 4
      },
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

let body = document.querySelector('body');

//burger 
const burgerButton = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__wrapper');
let menuButtons = document.querySelectorAll('.header__button');
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


//modal
const openModalButton = document.querySelector('.offer__button');
const closeModalButton = document.querySelector('.formModal__exit');
const mainModal = document.querySelector(".formModal");

openModalButton.addEventListener(('click'), () => {
   mainModal.classList.add('formModal--active');
   body.classList.add('body--active');
});
closeModalButton.addEventListener(('click'), () => {
   mainModal.classList.remove('formModal--active');
   body.classList.remove('body--active');
})