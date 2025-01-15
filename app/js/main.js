new Swiper ('.hero__inner', {
    sliderPerView: 1,
    autoplay: {
        delay: 5000,
    },
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    effect: 'fade', 
    fadeEffect: {
        crossFade: true, 
      },
});

const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.header');
const stopScroll = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    stopScroll.classList.toggle('stop-scroll');
});