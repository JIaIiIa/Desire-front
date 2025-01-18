new Swiper ('.hero__inner', {
    sliderPerView: 1,
    autoplay: {
        delay: 5000,
    },
    loop: true,
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


function noHover() {
    if (window.innerWidth <= 900) {
        document.body.classList.add('no-hover');
      } else {
        document.body.classList.remove('no-hover');
      }
}

window.addEventListener('resize', noHover);
noHover();

const galleryBtn = document.querySelectorAll('.gallery__select')

galleryBtn.forEach((item) => {
    item.addEventListener('click', () => {
        galleryBtn.forEach((item) => {
            item.classList.remove('active');
        })
        item.classList.add('active');
    })
})
