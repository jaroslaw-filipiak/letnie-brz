
import '../scss/artysci.scss'
import Swiper from 'swiper/bundle';

window.addEventListener('load', () => {
  
  // const swiper = new Swiper('.swiper-container', {
  //   slidesPerView: 1,
  //   loop: true,
  //   // effect: 'coverflow',
  //   parallax: true,
  //   spaceBetween: 0,
  //   centeredSlides: true,
  //   navigation: {
  //       nextEl: '.artists-button-next',
  //       prevEl: '.artists-button-prev',
  //     },
  //     breakpoints: {
  //       640: {
  //         slidesPerView: 2,
  //         spaceBetween:  5,
  //       },
  //       768: {
  //         slidesPerView: 2,
  //         spaceBetween: 130,
  //       },
  //       1024: {
  //         slidesPerView: 3,
  //         spaceBetween: 50
  //       },
  //       1306: {
  //         slidesPerView: 3,
  //         spaceBetween: -150
  //       },
  //     }
  // });

  function checkTerm() {
     const bodyClasses = document.querySelector('body').classList[1]
     const currentCity = bodyClasses.substring(5)
  
     console.log(currentCity)

     switch(currentCity){
       case 'poznan':
         console.log('is current city poznan');
         appendCity()
     }
  }

  // function appendCity() {
  //   const menuItem = document.querySelector('#menu-item-38') ;
  //   const template = `<li style="border: 1px solid red;" id="menu-item-44" class="city-label city-poznan menu-item menu-item-type-post_type menu-item-object-page menu-item-44"><a href="http://localhost/letnie-brzmienia/artysci/poznan/"><img class="img-fluid" src="http://localhost/letnie-brzmienia/wp-content/themes/letnie-brzmienia/_dev/docs/images/buttons/badge_white.png">Poznań</a></li>`;

  //   menuItem.insertAdjacentHTML("beforeend", template)
  // }

  // checkTerm();

});




