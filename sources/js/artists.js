console.log('artysci page /swiper');

import '../scss/artysci.scss'
import Swiper from 'swiper/bundle';


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // effect: 'coverflow',
    parallax: true,
    spaceBetween: 0,
    centeredSlides: true,
    navigation: {
        nextEl: '.artists-button-next',
        prevEl: '.artists-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween:  5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 130,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        1306: {
          slidesPerView: 3,
          spaceBetween: -150
        },
      }
  });

