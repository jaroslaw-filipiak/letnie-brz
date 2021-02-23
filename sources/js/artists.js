console.log('artysci page /swiper');

import '../scss/artysci.scss'
import Swiper from 'swiper/bundle';


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    // effect: 'coverflow',
    parallax: true,
    spaceBetween: -150,
    centeredSlides: true,
    navigation: {
        nextEl: '.artists-button-next',
        prevEl: '.artists-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: -10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: -10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: -150
        },
      }
  });

